import { paintings } from "./data.js";

const name = localStorage.getItem("name");

function generateSlideHTML() {
  let matchingPainting;

  for (const painting of paintings) {
    if (painting.name === name) {
      matchingPainting = painting;
      break;
    }
  }

  const heroLarge = matchingPainting.images.hero.large;
  const heroSmall = matchingPainting.images.hero.small;
  const paintingName = matchingPainting.name;
  const { year, description, source } = matchingPainting;
  const artistName = matchingPainting.artist.name;
  const artistImg = matchingPainting.artist.image;
  const gallery = matchingPainting.images.gallery;

  const slideHTML = `
    <article class="slide">
      <div class="painting-intro">
        <div class="painting-hero">
          <picture>
            <source
              media="(min-width: 48rem)"
              srcset="${heroLarge}"
            />

            <img
              class="hero-img"
              src="${heroSmall}"
              alt=""
            />
          </picture>

          <div class="view-img js-view-img">
            <img src="assets/shared/icon-view-image.svg" alt="" />

            <span>View image</span>
          </div>
        </div>

        <div class="painting-info">
          <div class="container">
            <p class="painting-name">${paintingName}</p>
            <p class="painting-artist">${artistName}</p>

            <img
              class="artist-img"
              src="${artistImg}"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="painting-description">
        <div class="painting-year">${year}</div>

        <p class="description">
          ${description}
        </p>

        <a
          class="source-link"
          href="${source}"
        >
          Go to source
        </a>
      </div>
    </article>

    <div class="slide-footer">
      <div class="progress-bar">
        <div class="progress-bar-inner"></div>
      </div>

      <div class="container">
        <div class="info">
          <p class="name">${paintingName}</p>
          <p class="artist">${artistName}</p>
        </div>
        <div class="media-buttons">
          <a class="media-btn last-slide" href="#">
            <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#000" fill="none" fill-rule="evenodd">
                <path
                  d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
                  stroke-width="2"
                />
                <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
              </g>
            </svg>
          </a>
          <a class="media-btn next-slide" href="#">
            <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#000" fill="none" fill-rule="evenodd">
                <path
                  d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
                  stroke-width="2"
                />
                <path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <dialog class="modal image-modal js-image-modal">
      <div class="container">
        <button class="btn close-modal">Close</button>
        <img
          class="painting-gallery"
          src="${gallery}"
          alt=""
        />
      </div>
    </dialog>
  `;

  const main = document.querySelector(".js-main");
  main.innerHTML = slideHTML;
}
generateSlideHTML();
