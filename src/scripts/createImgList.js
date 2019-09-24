export default function createImgList(res) {
    if (res.length > 7) {
        return res.slice(0, 7);
    }
    return res;
}
