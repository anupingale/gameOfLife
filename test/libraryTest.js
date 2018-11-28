const {deepEqual} = require("assert");
const { initWorld, modifyStatus, extractCellStatus, extractAdjoinCells } = require("../src/library.js");

describe('initWorld', function() {
  it('should return array matrix filled with DEAD', function() {
    deepEqual(initWorld(1,1), [["DEAD"]]); 
    deepEqual(initWorld(2,1), [["DEAD"],["DEAD"]]); 
    deepEqual(initWorld(1,2), [["DEAD","DEAD"]]); 
    deepEqual(initWorld(2,2), [["DEAD","DEAD"],["DEAD","DEAD"]]); 
  });

  it('should return empty array when any input is zero', function(){
    deepEqual(initWorld(0,1), []);
    deepEqual(initWorld(1,0), [[]]);
    deepEqual(initWorld(0,0), []);
  });
});

describe('modifyStatus', function() {
  it('should modify array status on given positions', function() {
    deepEqual(modifyStatus([["DEAD"]],[[0,0]]),[["ALIVE"]]);
    deepEqual(modifyStatus([["DEAD"],["DEAD"]],[[0,0]]),[["ALIVE"],["DEAD"]]);
    deepEqual(modifyStatus([["DEAD","DEAD"]],[[0,1]]),[["DEAD","ALIVE"]]);
    deepEqual(modifyStatus([["DEAD","DEAD"]],[[0,0]]),[["ALIVE","DEAD"]]);
    deepEqual(modifyStatus([["DEAD","DEAD"],["DEAD","DEAD"]],[[0,1],[1,0]]),[["DEAD","ALIVE"],["ALIVE","DEAD"]]);
  });
});

describe("extractCellStatus", function() {
  it("should extract status of given positions", function() {
    deepEqual(extractCellStatus([["DEAD"]],[[0,0]]), ["DEAD"]);
    deepEqual(extractCellStatus([["ALIVE"],["DEAD"]],[[0,0]]), ["ALIVE"]);
    deepEqual(extractCellStatus([["ALIVE"],["DEAD"]],[[1,0]]), ["DEAD"]);
    deepEqual(extractCellStatus([["ALIVE","DEAD"]],[[0,0]]), ["ALIVE"]);
    deepEqual(extractCellStatus([["ALIVE","DEAD"]],[[0,1]]), ["DEAD"]);
    deepEqual(extractCellStatus([["ALIVE","DEAD"],["DEAD","ALIVE"]],[[0,1],[1,0]]), ["DEAD","DEAD"]);
  });
});

describe("extractAdjoinCells", function() {
  it('it Should return adjoin cells of given position', function() {
    deepEqual(extractAdjoinCells([1,0]), [[0,0],[0,1],[1,1],[2,0],[2,1]]);
    deepEqual(extractAdjoinCells([1,1]), [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]]);
    deepEqual(extractAdjoinCells([0,1]), [[0,0],[0,2],[1,0],[1,1],[1,2]]);
    deepEqual(extractAdjoinCells([0,0]), [[0,1],[1,0],[1,1]]);
    deepEqual(extractAdjoinCells([3,0]), [[2,0],[2,1],[3,1],[4,0],[4,1]]);
  });
});
