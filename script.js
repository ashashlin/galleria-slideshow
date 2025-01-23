import { paintings } from "./data.js";

function generateSlidesHTML() {
  let slidesHTML = "";

  paintings.forEach((painting) => {
    const { thumbnail } = painting.images;
    const { name } = painting;
    const artistName = painting.artist.name;

    slidesHTML += `
      <div class="slide">
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
