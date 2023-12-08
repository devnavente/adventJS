// https://adventjs.dev/challenges/2023/6
function maxDistance(movements) {
    let left = 0;
    let right = 0;
    let both = 0;
  
    for (let mov of movements) {
      if (mov === '>') {
        left++;
      } else if (mov === '<') {
        right++;
      } else {
        both++;
      }
    }
  
    if (left >= right) {
      left += both;
      return left - right;
    }
  
    right += both;
  
    return right - left;
  }