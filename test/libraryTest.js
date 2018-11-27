const {deepEqual} = require("assert");
const { initCells } = require("../src/library.js");

describe('initCells', function() {
  it('should return array matrix filled with D', function() {
    deepEqual(initCells(1,1), [["D"]]); 
    deepEqual(initCells(2,1), [["D"],["D"]]); 
    deepEqual(initCells(1,2), [["D","D"]]); 
    deepEqual(initCells(2,2), [["D","D"],["D","D"]]); 
  });

  it('should return empty array when any input is zero', function(){
    deepEqual(initCells(0,1), []);
    deepEqual(initCells(1,0), [[]]);
    deepEqual(initCells(0,0), []);
  });
});
