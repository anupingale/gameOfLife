const initCells = function(row, column) {
  return new Array(row).fill(new Array(column).fill("D"));
}

const modifyStatus = function(currentStatus, positions){
  positions.map((position) => { return currentStatus[position[0]][position[1]] = "L" });
  return currentStatus;
}

const extractCellStatus = function(currentStatus, positions) {
  return positions.map((position) => { return currentStatus[position[0]][position[1]] });   
}

module.exports = {initCells, modifyStatus, extractCellStatus};

