const usefulTips = document.querySelector('.useful-tips__list');

class TipsItem {
    constructor(selector, icon, text) {
        this.selector = selector;
        this.icon = icon;
        this.text = text;
    }
}

async function getResource(url) {
    const res = await fetch(url);

    return await res.json();
}

// getResource("http://localhost:3000/useful-tips")
// .then(data => data.forEach(({text, icon}) => {
//     const elem = document.createElement('li');
//     console.log(elem);
//     elem.textContent = text;
//     elem.style.background = `url("${icon}") 0 50% / auto no-repeat`;
//     console.log(elem);
//     usefulTips.append(elem);
// }));

document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('active');
});

const photos = document.querySelectorAll('.services__check'),
      bigPhoto = document.querySelector('.services__presentation');

photos.forEach(item => {
    item.addEventListener('click', () => {
        bigPhoto.style.backgroundImage = window.getComputedStyle(item.parentElement).backgroundImage;
    });
});
// console.log(window.getComputedStyle(document.querySelector('.services__photo')).backgroundImage);