export function clearOption(element) {
    let clear = document.getElementsByClassName(element);
    while (clear.length) clear[0].remove();
}