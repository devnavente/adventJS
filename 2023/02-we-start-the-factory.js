// https://adventjs.dev/challenges/2023/2
function manufacture(gifts, materials) {

    return gifts.filter(gift => {

        for (let material of gift) {
            if (materials.indexOf(material) === -1) return false;
        }

        return true;
    });

}