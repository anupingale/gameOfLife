const zipper = function(column) {
  return function(result, row) {
    for(element of column) {
      result.push([row, element]);
    }
    return result;
  }
}

const fillRow = function(column) {
  return new Array(column).fill("DEAD");
}

module.exports = {
  zipper,
  fillRow };
