const {deepEqual} = require("assert");
const { 
  initWorld, 
  makeAlive, 
  getStatus, 
  extractNeighbours, 
  isValid,
  varifyRules } = require("../src/library.js");

describe('initWorld', function() {
  it('should return array having alive cells at given positions', function() {
    deepEqual(initWorld({"topLeft" :[0,0] , "topRight" : [1,1] },[[0,0]]), [["ALIVE","DEAD"],["DEAD","DEAD"]]); 
    deepEqual(initWorld({"topLeft" :[1,1] , "topRight" : [2,2] },[[1,1]]), [["DEAD","DEAD"],["DEAD","ALIVE"]]); 
    deepEqual(initWorld({"topLeft" :[2,2] , "topRight" : [4,4] },[[2,2]]), [["DEAD","DEAD","DEAD"],["DEAD","DEAD","DEAD"],["DEAD","DEAD","ALIVE"]]);
  });
});

describe('makeAlive', function() {
  it('should modify array status on given positions', function() {
    deepEqual(makeAlive([["DEAD"]],[[0,0]]),[["ALIVE"]]);
    deepEqual(makeAlive([["DEAD"],["DEAD"]],[[0,0]]),[["ALIVE"],["DEAD"]]);
    deepEqual(makeAlive([["DEAD","DEAD"]],[[0,1]]),[["DEAD","ALIVE"]]);
    deepEqual(makeAlive([["DEAD","DEAD"]],[[0,0]]),[["ALIVE","DEAD"]]);
    deepEqual(makeAlive([["DEAD","DEAD"],["DEAD","DEAD"]],[[0,1],[1,0]]),[["DEAD","ALIVE"],["ALIVE","DEAD"]]);
  });
});

describe("getStatus", function() {
  it("should extract status of given positions", function() {
    deepEqual(getStatus([["DEAD"]],[[0,0]]), ["DEAD"]);
    deepEqual(getStatus([["ALIVE"],["DEAD"]],[[0,0]]), ["ALIVE"]);
    deepEqual(getStatus([["ALIVE"],["DEAD"]],[[1,0]]), ["DEAD"]);
    deepEqual(getStatus([["ALIVE","DEAD"]],[[0,0]]), ["ALIVE"]);
    deepEqual(getStatus([["ALIVE","DEAD"]],[[0,1]]), ["DEAD"]);
    deepEqual(getStatus([["ALIVE","DEAD"],["DEAD","ALIVE"]],[[0,1],[1,0]]), ["DEAD","DEAD"]);
  });
});

describe("extractNeighbours", function() {
  it('it Should return adjoin cells of given position', function() {
    deepEqual(extractNeighbours([1,0],{ "topLeft" : [0,0], "topRight" : [1,1] }), [[0,0],[0,1],[1,1]]);
    deepEqual(extractNeighbours([1,1],{ "topLeft" : [0,0], "topRight" : [3,3] }), [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]]);
    deepEqual(extractNeighbours([1,2],{ "topLeft" : [1,1], "topRight" : [3,3] }), [[1,1],[1,3],[2,1],[2,2],[2,3]]);
    deepEqual(extractNeighbours([2,2],{ "topLeft" : [1,1], "topRight" : [2,2] }), [[1,1],[1,2],[2,1]]);
  });
});

describe("isValid", function() {
  it('should return true when input is valid', function() {
    deepEqual(isValid({"topLeft" :[0,0], "topRight" :[3,3]},[0,1]), true);
    deepEqual(isValid({"topLeft" :[0,0], "topRight" :[3,3]},[1,0]), true);
  });

  it('should return false when one of the co-ordinate is negative', function() {
    deepEqual(isValid({"topLeft" :[0,0], "topRight" :[3,3]},[0,-1]), false);
    deepEqual(isValid({"topLeft" :[0,0], "topRight" :[3,3]},[-1,1]), false);
  });

  it('should return false when one of the coordinate is greater than worldSize', function() {
    deepEqual(isValid({"topLeft" :[0,0], "topRight" :[3,3]},[0,4]), false);
    deepEqual(isValid({"topLeft" :[0,0], "topRight" :[3,3]},[4,0]), false);
  });
});

describe("varifyRules", function() {
  it("should return DEAD or ALIVE according to rule", function() {
    deepEqual(varifyRules("ALIVE", 0), "DEAD");
    deepEqual(varifyRules("ALIVE", 4), "DEAD");
    deepEqual(varifyRules("ALIVE", 2), "ALIVE");
    deepEqual(varifyRules("ALIVE", 3), "ALIVE");
    deepEqual(varifyRules("DEAD", 3), "ALIVE");
  });
});

