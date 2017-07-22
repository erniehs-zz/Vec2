var Vec2 = require("./index").Vec2;
var MatA = require("./index").MatA;
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
    it("can be subtracted another Vec2", function() {
      var v1 = new Vec2(1, 2);
      var v2 = new Vec2(3, 5);
      var v3 = v1.sub(v2);
      expect(v3.x).to.equal(-2);
      expect(v3.y).to.equal(-3);
    });
    it("can be multiplied by a scalar", function() {
      var v1 = new Vec2(1, 2);
      var v2 = v1.mul(5);
      expect(v2.x).to.equal(5);
      expect(v2.y).to.equal(10);
    });
    it("can be divided by a scalar", function() {
      var v1 = new Vec2(10, 20);
      var v2 = v1.div(5);
      expect(v2.x).to.equal(2);
      expect(v2.y).to.equal(4);
    });
  });

  describe("Vec2 can mod2, mod, dot and norm", function() {
    it("can return modulus squared", function() {
      var v1 = new Vec2(1, 2);
      var c = v1.mod2();
      expect(c).to.equal(5);
    });
    it("can return modulus", function() {
      var v1 = new Vec2(2, 3);
      var c = v1.mod();
      expect(c).to.be.closeTo(Math.sqrt(13), 0.00001);
    });
    it("can be dotted with another Vec2", function() {
      var v1 = new Vec2(1, 2);
      var v2 = new Vec2(3, 4);
      var c = v1.dot(v2);
      expect(c).to.equal(11);
    });
    it("can return an normalised vector of itself", function() {
      var v1 = new Vec2(2, 3);
      var v2 = v1.norm();
      var ex = 2 / Math.sqrt(13);
      var ey = 3 / Math.sqrt(13);
      expect(v2.x).to.be.closeTo(ex, 0.00001);
      expect(v2.y).to.be.closeTo(ey, 0.00001);
    });
  });
});

describe("MatA is 3x3 matrix used for affine transforms", function() {

  describe("MatA can be constructed", function() {
    it("can be constructed with 6 parameters", function() {
      var m = new MatA(1, 2, 3, 4, 5, 6);
      expect(m.m00).equal(1);
      expect(m.m01).equal(2);
      expect(m.m02).equal(3);
      expect(m.m10).equal(4);
      expect(m.m11).equal(5);
      expect(m.m12).equal(6);
    });
    it("can be constructed using static identity", function() {
      var m = MatA.identity();
      expect(m.m00).equal(1);
      expect(m.m01).equal(0);
      expect(m.m02).equal(0);
      expect(m.m10).equal(0);
      expect(m.m11).equal(1);
      expect(m.m12).equal(0);
    });
    it("can be constructed using static translate", function() {
      var m = MatA.translate(new Vec2(10, 20));
      expect(m.m00).equal(1);
      expect(m.m01).equal(0);
      expect(m.m02).equal(10);
      expect(m.m10).equal(0);
      expect(m.m11).equal(1);
      expect(m.m12).equal(20);
    });
    it("can be constructed using static scale", function() {
      var m = MatA.scale(new Vec2(10, 20));
      expect(m.m00).equal(10);
      expect(m.m01).equal(0);
      expect(m.m02).equal(0);
      expect(m.m10).equal(0);
      expect(m.m11).equal(20);
      expect(m.m12).equal(0);
    });
    it("can be constructed using static rotate", function() {
      var m = MatA.rotate(Math.PI / 2);
      var ct = Math.cos(Math.PI / 2);
      var st = Math.sin(Math.PI / 2);
      expect(m.m00).to.be.closeTo(ct, 0.000001);
      expect(m.m01).to.be.closeTo(st, 0.000001);
      expect(m.m02).equal(0)
      expect(m.m10).to.be.closeTo(-st, 0.000001);
      expect(m.m11).to.be.closeTo(ct, 0.000001);
      expect(m.m12).equal(0);
    });
  });

});
