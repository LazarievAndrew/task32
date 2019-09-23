export function createTitle(name, element) {
    let title = document.querySelector(element);
    title.textContent = name;
}