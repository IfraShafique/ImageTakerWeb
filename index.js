let currentImageIndex = 1;

const changeImage = () => {
    const totalImages = 3;
    const nextImageIndex = (currentImageIndex % totalImages) + 1;
    
    const currentImage = document.getElementById(`image${currentImageIndex}`);
    const currentContainer = document.getElementById(`container${currentImageIndex}`);
    const nextImage = document.getElementById(`image${nextImageIndex}`);
    const nextContainer = document.getElementById(`container${nextImageIndex}`);
    
    currentImage.style.display = "none";
    currentContainer.style.display = "none";
    nextImage.style.display = "block";
    nextContainer.style.display = "block";
    
    currentImageIndex = nextImageIndex;
};


