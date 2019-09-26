import clearOption from './clearOption';

export default function setSlider(res) {
    clearOption('img-slider');
    const line = document.querySelector('.slider--line');
    const fragment = document.createDocumentFragment();
    const img = document.createElement('img');

    res.forEach((item) => {
        const clone = img.cloneNode();
        clone.src = item;
        clone.classList.add('img-slider');
        fragment.appendChild(clone);
    });

    line.appendChild(fragment);

    const list = document.querySelectorAll('.img-slider');

    line.style.width = `${list.length * 640}px`;

    const leftArrow = document.querySelector('.left--arrow');
    const rightArrow = document.querySelector('.right--arrow');
    let position = 0;
    line.style.right = 0;

    rightArrow.onclick = function moveLeft() {
        position += 640;
        if (position > ((list.length - 1) * 640)) {
            position = 0;
        }
        line.style.right = `${position}px`;
    };

    leftArrow.onclick = function moveRight() {
        position -= 640;
        if (position < 0) {
            position = ((list.length - 1) * 640);
        }
        line.style.right = `${position}px`;
    };
}
