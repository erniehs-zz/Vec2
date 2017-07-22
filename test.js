var Vec2 = require("./index");
var expect = require("chai").expect;

describe("Vec2 is a two dimensional vector", function() {
  describe("Vec2 can be constructed", function() {
    it("can be constructed with no arguments to yield a zero vector",
      function() {
        var v = new Vec2();
        expect(v.x).to.equal(0);
        expect(v.y).to.equal(0);
      });
    it("can be constructed with two numbers", function() {
      var v = new Vec2(1, 2);
      expect(v.x).to.equal(1);
      expect(v.y).to.equal(2);
    });
    it("can be constructed with another Vec2", function() {
      var v = new Vec2(1, 2);
      var n = Vec2.withVec2(v);
      expect(n.x).to.equal(1);
      expect(n.y).to.equal(2);
    })
  });

  describe("Vec2 can add, mul, div and sub", function() {
    it("can be added to another Vec2", function() {
      var v1 = new Vec2(1, 2);
      var v2 = new Vec2(3, 4);
      var v3 = v1.add(v2);
      expect(v3.x).to.equal(4);
      expect(v3.y).to.equal(6);
    });
  });
});
