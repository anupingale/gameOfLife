const { deepEqual } = require("assert");
const { zipper, fillRow } = require("../src/util.js");

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

  it("should return empty array when size is not specified", function() {
    deepEqual(fillRow(0), []);
  });
});
