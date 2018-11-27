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

const extractAdjoinCells = function(cellPosition){
  let row = cellPosition[0];
  let col = cellPosition[1];
  let adjoinCells = [];
  adjoinCells = [[row-1,col-1],[row-1,col],[row-1,col+1],[row,col-1],[row,col+1],[row+1,col-1],[row+1,col],[row+1,col+1]];
  return adjoinCells.filter((element) => { return element[0] >= 0 && element[1] >= 0 });
}




module.exports = {initCells, modifyStatus, extractCellStatus, extractAdjoinCells};

