# Vector

## Description

Import with <code>{@k import} sily.vector;</code>

Vector structure with data accesible with <code>[{@t N}]</code> or swizzling.

Vectors are instantiated as <code>{@k Vector}!({@t T}, {@t N})</code> where {@t T} is vector type and {@t N} is vector size.

All operations on vectors (*, +, /, -, etc...) are scalar.

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
| {@k alias} | [F](#prop-f) | {@t T} or {@k double} |
| {@k alias} | [VecType](#prop-vectype) | {@k Vector}!({@t T}, {@t N}) |

## Methods

|             | |
| ---         | --- |
| [[Vector]]   | [this](#func-this)({@k in} {@t T} val) |
| [[Vector]]   | [this](#func-this)({@k in} {@t T}[{@t N}] vals...) |
| [[Vector]]!({@t T}, {@n 3})   | [this](#func-this-quat)({@k in} {@t T}[{@n 4}] vals...) |
| {@t VecType} | [copyof](#func-copyof)() |
| {@t T}* | [ptr](#func-ptr)() |
| {@k size_t} | [toHash](#func-tohash)() {@k const} |
| {@k string} | [toString](#func-tostring)() {@k const} |
| {@k F} | [length](#func-length)() {@k const} |
| {@t F} | [lengthSquared](#func-lengthsquared)() |
| {@t F} | [distanceTo](#func-distanceto)({@t VecType} b) |
| {@t F} | [distanceSquaredTo](#func-distancesquaredto)({@t VecType} b) |
| {@k bool} | [isClose](#func-isClose)({@t VecType} b) |
| {@t VecType} | [normalized](#func-normalized)() |
| {@k this} | [normalize](#func-normalize)() |
| {@k bool} | [isNormalized](#func-isnormalized)() |
| {@t F} | [dot](#func-dot)({@t VecType} b) |
| {@t VecType} | [sign](#func-sign)() |
| {@t VecType} | [floor](#func-floor)() |
| {@t VecType} | [ceil](#func-ceil)() |
| {@t VecType} | [round](#func-round)() |
| {@t VecType} | [abs](#func-abs)() |
| {@t VecType} | [min](#func-min)({@t VecType} b) |
| {@t VecType} | [max](#func-max)({@t VecType} b) |
| {@t VecType} | [lerp](#func-lerp)({@t VecType} to, {@t F} weight) |
| {@t VecType} | [clamp](#func-clamp-vec)({@t VecType} min, {@t VecType} max) |
| {@t VecType} | [clamp](#func-clamp-val)({@t T} min, {@t T} max) |
| {@k this} | [clamped](#func-clamped-vec)({@t VecType} min, {@t VecType} max) |
| {@k this} | [clamped](#func-clamped-val)({@t T} min, {@t T} max) |
| {@t VecType} | [snap](#func-snap-vec)({@t VecType} step) |
| {@t VecType} | [snap](#func-snap-val)({@t T} step) |
| {@k this} | [snapped](#func-snapped-vec)({@t VecType} step) |
| {@k this} | [snapped](#func-snapped-val)({@t T} step) |
| {@t VecType} | [reflect](#func-reflect)({@t VecType} normal) |
| {@t VecType} | [refract](#func-refract)({@t VecType} normal, {@t F} ratio) |
| {@t VecType} | [moveTowards](#func-movetowards)({@t VecType} to, {@t F} dist) |
| {@t VecType} | [limitLength](#func-limitLenght)({@t F} min, {@t F} max) |
| {@t VecType} | [angle](#func-angle)({@t VecType} v) |
| {@t VecType} | [angleTo](#func-angleto)({@t VecType} to) |
| {@t VecType} | [cross](#func-cross)({@t VecType} b) |
| {@t VecType} | [rotate](#func-rotate)({@t F} angle) |
| {@t VecType} | [perpendicular](#func-perpendicular)() |
| {@t VecType} | [unproject](#func-unproject)([[Matrix]]!({@k float}, {@n 4}, {@n 4}) proj, [[Matrix]]!({@k float}, {@n 4}, {@n 4}) view) |

## Operators
| A | B | OP | Description |
| --- | --- | --- | --- |
| [[Vector]] | [[Vector]] | +, -, *, /, % | Performs operation for each component (`a.r + b.r`, `a.g + b.g`...) |
| [[Vector]] | Number | +, -, *, /, % | Performs operation for each component (`a.r + b`, `a.g + b`...) |
| [[Vector]] | [[Vector]] | == | Compares two vector for equality |
| [[Vector]] | [[Vector]] | <, >, <=, >= | Compares lengths of two vectors |
| [[Vector]] | | -, +, --, ++ | Performs unary operation for each component (`-a.r`, `-a.g`...) |
| [[Vector]] | | ~ | Inverts vector |
| [[Vector]] | [[Vector]] | =, +=, -=, *=, /=, %= | Performs operation for each component in place (`a.r += b.r`...) |
| [[Vector]] | Number | =, +=, -=, *=, /=, %= | Performs operation for each component in place (`a.r += b`...) |
| [[Vector]] | {@k bool} | cast() | Allows casting to boolean value. Vector is considered false if length of it is close to 0 |
| [[Vector]] | [[Quat]] | cast() | Allows casting vector of size 4 to quaternion. Values are unchanged |
| [[Vector]] | [[Matrix]] | cast() | Allows casting vector to matrix of same width or height |
| [[Vector]] | [[Color]] | cast() | Allows casting to color if vector size 3 or 4 where vector type is floating point. Values are unchanged |
| [[Vector]] | [[Color]] | cast() | Allows casting to color if size 3 or 4 where vector type is whole number. Values are converted from their 8 bit counterparts |

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
| [[Vector]]!{@n 3} | forward | Vector with data equal to [{@n 0}, {@n 0}, {@n 1}] |
| [[Vector]]!{@n 3} | back | Vector with data equal to [{@n 0}, {@n 0}, {@n -1}] |
| [[Vector]]!{@n 3} | left | Vector with data equal to [{@n -1}, {@n 0}, {@n 0}] |
| [[Vector]]!{@n 3} | right | Vector with data equal to [{@n 1}, {@n 0}, {@n 0}] |
| [[Vector]]!{@n 3} | up | Vector with data equal to [{@n 0}, {@n 1}, {@n 0}] |
| [[Vector]]!{@n 3} | down | Vector with data equal to [{@n 0}, {@n -1}, {@n 0}] |

## Property Descriptions

### {@k float}[{@t N}] data = {@n 0} {#prop-data}
Array of vector components

### {@k size_t} size = {@t N} {#prop-size}
Alias to [data](#prop-data).length

### {@k alias} {@t F} = ({@t T} or {@k double}) {#prop-f}
If {@t T} is a floating point then <code>{@t F} = {@t T}</code> otherwise <code>{@t F} = {@k double}</code>

### {@k alias} {@t VecType} = {@k Vector}!({@t T}, {@t N}) {#prop-vectype}
Alias to type of <code>{@k this}</code> vector with {@t T} type and {@t N} size

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

### [[Vector]]!({@t T}, {@n 3}) {@k this}({@k in} {@t T}[{@n 4}] vals...) {#func-this-quat}
Constructs vector of euler angles from quaternion. Only valid if vector is of type {@k float} or {@k double}, with size {@n 3}

### {@t VecType} {@f copyof}() {#func-copyof}
Creates copy of this Vector's data.

### {@t T}* {@f ptr}() {#func-ptr}
Returns pointer to [data](#prop-data).

### {@k size_t} {@f toHash}() {@k const} {#func-tohash}
Returns hash of [data](#prop-data).

### {@k string} {@f toString}() {@k const} {#func-tostring}
Returns string representation of vector in format of {@s "[x, y, z, ...]"}.

### {@t F} {@f length}() {@k const} {#func-length}
Returns length of vector.

### {@t F} {@f lengthSquared}() {#func-lengthsquared}
Returns squared length of vector.

This methods runs faster then [length](#func-length). Prefer using it when comparing vectors.

### {@t F} {@f distanceTo}({@t VecType} b) {#func-distanceto}
Returns distance to other vector.

### {@t F} {@f distanceSquaredTo}({@t VecType} b) {#func-distancesquaredto}
Returns squared distance to other vector.

This method runs faster then [distanceTo](#func-distanceto). Prefer using it when comparing distances.

### {@k bool} {@f isClose}({@t VecType} b) {#func-isclose}
Returns true if vector is approximately close to other vector.

### {@t VecType} {@f normalized}(), {@f normalised}() {#func-normalized}
Returns normalized vector.

### {@k this} {@f normalize}(), {@f normalise}() {#func-normalize}
Performs normalization in place.

### {@k bool} {@f isNormalized}(), {@f isNormalised}() {#func-isnormalized}
Returns true if vector is normalized.

Vector is considered normalized if length is equal to 1.

### {@t F} {@f dot}({@t VecType} b) {#func-dot}
Returns dot product between vectors.

### {@t VecType} {@f sign}() {#func-sign}
Returns signed vector (each component will be either 1, -1 or 0).

### {@t VecType} {@f floor}() {#func-floor}
Returns vector with it's components rounded down.

Avaliable only for floating point vectors.

### {@t VecType} {@f ceil}() {#func-ceil}
Returns vector with it's components rounded up.

Avaliable only for floating point vectors.

### {@t VecType} {@f round}() {#func-round}
Returns vector with it's components rounded to closest whole number.

Avaliable only for floating point vectors.

### {@t VecType} {@f abs}() {#func-abs}
Returns vector with it's components having their sign removed.

### {@t VecType} {@f min}({@t VecType} b) {#func-min}
Returns vector with smallest components between both vectors (`[0, 4, 2].min([12, 1, 4]) = [0, 1, 2]`).

### {@t VecType} {@f max}({@t VecType} b) {#func-max}
Returns vector with largest components between both vectors (`[0, 4, 2].min([12, 1, 4]) = [12, 4, 4]`).

### {@t VecType} {@f lerp}({@t VecType} b, {@t F} weight) {#func-lerp}
Returns linearly interpolated vector.

### {@t VecType} {@f clamp}({@t VecType} min, {@t VecType} max) {#func-clamp-vec}
Returns vector with it's components clamped between components of `min` and `max`.

### {@t VecType} {@f clamp}({@t F} min, {@t F} max) {#func-clamp-val}
Returns vector with it's components clamped between `min` and `max`.

### {@k this} {@f clamped}({@t VecType} min, {@t VecType} max) {#func-clamped-vec}
Performs [clamp](#func-clamp-vec) in place.

### {@k this} {@f clamped}({@t F} min, {@t F} max) {#func-clamped-val}
Performs [clamp](#func-clamp-val) in place.

### {@t VecType} {@f snap}({@t VecType} step) {#func-step-vec}
Returns vector with it's components snapped to nearest multiple of corresponding component in `step`.

### {@t VecType} {@f snap}({@t F} step) {#func-step-val}
Returns vector with it's components snapped to nearest multiple of `step`.

### {@t VecType} {@f snapped}({@t VecType} step) {#func-stepped-vec}
Performs [step](#func-snap-vec) in place.

### {@t VecType} {@f snapped}({@t F} step) {#func-stepped-val}
Performs [step](#func-snap-val) in place.

### {@t VecType} {@f reflect}({@t VecType} normal) {#func-reflect}
Returns this vector reflected to normal.

### {@t VecType} {@f refract}({@t VecType} normal, {@t F} ratio) {#func-refract}
Calculates direction of refracted ray where `this` is incoming ray, `normal` is normal vector and `ratio` is refractive ratio.

### {@t VecType} {@f moveTowards}({@t VecType} to, {@t F} dist) {#func-movetowards}
Returns vector moved towards `to` by `dist`.

### {@t VecType} {@f limitLength}({@t F} min, {@t F} max) {#func-limitlength}
Limits length of vector and returns resulting vector.

If `min` or `max` is equal to 0 then vector is not limited to it.

### {@t VecType} {@f angle}({@t VecType} to) {#func-angle}
Calculates angle between this vector and `to` from `[0, 0, ...]`.

Available for <code>{@k Vector}!({@t T}, {@n 2})</code> and <code>{@k Vector}!({@t T}, {@n 3})</code>.

### {@t VecType} {@f angleTo}({@t VecType} to) {#func-angleto}
Calculates angle between line from `this` to `to` and X ordinate.

Available for <code>{@k Vector}!({@t T}, {@n 2})</code>.

### {@t VecType} {@f cross}({@t VecType} b) {#func-cross}
Calculates cross product of vectors.

Available for <code>{@k Vector}!({@t T}, {@n 2})</code>, <code>{@k Vector}!({@t T}, {@n 3})</code> and <code>{@k Vector}!({@t T}, {@n 4})</code>.

### {@t VecType} {@f rotate}({@t F} angle) {#func-rotate}
Returns vector rotated by angle.

Available for <code>{@k Vector}!({@t T}, {@n 2})</code>.

### {@t VecType} {@f perpendicular}() {#func-perpendicular}
Returns vector perpendicular to `this`.

Available for <code>{@k Vector}!({@t T}, {@n 3})</code>.

### {@t VecType} {@f unproject}([[Matrix]]!({@k float}, {@n 4}, {@n 4}) proj, [[Matrix]]!({@k float}, {@n 4}, {@n 4}) view) {#func-unproject}
Projects vector from screen space into object space.

Available for <code>{@k Vector}!({@t T}, {@n 3})</code>.

