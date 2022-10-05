// Імпортуємо масив елементів галереї galleryItems
import { galleryItems } from './gallery-items.js';

// Наповнюємо перелік елементів з масиву galleryItems;
const galleryRef = document.querySelector('.gallery');

const galleryItemsArr = [];
galleryItems.forEach(({ original, preview, description }) => {
  galleryItemsArr.push(
    `<div class="gallery__item">
      <a class="gallery__link" href="${original}" target="_self">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
  );
});
galleryRef.insertAdjacentHTML('afterbegin', galleryItemsArr.join(''));

// створення і відкриття модального вікна зі збільшеним фото
let instance;
const instanceOpen = event => {
  event.preventDefault();
  instance = basicLightbox.create(
    `
            <img width="800" height="600" src="${event.target.dataset.source}">
        `
  );
  if (event.target === event.currentTarget) {
    return;
  }
  instance.show();
  galleryRef.addEventListener('keydown', instanceClose);
};

// закриття модального вікна кнопкою Esc;
const instanceClose = event => {
  if (event.code === 'Escape') {
    instance.close();
  }
};

// оголошуємо слухач кліків по галереї
galleryRef.addEventListener('click', instanceOpen);
