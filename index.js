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
    return new Vec2(v.x + this.x, v.y + this.y);
  }

}
