"use strict";

class Vec2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  static withVec2(v) {
    return new Vec2(v.x, v.y);
  }

  add(v) {
    return new Vec2(this.x + v.x, this.y + v.y);
  }

  sub(v) {
    return new Vec2(this.x - v.x, this.y - v.y);
  }

  mul(s) {
    return new Vec2(this.x * s, this.y * s);
  }

  div(s) {
    return new Vec2(this.x / s, this.y / s);
  }

  mod2() {
    return this.x * this.x + this.y * this.y;
  }

  mod() {
    return Math.sqrt(this.mod2());
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  norm() {
    return this.div(this.mod());
  }
}

class MatA {
  constructor(m00, m01, m02, m10, m11, m12) {
    this.m00 = m00;
    this.m01 = m01;
    this.m02 = m02;
    this.m10 = m10;
    this.m11 = m11;
    this.m12 = m12;
  }

  static identity() {
    return new MatA(1, 0, 0, 0, 1, 0);
  }

  static translate(v) {
    return new MatA(1, 0, v.x, 0, 1, v.y);
  }

  static scale(v) {
    return new MatA(v.x, 0, 0, 0, v.y, 0);
  }

  static rotate(t) {
    var ct = Math.cos(t);
    var st = Math.sin(t);
    return new MatA(ct, st, 0, -st, ct, 0);
  }

  static mMulV(m, v) {
    return new Vec2(m.m00 * v.x + m.m01 * v.y + m.m02, m.m10 * v.x + m.m11 *
      v.y + m.m12);
  }

  mulV(v) {
    return MatA.mMulV(this, v);
  }

  static mMulM(m1, m2) {
    return new MatA();
  }

  mulM(m) {
    return MatA.mMulM(this, m);
  }
}

module.exports.Vec2 = Vec2;
module.exports.MatA = MatA;
