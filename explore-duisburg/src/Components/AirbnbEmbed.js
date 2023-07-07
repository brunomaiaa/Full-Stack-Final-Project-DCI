import React from 'react'
import AirbnbEmbedStyles from "./AirbnbEmbedStyles.css"
import { useEffect } from 'react';



const AirbnbEmbed = () => {

  useEffect(() => {
    // Add JavaScript logic for the image carousel
    const carousel = document.querySelector('.airbnb-embed-carousel');
    const images = carousel.querySelectorAll('.airbnb-embed-image');
    let currentIndex = 0;

    const showImage = (index) => {
      images.forEach((image, i) => {
        if (i === index) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      });
    };

    const showNextImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    };

    const showPrevImage = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    };

    const nextButton = carousel.querySelector('.next-button');
    const prevButton = carousel.querySelector('.prev-button');

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    return () => {
      nextButton.removeEventListener('click', showNextImage);
      prevButton.removeEventListener('click', showPrevImage);
    };
  }, []);

  const embedCode1 = `
    
      <div class="airbnb-embed-card" data-id="742329848999698090" data-view="home">
        <div class="airbnb-embed-carousel">
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-742329848999698090/original/e250b062-36af-4161-99ce-36626a849653.jpeg?im_w=960" alt="Property Image 1" class="airbnb-embed-image active" />
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-742329848999698090/original/6a67cab6-3750-4950-888f-2a7f3b23d6ac.jpeg?im_w=1200" alt="Property Image 2" class="airbnb-embed-image" />
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-742329848999698090/original/8d95a0ad-2972-460d-9db5-31cea57dbd50.jpeg?im_w=1200" alt="Property Image 3" class="airbnb-embed-image" />

          <button class="prev-button">&lt;</button>
          <button class="next-button">&gt;</button>
        </div>
        <div class="airbnb-embed-details">
          <a href="https://www.airbnb.de/rooms/742329848999698090?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget" rel="nofollow">
            Eigentumswohnung · Duisburg · ★4,91 · 1 Schlafzimmer · 1 Bett · 1 Badezimmer
          </a>
        </div>
        <script async="" src="https://www.airbnb.de/embeddable/airbnb_jssdk"></script>
      </div>
    
  `;

  const embedCode2 = `
    
      <div class="airbnb-embed-card" data-id="798403618217374407" data-view="home">
        <div class="airbnb-embed-carousel">
          <img src="https://a0.muscache.com/im/pictures/5185161f-39b6-433c-9dd3-65c740346e33.jpg?im_w=960" alt="Property Image 4" class="airbnb-embed-image active" />
          <img src="https://example.com/property-image5.jpg" alt="Property Image 5" class="airbnb-embed-image" />
          <img src="https://example.com/property-image6.jpg" alt="Property Image 6" class="airbnb-embed-image" />

          <button class="prev-button">&lt;</button>
          <button class="next-button">&gt;</button>
        </div>
        <div class="airbnb-embed-details">
          <a href="https://www.airbnb.de/rooms/798403618217374407?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget" rel="nofollow">
            Apartment · Duisburg · ★4,75 · 1 Schlafzimmer · 1 Bett · 1 Badezimmer
          </a>
        </div>
        <script async="" src="https://www.airbnb.de/embeddable/airbnb_jssdk"></script>
      </div>
    
  `;

  return (
    <><div className="container">
      <div dangerouslySetInnerHTML={{ __html: embedCode1 }} />
      <div dangerouslySetInnerHTML={{ __html: embedCode2 }} />
    </div>
    </>
  );
};

export default AirbnbEmbed;