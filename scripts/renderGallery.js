import { createCardPhotos } from "./createCardPhotos.js";
import { createElem } from "./createElem.js";

export const renderGallery = (wrapper, photos) => {
    const gallery = createElem('ul', {
        className: 'grid',
    });

    wrapper.append(gallery);

    const grid = new Masonry(gallery, {
        glutter: 10, 
        itemSelector: '.card',
        columnWidth: 200, 
        isFitWidth: true,
    });

    const cards = photos.map(createCardPhotos);

    Promise.all(cards)
        .then(cards => {
            gallery.append(...cards);
            grid.appended(cards);
        });
};