
export default function eventAction(event, idName, handler) {
    const search = document.querySelector(idName);
    search.addEventListener(event, handler);
}
