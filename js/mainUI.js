// Part 1: JavaScript to toggle the side navigation bar
document.getElementById('toggleButton').addEventListener('click', function() {
    const sidenav = document.getElementById('sidenav');
    const container = document.querySelector('.container');
    container.classList.toggle('show-nav');
});

// Part 2: Javascript to download SVG file presented
const svgContainer = document.getElementById("svg-container");
svgContainer.appendChild(svg);
const downloadBtn = document.getElementById("download-btn");
downloadBtn.addEventListener("click", () => {
    // Convert the SVG document to a string
    const svgString = new XMLSerializer().serializeToString(svg);
    // Create a Blob with the SVG string
    const blob = new Blob([svgString], {
        type: "image/svg+xml"
    });
    // Create a download URL for the Blob
    const downloadURL = URL.createObjectURL(blob);
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = downloadURL;
    link.download = "example.svg";
    // Programmatically click the link to trigger the download
    link.click();
    // Clean up by revoking the URL
    URL.revokeObjectURL(downloadURL);
});

const refreshBtn = document.getElementById("refresh-btn");
refreshBtn.addEventListener("click", () => {
    step = 0;
});
