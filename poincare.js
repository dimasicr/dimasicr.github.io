// https://codegolf.stackexchange.com/questions/55848/plot-a-hyperbolic-plane-tessellation

// Create the SVG document
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const main_colour = '#F7F0F5';
const secondary_colour =  '#333';
const es = [];
const es_new = [];


// Resize screen accordingly
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
if (screenWidth >=  400){
  svg.setAttribute("width", 400);
  svg.setAttribute("height", 400);
}
else {
  svg.setAttribute("width", screenWidth * (screenWidth/ 400));
  svg.setAttribute("height", screenWidth * (screenWidth/ 400));
}

bg_rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
bg_rect.setAttribute("width", "100%");
bg_rect.setAttribute("height", "100%");
bg_rect.setAttribute("fill", secondary_colour);
svg.appendChild(bg_rect);


function createAdjacencyList(edges) {
  const adjacencyList = new Map();

  for (const [u, v] of edges) {
    // If the vertex u is not in the adjacency list, add it with an empty array
    if (!adjacencyList.has(u)) {
      adjacencyList.set(u, []);
    }
    // Add v to the adjacency list of u
    adjacencyList.get(u).push(v);

    // If the graph is undirected, you may want to add u to v's adjacency list as well
    // Uncomment the following lines for an undirected graph:
    if (!adjacencyList.has(v)) {
      adjacencyList.set(v, []);
    }
    adjacencyList.get(v).push(u);
  }

  return adjacencyList;
}



 // ==========================
 // IMPLEMENTATION BEGINS HERE

 // some complex math
 const neg = ([x,y]) => [-x,-y];
 const conj = ([x,y]) => [x,-y];
 const plus = (a,b) => [a[0]+b[0],a[1]+b[1]];
 const minus = (a,b) => [a[0]-b[0],a[1]-b[1]];
 const cross = (a,b) => a[0]*b[1]-a[1]*b[0];  // area of spanned parallelogram
 const times = (a,b) => [a[0]*b[0]-a[1]*b[1], a[0]*b[1]+a[1]*b[0]];
 const timesreal = ([x,y],r) => [x*r, y*r];
 const abs2 = ([x,y]) => x**2+y**2;
 const abs = z => Math.sqrt(abs2(z));
 const dist = (a,b) => abs(minus(a,b));
 const inverse = z => timesreal(conj(z), 1/abs2(z));
 const dividedby = (a,b) => times(a,inverse(b));


  // Transform z by the translation that takes the origin to t.
 // Works with any curvature; in particular:
 //   -1 = hyperbolic (poincare disk)
 //    0 = planar,
 //    1 = spherical (stereographic projection)
 const Plus = (z,t, curvature) => {
   // (z + t) / (1 - curvature*conj(t)*z)
   return dividedby(plus(z,t),
                    minus([1,0],
                          timesreal(times(conj(t), z), curvature)));
 };


  // Transform z by the translation that takes t to the origin.
 const Minus = (z,t, curvature) => Plus(z, neg(t), curvature);

  // Simple monotonic function of actual distance. Specifically:
 // - hyperbolic distance is 2*atanh(chord distance)
 // - spherical distance is 2*atan(chord distance)
 // - planar distance is chord distance
 // (I might be off by a factor of 2 in some of these claims, doesn't matter)
 const ChordDistance = (a,b, curvature) => abs(Minus(a,b, curvature));

 // signed radius of the circle passing through a,b,c
 const circumradius = (a,b,c) => dist(a,b)*dist(b,c)*dist(c,a) /
                                 (2 * cross(minus(b,a), minus(c,a)));


 // signed radius of circle needed to render segment a,b as circular arc
 // in the picture; may be infinite
 const ArcRadius = (a,b, curvature) => {
   if (curvature === 0) return Infinity;  // planar picture: all straight lines
   if (abs(a) > 1e3 || abs(b) > 1e3) return Infinity;  // one of them is infinite
   if (Math.abs(cross(a,b)) < 1e-3) return Infinity;  // collinear with origin
   // Let c be any third point on the arc
   const c = Plus(timesreal(Minus(b,a, curvature), .5), a, curvature);
   return circumradius(a,b,c);
 };

 const doit = (svgsize,p,q,steps,maxverts) => {
  const curvature = Math.sign(4-(p-2)*(q-2));  // -1:hyperbolic, 0:planar, 1:spherical
  const Dist = (a,b) => ChordDistance(a,b, curvature);

  const euclidean_first_edge_length = curvature===0 ? 1 :
    Math.sqrt(Math.abs((Math.sin(Math.PI/q)/Math.cos(Math.PI/p))**2 - 1))

  // a,b are generators of the symmetry group (not including reflections):
  //  - a is rotation by 2pi/q about origin
  //  - b is rotation by pi about first edge midpoint
  const primitive_qth_root_of_unity = [Math.cos(2*Math.PI/q),
                                       Math.sin(2*Math.PI/q)];
  const a = z => times(z, primitive_qth_root_of_unity);
  const b = ([x,y]) => Plus([-x, -y], [0,-euclidean_first_edge_length], curvature);

  // generate verts
  const vs = [[0,0]];
  for (let i = 0; i < steps; ++i) {
    for (const g of [b,a]) {
      for (let j = 0; j < vs.length; ++j) {  // while vs is growing
        if (vs.length >= maxverts) break;
        const v = g(vs[j]);
        if (vs.findIndex(w=>Dist(v,w)<=1e-6)<0) vs.push(v);
      }
    }
  }

  // generate edges (pairs of points, not pairs of indices)
  if (vs.length >= 2) {
    const d = Dist(vs[0], vs[1]);
    for (let i = 0; i < vs.length; ++i) {
      for (let j = 0; j < i; ++j) {
        if (Math.abs(Dist(vs[i],vs[j]) - d) <= 1e-6) es.push([ vs[i] , vs[j]     ]);
      }
    }
  }

  const scale =
      curvature>0 ? .35 :  // spherical: get all verts in the picture
      curvature===0 ? 1/5.5 :  // planar: get a good sampling in the picture
      1;  // hyperbolic: get the poincare disk in the picture

  let svg_html = '';

  const points = [];

  for (let [a,b] of es) {
    const r = ArcRadius(a,b,curvature)*scale/2*svgsize;

    // if a or b is at infinity, then draw straight outward
    // from the other point
    if (abs(a) > 1e2) a = timesreal(b, 1e2);
    if (abs(b) > 1e2) b = timesreal(a, 1e2);

    const x0 = (a[0]*scale+1)/2*svgsize;
    const y0 = (a[1]*scale+1)/2*svgsize;
    const x1 = (b[0]*scale+1)/2*svgsize;
    const y1 = (b[1]*scale+1)/2*svgsize;

    es_new.push([ String(x0.toFixed(1)) + '_' +  String(y0.toFixed(1))  ,  String(x1.toFixed(1)) + '_' + String(y1.toFixed(1))] );

    let objectExists = false;
    // let p = new Point(Math.round(x0), Math.round(y0));

    for (let i = 0; i < points.length; i++) {
      if (points[i].x === p.x &&  points[i].y === p.y) {
          objectExists = true;
          break;
      }
    }

    if (!objectExists) {
    	// drawText(x0,y0, String(x0.toFixed(1)) + '_' +  String(y0.toFixed(1)));
      // points.push(p);
      // sentencepoints += `<text x= "${p.x}" y="${p.y}" font-size="24"> (${p.x}, ${p.y}) </text>`
    }



    if (!Number.isFinite(r)) {
      svg_html += 'M'+Math.round(x0)+','+Math.round(y0)+'L'+Math.round(x1)+','+Math.round(y1);  // straight line
    } else {
      // circular arc of signed radius r
      svg_html += 'M'+Math.round(x0)+','+Math.round(y0)+'A'+r.toFixed(2)+','+r.toFixed(2)+',0,0,'+(r<0?1:0)+','+Math.round(x1)+','+Math.round(y1);
    }
  }
  return svg_html;
 }; // doit

 // IMPLEMENTATION ENDS HERE
 // ========================


function findCyclicPath(adjacencyList, startVertex, currentVertex, steps, path) {
  if (steps >= 8 && currentVertex === startVertex) {
    // console.log('Cyclic path found:', path.concat(currentVertex));
    console.log('Cyclic path found:', path);
    drawKawung(path);
    return path; // Indicate that a cyclic path was found
  }

  if (steps > 8) {
    return false; // Indicate that no cyclic path was found
  }

  const neighbors = adjacencyList.get(currentVertex) || [];

  for (const neighbor of neighbors) {
    if (!path.includes(neighbor) || neighbor === startVertex) {
      const foundCyclicPath = findCyclicPath(adjacencyList, startVertex, neighbor, steps + 1, [...path, currentVertex]);
      if (foundCyclicPath) {
        return path; // Propagate the result if a cyclic path was found in the subtree
      }
    }
  }

  return false; // Indicate that no cyclic path was found
}

function drawText(x,y, text){
	textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	textElement.setAttribute('x', x); // X-coordinate of the text
	textElement.setAttribute('y', y); // Y-coordinate of the text
	textElement.setAttribute('font-size', '6'); // Font size
	textElement.setAttribute('fill', main_colour); // Fill color
	textElement.textContent = text; // Text content
	svg.appendChild(textElement);
}

function midpoint(x1, x2){
  return (x1+x2) /2 ;
}

function drawKawung(Points){	
	xc = 0;
	yc = 0;
	for (let i=0; i < Points.length; i++){
		parts = Points[i].split("_");
		numbers = parts.map(part => parseFloat(part));
		xc += numbers[0];
		yc += numbers[1];
	}
	xc = xc / Points.length;
	yc = yc / Points.length;

	for (let i=0; i < Points.length ; i++){
	parts = Points[i].split("_");
	numbers = parts.map(part => parseFloat(part));
	parts0 = Points[0].split("_");
	numbers0 = parts0.map(part => parseFloat(part));

	if (i < Points.length -1) {
      parts2 = Points[i+1].split("_");
      numbers2 = parts2.map(part => parseFloat(part));
    	new_x = midpoint(numbers[0],numbers2[0]);
    	new_y = midpoint(numbers[1], numbers2[1]);
	}
	else {
	    new_x = midpoint(numbers[0],numbers0[0]);
    	new_y = midpoint(numbers[1], numbers0[1]);		
	}

	if (i === 0){
      partslast = Points[Points.length -1].split("_");
  numberslast = partslast.map(part => parseFloat(part));
		new_x2 = midpoint(numbers[0],numberslast[0]);
    	new_y2 = midpoint(numbers[1], numberslast[1]);	
	}
	else {
      partsbefore = Points[i -1].split("_");
      numbersbefore = partsbefore.map(part => parseFloat(part));
		  new_x2 = midpoint(numbers[0], numbersbefore[0]);
    	new_y2 = midpoint(numbers[1], numbersbefore[1]);	
	}

    // Quadratic Bezier Curve
    kawung_part = document.createElementNS("http://www.w3.org/2000/svg", "path");
    kawung_part.setAttribute("d", `M ${xc} ${yc} Q${new_x} ${new_y} ${numbers[0]} ${numbers[1]} Q${new_x2} ${new_y2} ${xc} ${yc}`);
    kawung_part.setAttribute("stroke", secondary_colour);
    kawung_part.setAttribute("fill", main_colour);
    svg.appendChild(kawung_part);

    // Circle 
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", xc + 0.85 * (numbers[0] - xc)); // x-coordinate of the center
    circle.setAttribute("cy", yc + 0.85 * (numbers[1] - yc)); // y-coordinate of the center
    circle.setAttribute("r", 0.05 * Math.sqrt(  (numbers[0] - xc) ** 2 + (numbers[1] - yc) ** 2));   // radius
    circle.setAttribute('stroke', secondary_colour);
    circle.setAttribute("fill", secondary_colour); // fill color
    svg.appendChild(circle);

    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", xc + 0.7 * (numbers[0] - xc)); // x-coordinate of the center
    circle.setAttribute("cy", yc + 0.7 * (numbers[1] - yc)); // y-coordinate of the center
    circle.setAttribute("r", 0.03 * Math.sqrt(  (numbers[0] - xc) ** 2 + (numbers[1] - yc) ** 2));   // radius
    circle.setAttribute('stroke', secondary_colour);
    circle.setAttribute("fill", secondary_colour); // fill color
    svg.appendChild(circle);

	}
}


outline_path = doit(svg.getAttribute("width"), 8, 3,12, 2000);
// outline = document.createElementNS("http://www.w3.org/2000/svg", "path");
// outline.setAttribute("d", outline_path);
// outline.setAttribute("stroke", main_colour);
// svg.appendChild(outline);


graph = createAdjacencyList(es_new);

for (let i = 0; i < es_new.length; i += 3){
  vertex = es_new[i][0];
  findCyclicPath(graph, vertex, vertex, 0, []);
}



