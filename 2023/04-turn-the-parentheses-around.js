// https://adventjs.dev/challenges/2023/4
function decode(message) {

    let left = 0;
    let right = 1;

    while (left < message.length && right < message.length) {
        if (message[right] === '(') {
            left = right;
            right = left + 1;
        } else if (message[right] === ')') {
            // dar la vuelta
            let leftStr = message.slice(0, left);
            let middleStr = message.slice(left + 1, right).split('').reverse().join('');
            let rightStr = message.slice(right + 1);
            message = leftStr + middleStr + rightStr;

            left = 0;
            right = 1;
        } else if (message[left] === '(') {
            right++;
        } else {
            left++;
            right = left + 1;
        }
    }
    return message;
}
