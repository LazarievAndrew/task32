// eslint-disable-next-line import/no-cycle
import listOnClick from './listOnClick';

export default function createList(dogs, className, addingClassName, creatingElement) {
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
        parent.appendChild(element).textContent = 'подпорода';
    }
    parent.appendChild(fragment);
}
