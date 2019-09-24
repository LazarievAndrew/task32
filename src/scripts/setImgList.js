import makeRequest from './makeRequest';
import createImgList from './createImgList';
import setSlider from './setSlider';


export default function setImgList(breed) {
    makeRequest(`https://dog.ceo/api/breed/${breed}/images`)
        .then((res) => createImgList(res.message))
        // ограничил количество слайдов семью,ниже вариант без ограничения,тоже работает без проблем
        .then((res) => setSlider(res));
}

// Вариант, без ограничения по количеству слайдов
// export function setImgList(breed) {
//     makeRequest(`https://dog.ceo/api/breed/${breed}/images`)
//         .then((res) => setSlider(res.message))
// }
