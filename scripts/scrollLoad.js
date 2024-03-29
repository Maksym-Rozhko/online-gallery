import { getData } from "./getData.js";
import { createCardPhotos } from "./createCardPhotos.js";

export const scrollLoad = (gallery, grid, endElem) => {
    const observer = new IntersectionObserver(
        async (entries) => {
            if (entries[0].isIntersecting) {
                const photos = await getData();
                const cards = photos.map(createCardPhotos);

                Promise.all(cards)
                    .then(cards => {
                        gallery.append(...cards);
                        grid.appended(cards);
                    }); 
            }
        },
        {
            rootMargin: '150px',
        },
    );

    observer.observe(endElem);
};