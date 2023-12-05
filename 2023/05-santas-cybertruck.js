// https://adventjs.dev/challenges/2023/5
function cyberReindeer(road, time) {
    let arr = road.split('');
    const output = [road];

    let prev = arr[1];
    let sled = road.indexOf('S');

    for (let i = 1; i < time; i++) {
        if (arr[sled + 1] !== '|') {
            let tmp = arr[sled + 1];
            arr[sled + 1] = 'S';
            arr[sled] = prev;
            prev = tmp;
            sled++;
        }

        output.push(arr.join(''));

        if (i === 4) {
            arr = arr.map(char => char === '|' ? '*' : char);
        }
    }

    return output;
}