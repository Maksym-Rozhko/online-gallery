import { createCardPhotos } from "./createCardPhotos.js";

export const renderGallery = photos => {
    const gallery = document.querySelector('.grid');
    const cards = photos.map(createCardPhotos);

    gallery.append(...cards);
};