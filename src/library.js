const { zipper, fillRow } = require("./util.js");

const makeAlive = function(world, aliveCells) {
  aliveCells.map(cell => world[cell[0]][cell[1]] = "ALIVE");
  return world;
}

const getStatus = function(world, cells) {
  return cells.map(cell => world[cell[0]][cell[1]]);   
}

const isValid = function(worldSize, neighbour) {
  return neighbour.every(element => element >= worldSize["topLeft"][0] && element <= worldSize["topRight"][1]);
}

const extractNeighbours = function(cell, worldSize) {
  let row = [cell[0]-1, cell[0], cell[0]+1];
  let column = [cell[1]-1, cell[1], cell[1]+1];
  let zip = zipper(column);
  let allNeighbours = row.reduce(zip, []);
  allNeighbours.splice(4,1);
  let validateNeighbour = isValid.bind(null, worldSize);
  return allNeighbours.filter(validateNeighbour);
}

const varifyRules = function(cellStatus, aliveCount) {
  let rule1 = cellStatus == "ALIVE" && aliveCount < 2 || aliveCount > 3;
  let rule2 = cellStatus == "ALIVE" && aliveCount == 2 || aliveCount == 3;
  let rule3 = cellStatus == "DEAD" && aliveCount == 3;
  if(rule2 || rule3) {
    return "ALIVE";
  }
  return "DEAD";
}

const initWorld = function(worldSize, aliveCells) {
  let { topLeft, topRight } = worldSize;
  let row = topRight[0] - topLeft[0] + 1;
  let column = topRight[1] - topLeft[1] + 1;
  let world = new Array(row).fill([]).map(e => new Array(column).fill("DEAD"));
  return makeAlive(world, aliveCells);
}


module.exports = { 
  initWorld, 
  makeAlive, 
  getStatus, 
  extractNeighbours, 
  isValid,
  varifyRules };
