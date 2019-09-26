import clearOption from './clearOption';
import makeRequest from './makeRequest';
import createSelect from './createSelect';
import createTitle from './createTitle';

export default function listOnClick(element, breed) {
    clearOption('img-slider');
    element.onclick = () => {
        makeRequest(`https://dog.ceo/api/breed/${breed}/list`)
            .then((res) => createSelect(res.message, breed))
            .then(() => createTitle(breed, '.title'));
    };
}

function createList(dogs, className, addingClassName, creatingElement) {
    const fragment = document.createDocumentFragment();
    const element = document.createElement(creatingElement);
    element.classList.add(addingClassName);

    for (let i = 0; i < dogs.length; i++) {
        const clone = element.cloneNode();
        clone.textContent = dogs[i];
        element.classList.add(addingClassName);
        fragment.appendChild(clone);
        listOnClick(clone, dogs[i]);
    }

    // for (dog of dogs) {                    // webpack не пропускает, дает ошибку
    //     let clone = element.cloneNode();
    //     clone.textContent = dog;
    //     element.classList.add(addingClassName);
    //     fragment.appendChild(clone);
    //     listOnClick(clone, dog)
    // }

    const parent = document.getElementsByClassName(className)[0];
    if (creatingElement === 'option') {
        element.setAttribute('disabled', '');
        element.setAttribute('selected', '');
        element.textContent = 'подпорода';
        parent.appendChild(element);
    }
    parent.appendChild(fragment);
}
export { createList };
