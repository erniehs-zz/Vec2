# Vec2

A simple 2d vector library, for example:

```JavaScript
  var Vec2 = require("lib-vec2").Vec2;

  // construct
  var v0 = new Vec2(); // zero vector
  var v1 = new Vec2(10, 10);
  var v2 = new Vec2(20, 30);
  var v3 = new Vec2(v1);

  // add
  var v4 = v1.add(v2);

  // subtract
  var v4 = v1.sub(v2);

  // multiply by constant
  var v5 = v1.mul(5);

  // divide by constant
  var v6 = v1.div(5);

  // find the modulus squared and modulus
  var m2 = v1.mod2();
  var m = v1.mod();

  // normalise
  var n = v1.norm();

  // dot product
  var d = v1.dot(v2);

  // compound stuff
  var v7 = new Vec2(10, 10).add(new Vec2(20, 20)).norm();
```

in addition affine matrix transformations are available, for example:

```JavaScript
  var MatA = require("lib-vec2").MatA;

  // construct
  //
  // [m00 m01 m02]
  // [m10 m11 m12]
  // [ 0   0   1 ]
  //
  var m = new MatA(1, 2, 3, 4, 5, 6);

  // identity
  var i = MatA.identity();

  // translate
  var t = MatA.translate(new Vec2(10, 20));

  // scale
  var s = MatA.scale(new Vec2(1, 78));

  // rotate
  var r = MatA.rotate(Math.PI);

  // multiply a vector
  var v = MatA.rotate(Math.PI / 2).mulV(new Vec2(2, 3));

  // multiply another matrix
  var m = MatA.translate(new Vec2(2, 3)).mulM(MatA.scale(new Vec2(30, 40)));

  // compound stuff
  var rr = MatA.rotate(Math.PI).mulM(MatA.rotate(-Math.PI)).mulM(MatA.rotate(Math.PI)).mulV(new Vec2(1, 2));

```
