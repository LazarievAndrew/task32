export default function clearOption(element) {
    const clear = document.getElementsByClassName(element);
    while (clear.length) clear[0].remove();
}
