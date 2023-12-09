// https://adventjs.dev/challenges/2023/8
function organizeGifts(gifts) {
    return [...gifts.matchAll(/(\d+)([a-z])/g)]
    .map(([_, amount, type]) => {
      const pallets = Math.floor(amount / 50)
      const boxes = Math.floor((amount % 50) / 10)
      const remainingGifts = amount % 10

      return (
        `[${type}]`.repeat(pallets) +
        `{${type}}`.repeat(boxes) +
        `(${type.repeat(remainingGifts)})`.replaceAll('()', '')
      )
    })
    .join('')
}