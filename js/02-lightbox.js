// Імпортуємо масив елементів галереї galleryItems
import { galleryItems } from './gallery-items.js';

// Наповнюємо перелік елементів з масиву galleryItems;
const galleryRef = document.querySelector('.gallery');

const galleryItemsArr = galleryItems.map(
  ({ original, preview, description }) =>
    `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
);
galleryRef.insertAdjacentHTML('afterbegin', galleryItemsArr.join(''));

// створюємо галерею SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
//  додаємо опис (alt) внизу фото 
  captionsData: 'alt',
  captionDelay: 250,
});
