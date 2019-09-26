import clearOption from './clearOption';
import createList from './createList';
import setImgList from './setImgList';

export default function createSelect(element, breed) {
    const select = document.getElementsByClassName('sub-breed')[0];
    const slider = document.getElementsByClassName('slider')[0];

    if (element.length > 0) {
        clearOption('dog-option');
        slider.style.display = 'none';
        select.style.display = 'block';
        createList(element, 'sub-breed', 'dog-option', 'option');
    } else {
        select.style.display = 'none';
        setImgList(breed);
        slider.style.display = 'block';
    }
}
