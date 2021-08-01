
exports.min = function min(array = []) {
  let min = Math.min(...array);
  if (isFinite(min)) {
      return min
  }
  else {
      return 0
  }
}

exports.max = function max(array = []) {
  let max = Math.max(...array);
  if (isFinite(max)) {
      return max
  }
  else {
      return 0
  }
}

exports.avg = function avg(array = [0]) {
  let avg = array.reduce((a, b) => a + b, 0);
  if (isFinite(avg)) { 
      return avg / array.length;
   }
  else {
      return 0
  } 

}


