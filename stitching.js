const gallery = document.getElementById("gallery");

// Number of images you have
const totalImages = 30; 

for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement("img");
    img.src = `assets/stitching/img${i}.jpeg`;
    img.alt = `Stitching Design ${i}`;
    gallery.appendChild(img);
}
