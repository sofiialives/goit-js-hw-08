// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryList = document.querySelector('.gallery')

const saveItems = galleryItems.map(item => 
`<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
   <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</li>`).join('')
galleryList.insertAdjacentHTML('beforeend', saveItems)

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    // captionPosition: 'bottom',
    captionDelay: 250,
});

