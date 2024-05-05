# Vector

## Description

Vector structure with data accesible with <code>[{@t N}]</code> or swizzling.

All operations on Vector (*, +, /, -, etc...) are scalar.

Allows casting to:
- [[Color]] - <code>{@k col} c = {@k vec4}({@n 1.0f});</code>
- [[Quat]] - <code>{@k quat} q = {@k vec4}({@n 0.1f});</code>
- [[Matrix]] of same Height - <code>{@k cast}({@k Matrix}!({@k int}, {@n 3}, {@n 1})) {@k vec3}({@n 2.45f}, {@n 4f}, {@n 1.02f});</code>.
- [[Matrix]] of same Width - <code>{@k cast}({@k Matrix}!({@k int}, {@n 1}, {@n 3})) {@k vec3}({@n 2.45f}, {@n 4f}, {@n 1.02f});</code>.

Access to components can be achieved by GLSL-style access with:
- `xy`, `wh`, `uv` letters for vector of size 2
- `xyz`, `whd`, `uvw`, `rgb` letters for vector of size 3
- `xyzw`, `rgba` letters for vector of size 4

## Properties

|                         |                    | |
| ---                     | ---                | --- |
| {@k float}[{@t N}] | [data](#prop-data) | {@n 0} |
| {@k size_t} | [size](#prop-size) | {@t N} |

## Methods

|             | |
| ---         | --- |
| [[Vector]]   | [this](#func-this)({@k in} {@t T} val) |
| [[Vector]]   | [this](#func-this)({@k in} {@t T}[{@t N}] vals...) |
| [[Vector]]!{@n 3}   | [this](#func-this-quat)({@k in} {@t T}[{@n 4}] vals...) |
| [[Vector]] | [copyof](#func-copyof)() |
| {@t T}* | [ptr](#func-ptr)() |
| {@k size_t} | [toHash](#func-tohash)() |
| {@k string} | [toString](#func-tostring)() |

## Enums

| | | |
| --- | --- | --- |
| [[Vector]] | inf | Vector with all components equal to {@k float}.infinity |
| [[Vector]] | zero | Vector with all components equal to {@n 0} |
| [[Vector]] | one | Vector with all components equal to {@n 1} |
| [[Vector]]!{@n 2} | left | Vector with data equal to [-{@n 1}, {@n 0}] |
| [[Vector]]!{@n 2} | right | Vector with data equal to [{@n 1}, {@n 0}] |
| [[Vector]]!{@n 2} | up | Vector with data equal to [{@n 0}, -{@n 1}] |
| [[Vector]]!{@n 2} | down | Vector with data equal to [{@n 0}, {@n 1}] |

## Property Descriptions

### {@k float}[{@t N}] data = {@n 0} {#prop-data}
Array of vector components

### {@k size_t} size = {@t N} {#prop-size}
Alias to [data](#prop-data).length

## Method Descriptions

### [[Vector]] {@k this}() {#func-this}
Constructs new vector. If no components present vector will be filled with {@n 0}
```d
// Vector can be constructed manually or with aliases
auto v2 = ivec2(10, 20);
// Also vector can be given only one value,
// in that case it'll be filled with that value
auto v5 = ivec4(13);
auto v6 = vec4(0.3f);
// Vector values can be accessed with array slicing,
// by using color symbols or swizzling
float v6x = v6.x;
float v6z = v6.z;
float[] v6yzx = v6.yzx;
float v6y = v6[1];
// Valid vector accessors are:
// Vector2 - [x, y], [w, h], [u, v]
// Vector3 - [x, y, z], [w, h, d], [u, v, t], [r, g, b]
// Vector4 - [x, y, z, w], [r, g, b, a]
// Other sizes must be accessed with index
```

### [[Vector]]!{@n 3} {@k this}({@k in} {@t T}[{@n 4}] vals...) {#func-this-quat}
Constructs vector of euler angles from quaternion. Only valid if vector is of type {@k float} or {@k double}, with size {@n 3}

