import makeRequest from './makeRequest';
import createSelect from './createSelect';
import createTitle from './createTitle';

export default function listOnClick(element, breed) {
    element.onclick = () => {
        makeRequest(`https://dog.ceo/api/breed/${breed}/list`)
            .then((res) => createSelect(res.message, breed))
            .then(() => createTitle(breed, '.title'));
    };
}
