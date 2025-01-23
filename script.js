import { paintings } from "./data.js";

function generateSlidesHTML() {
  let slidesHTML = "";

  paintings.forEach((painting) => {
    const { thumbnail } = painting.images;
    const { name } = painting;
    const artistName = painting.artist.name;

    slidesHTML += `
      <div class="slide js-slide"
      data-name="${name}">
        <img
          class="painting-thumbnail"
          src="${thumbnail}"
          alt=""
        />

        <div class="painting-info">
          <p class="painting-name">${name}</p>
          <p class="painting-artist">${artistName}</p>
        </div>
      </div>
    `;
  });

  const slides = document.querySelector(".js-slides");
  slides.innerHTML = slidesHTML;
}
generateSlidesHTML();

function navigateToASlide() {
  const allSlides = document.querySelectorAll(".js-slide");

  allSlides.forEach((slide) => {
    slide.addEventListener("click", () => {
      const { name } = slide.dataset;
      localStorage.setItem("name", name);

      window.location.href = "slide.html";
    });
  });
}
navigateToASlide();

function startSlideshow() {
  const startSlideshow = document.querySelector(".js-start-slideshow");

  startSlideshow.addEventListener("click", () => {
    localStorage.setItem("name", paintings[0].name);
  });
}
startSlideshow();
