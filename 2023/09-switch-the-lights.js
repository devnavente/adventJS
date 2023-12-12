// https://adventjs.dev/challenges/2023/9
function adjustLights(lights) {
    // All are the same
    if (!lights.includes('🟢') || !lights.includes('🔴')) {
        return Math.floor(lights.length / 2);
    }

    let prevGreen = '🟢';
    let changesGreen = prevGreen === lights[0] ? 0 : 1;
    let prevRed = '🔴';
    let changesRed = prevRed === lights[0] ? 0 : 1;

    for (let i = 1; i < lights.length; i++) {
        if (lights[i] === prevGreen) {
            changesGreen++;
        }
        if (lights[i] === prevRed) {
            changesRed++;
        }
        prevGreen = prevGreen === '🟢' ? '🔴' : '🟢';
        prevRed = prevRed === '🟢' ? '🔴' : '🟢';
    }

    return Math.min(changesGreen, changesRed);
}