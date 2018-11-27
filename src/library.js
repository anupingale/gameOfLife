const initCells = function(row, column) {
  return new Array(row).fill(new Array(column).fill("D"));
}

module.exports = {initCells};

