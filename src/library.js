const { zipper, fillRow } = require("./util.js");

const initWorld = function(row, column) {
  let fillStatus = fillRow.bind(this,column);
  return Array(row).fill([]).map(fillStatus);
}

const makeAlive = function(world, aliveCells) {
  aliveCells.map(cell => world[cell[0]][cell[1]] = "ALIVE");
  return world;
}

const getStatus = function(world, cells) {
  return cells.map(cell => world[cell[0]][cell[1]]);   
}

const isValid = function(worldSize, neighbour) {
  return neighbour.every(element => element >= 0 && element < worldSize);
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

module.exports = { 
  initWorld, 
  makeAlive, 
  getStatus, 
  extractNeighbours, 
  isValid };
