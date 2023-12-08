// https://adventjs.dev/en/challenges/2023/7
function drawGift(size, symbol) {
    if (size === 1) return '#\n';
  
    const giftHeight = size * 2 - 1 - 1; // last - 1 because we will add the first line in the next step ⬇️
    let output = new Array(size).fill('#').join('');
  
    let str = ''; let symbols = '';
    let i = giftHeight;
    let chars = size + 1;
    while (i > 1) {
      str = '';
      symbols = '';
      if (i > size) {
        str = '#';
  
        if (chars - 3 > 0) {
          symbols = new Array(size-2).fill(symbol).join('');
          str += symbols + '#';
        }
  
        chars = chars - 2 - symbols.length;
  
        if (chars > 1) {
          symbols = new Array(chars-1).fill(symbol).join('');
          str += symbols;
        }
  
        str += '#';
        chars = str.length + 1;
  
      } else if (i < size) {
        str = '#';
  
        if (i - 2 > 0) {
          symbols = new Array(i - 2).fill(symbol).join('');
          str = symbols + str;
        }
  
        str = '#' + str;
  
        if (size - 2 > 0) {
          symbols = new Array(size - 2).fill(symbol).join('');
          str = symbols + str;
        }
  
        symbols = new Array(chars-str.length-1).fill(' ').join('');
        str = symbols + '#' + str;
  
      } else {
        str = new Array(size).fill('#').join('');
  
        if (chars - (size + 1) > 0) {
          symbols = new Array(chars - (size + 1))
            .fill(symbol).join('');
  
          str += symbols;
        }
  
        str += '#';
      }
  
      output = str + '\n' + output;
      i--;
    }
  
    str = new Array(chars-size).fill(' ').join('');
    str += new Array(size).fill('#').join('');
  
    output = str + '\n' + output + '\n';
    return output;
  }