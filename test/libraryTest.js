const {deepEqual} = require("assert");
const { 
  extractNeighbours, 
  extractAllNeighbours,
  isValid,
  varifyRules } = require("../src/library.js");

describe("extractNeighbours", function() {
  it('it Should return adjoin cells of given position', function() {
    deepEqual(extractNeighbours([1,0],{ "topLeft" : [0,0], "topRight" : [1,1] }), [[0,0],[0,1],[1,1]]);
    deepEqual(extractNeighbours([1,1],{ "topLeft" : [0,0], "topRight" : [3,3] }), [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]]);
    deepEqual(extractNeighbours([1,2],{ "topLeft" : [1,1], "topRight" : [3,3] }), [[1,1],[1,3],[2,1],[2,2],[2,3]]);
    deepEqual(extractNeighbours([2,2],{ "topLeft" : [1,1], "topRight" : [2,2] }), [[1,1],[1,2],[2,1]]);
  });
});

describe("extractAllNeighbours", function(){
  it("should return object containing cells as keys and valid neighbours as value", function(){
    let output = { '[0,0]': [ [ 0, 1 ], [ 1, 0 ], [ 1, 1 ] ],
      '[0,1]': [ [ 0, 0 ], [ 1, 0 ], [ 1, 1 ] ],
      '[1,0]': [ [ 0, 0 ], [ 0, 1 ], [ 1, 1 ] ],
      '[1,1]': [ [ 0, 0 ], [ 0, 1 ], [ 1, 0 ] ] }; 
    deepEqual(extractAllNeighbours({"topLeft" : [0,0], "topRight" : [1,1]}),output);
    output = { '[1,1]': [ [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ],
      '[1,2]': [ [ 1, 1 ], [ 1, 3 ], [ 2, 1 ], [ 2, 2 ], [ 2, 3 ] ],
      '[1,3]': [ [ 1, 2 ], [ 2, 2 ], [ 2, 3 ] ],
      '[2,1]': [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 3, 1 ], [ 3, 2 ] ],
      '[2,2]':[ [ 1, 1 ],[ 1, 2 ],[ 1, 3 ],[ 2, 1 ],[ 2, 3 ],[ 3, 1 ],[ 3, 2 ],[ 3, 3 ] ],
      '[2,3]': [ [ 1, 2 ], [ 1, 3 ], [ 2, 2 ], [ 3, 2 ], [ 3, 3 ] ] }
    deepEqual(extractAllNeighbours({"topLeft" : [1,1], "topRight" : [2,3]}),output);
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

