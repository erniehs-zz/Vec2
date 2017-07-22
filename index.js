"use strict";

module.exports = class Vec2 {
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
