export function makeRequest(url) {
    return fetch(url).then(res => res.json())
};