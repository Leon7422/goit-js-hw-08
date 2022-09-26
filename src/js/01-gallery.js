// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

const galleryBox = document.querySelector('.gallery');

galleryItemsCreate(galleryItems);

function galleryItemsCreate(array) {
  const imagesPrewievTable = array
    .map(image => {
      return `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`;
    })
    .join('');
  galleryBox.innerHTML = imagesPrewievTable;
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'centered-text',
});
