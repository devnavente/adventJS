// https://adventjs.dev/challenges/2023/3
function findNaughtyStep(original, modified) {
    if (original.length === modified.length) return '';

    let i = 0;
    let found = false;
    while (!found) {
        if (!original[i]) return modified[i];
        if (!modified[i]) return original[i];
        if (original[i] !== modified[i]) {
            found = true;
        } else {
            i++;
        }

    }

    if (original.length > modified.length) {
        return original[i];
    }

    return modified[i];
}