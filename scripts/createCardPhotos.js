import { createElem } from "./createElem.js";

export const createCardPhotos = data => {
    const card = createElem('li', {
       className: 'card',
       style: 'min-height: 300px',
    });
    
    const cardItem = createElem('a', {
        className: 'grid-item',
        id: data.id,
        href: `page.html?photo=${data.id}`,
     });

    const photo = new Image();
    photo.width = '200';
    photo.src = data.urls.small;
    photo.alt = data.alt_description;

    const author = createElem('a', {
        className: 'card__author',
        id: data.id,
        href: data.user.links.html,
     });

    const avatarAuthor = new Image();
    avatarAuthor.className = 'author__photo';
    avatarAuthor.src = data.user.profile_image.medium;
    avatarAuthor.width = '32';
    avatarAuthor.height = '32';
    avatarAuthor.alt = data.user.bio;
    avatarAuthor.title = data.user.username;

    const likeBtn = createElem('button', {
        className: 'card__photo-like',
        type: 'button',
        textContent: data.likes,
     });

    const downloadLink = createElem('a', {
        className: 'card__download',
        href: data.links.download,
        download: true,
        target: '_blank',
     });

    author.append(avatarAuthor);
    cardItem.append(photo, author, likeBtn, downloadLink);
    card.append(cardItem);
    
    return card;
};