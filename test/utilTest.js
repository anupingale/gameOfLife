const { deepEqual } = require("assert");
const { zipper } = require("../src/util.js");

describe("zipper", function() {
  let zip = zipper(["a","b","c"]);
  let zipElement = zipper(["a"]);
  it("it should zip elements of row using zip function ", function() {
    deepEqual(zipElement([],["1"]),[[["1"],"a"]]);
    deepEqual(zip([],["2"]),[[["2"],"a"],[["2"],"b"],[["2"],"c"]]);
  });
});
