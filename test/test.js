var expect = require("chai").expect;
var total_cost = require("../public/js/cost.js");

describe("Calculate  Price ", function() {
    it("Medium size + Chicken ", function(){ 
      expect(total_cost("Medium", ["Chicken"])).to.equal(13.50); 
       });
  });

describe("Calculate  Price ", function() {
    it("Small size + Onion + Mushroom ", function() {
      expect(total_cost("Small", ["Onion", "Mushroom"])).to.equal(11.00);    
    });
  });

    describe("Calculate  Price ", function() {
    it("Large size + Extra Cheese ", function() {
      expect(total_cost("Large", ["Extra Cheese"])).to.equal(16.50);    
    });
  });

 