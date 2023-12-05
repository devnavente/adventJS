// https://adventjs.dev/challenges/2023/1
function findFirstRepeated(gifts) {

    const arr = [];

    for (let id of gifts) {
        if (arr.includes(id)) return id;

        arr.push(id);
    }

    return -1;
}