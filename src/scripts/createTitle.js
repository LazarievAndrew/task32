export default function createTitle(name, element) {
    const title = document.querySelector(element);
    title.textContent = name;
}
