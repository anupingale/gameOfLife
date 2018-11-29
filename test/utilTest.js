const { deepEqual } = require("assert");
const { zipper, fillRow, isAlive } = require("../src/util.js");

describe("zipper", function() {
  let zip = zipper(["a","b","c"]);
  let zipElement = zipper(["a"]);
  it("it should zip elements of row using zip function ", function() {
    deepEqual(zipElement([],["1"]),[[["1"],"a"]]);
    deepEqual(zip([],["2"]),[[["2"],"a"],[["2"],"b"],[["2"],"c"]]);
  });
});

describe("fillRow", function() {
  it("should create row filled with DEAD of given size", function() {
    deepEqual(fillRow(1), ["DEAD"]);
    deepEqual(fillRow(2), ["DEAD","DEAD"]);
  });

  it("should return empty array when size is 0", function() {
    deepEqual(fillRow(0), []);
  });
});

describe("isAlive", function() {
  it("should return true if cell is present in currentGeneration", function() {
    deepEqual(isAlive([[0,0],[0,1],[1,1]], [0,1]), true);
    deepEqual(isAlive([[0,0],[2,1],[2,3],[3,3]], [3,3]), true);
  });
  it("should return false if cell is not present in currentGeneration", function() {
    deepEqual(isAlive([[0,0],[0,1],[1,1]], [1,0]), false);
    deepEqual(isAlive([[0,0],[2,1],[2,3],[3,3]], [2,0]), false);
  });
});
