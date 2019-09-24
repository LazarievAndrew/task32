export default function searchInput(event) {
    const goal = event.target;
    const search = goal.value;
    const input = document.getElementsByClassName('breed');

    for (let i = 0; i < input.length; i++) {
        if (input[i].textContent.search(search) === -1) {
            input[i].style.display = 'none';
        } else {
            input[i].style.display = 'block';
        }
    }
}
