
exports.min = function min(array = []) {
  let min = Math.min(...array);
  if (min != Infinity) {
      return min
  }
  else {
      return 0
  }
}

exports.max = function max(array = []) {
  let max = Math.max(...array);
  if (max != Infinity) {
      return max
  }
  else {
      return 0
  }
}

exports.avg = function avg(array = []) {       
  if (array != Infinity) {
      return array.reduce((a, b) => a + b)/array.length;
  }
  else {
      return 0
  }    
}


