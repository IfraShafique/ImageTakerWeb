let currentSlideID = 1;
    const sliderElement = document.getElementById('slider');
    const totalSlides = sliderElement.childElementCount;

    function next() {
      currentSlideID++;
      if (currentSlideID > totalSlides) {
        currentSlideID = 1;
      }
      showSlide();
    }

    function showSlide() {
      const slides = sliderElement.getElementsByTagName('li');
      for (let i = 0; i < totalSlides; i++) {
        const element = slides[i];
        if (currentSlideID === i + 1) {
          element.classList.remove('hidden');
        } else {
          element.classList.add('hidden');
        }
      }
    }

    // Show the first slide initially
    showSlide();
