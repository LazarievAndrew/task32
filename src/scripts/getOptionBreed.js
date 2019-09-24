import getTitleName from './getTitleName';
import createImgList from './createImgList';
import makeRequest from './makeRequest';
import setSlider from './setSlider';

export default function getOptionBreed() {
    const index = document.querySelector('.sub-breed').selectedIndex;
    const optionTag = document.querySelector('.sub-breed').options;
    const subBreed = optionTag[index].text;
    const breed = getTitleName('.title');
    if (index > 0) {
        const slider = document.getElementsByClassName('slider')[0];
        slider.style.display = 'block';

        makeRequest(`https://dog.ceo/api/breed/${breed}/${subBreed}/images`)
            .then((res) => createImgList(res.message))
            .then((res) => setSlider(res));
    }
}
