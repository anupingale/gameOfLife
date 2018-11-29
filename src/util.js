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

const isAlive = function(currentGeneration, cell) {
  return currentGeneration.some(element => element[0] == cell[0] && element[1] == cell[1]);
}


module.exports = {
  zipper,
  fillRow,
  isAlive };
