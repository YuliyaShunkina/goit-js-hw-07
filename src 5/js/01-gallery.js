import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(({ original, preview, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>`;
  })
  .join("");
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const largeImageURL = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${largeImageURL}" alt="Image description">`
  );

  instance.show();
});
