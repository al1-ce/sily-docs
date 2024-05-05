# Color

## Description

A color represented in RGBA format. Each component is a {@k float} value normally ranging from {@n 0.0f} to {@n 1.0f}.

Access to components can be achieved by GLSL-style access with `rgba` letters in any order or length. I.e `c.r`, `c.g`, `c.b` and `c.a` will return respective components, `c.bra` will return array of `[Blue, Red, Alpha]` components.

```d
col c = col(1, 2, 3, 4);
c.r;    // 1
c.b;    // 2
c.g;    // 3
c.a;    // 4
c.rgb;  // [1, 2, 3]
c.rgba; // [1, 2, 3, 4]
c.bg;   // [3, 2]
c.agrb; // [4, 2, 1, 3]
c.rrag; // [1, 1, 4, 2]
c.rgaabargb; // [1, 2, 4, 4, 3, 4, 1, 2, 3]
```

Color can be converted directly to [[Vector|Vector4]] as such <code>{@k vec4} v = {@k col}({@n 1.0f}, {@n 0.5f});</code>.

## Properties

|                         |                    | |
| ---                     | ---                | --- |
| {@k float}[{@n 4}] | [data](#prop-data) | {@n 1.0f} |

## Methods

|             | |
| ---         | --- |
| [[Color]]   | [this](#func-this)({@k in float} rgb) |
| [[Color]]   | [this](#func-this)({@k in float} rgb, {@k in float} a) |
| [[Color]]   | [this](#func-this)({@k in float}[{@n 3}] rgb...) |
| [[Color]]   | [this](#func-this)({@k in float}[{@n 4}] rgba...) |
| [[Color]]   | [copyof](#func-copyof)() |
| {@k size_t} | [toHash](#func-tohash)() {@k const } {@t @safe} {@k nothrow} |
| {@k string} | [toString](#func-tostring)() {@k const } |
| {@k float}* | [ptr](#func-ptr)() {@k return} |
| {@k ubyte}  | [r8](#func-rgba)() [g8](#func-rgba)() [b8](#func-rgba)() [a8](#func-rgba)() |
| {@k float}  | [hue](#func-hue)() |
| {@k float}  | [saturation](#func-saturation)() |
| {@k float}  | [value](#func-value)() |
| {@k float}  | [luminance](#func-luminance)() |
| [[Color]]   | [invert](#func-invert)({@k bool} invertAlpha = {@n false}) |
| [[Color]]   | [darken](#func-darken)({@k float} amount) |
| [[Color]]   | [lighten](#func-lighten)({@k float} amount) |
| [[Color]]   | [lerp](#func-lerp)({@k const} [[Color]] to, {@k float} weight) |
| [[Color]]   | [clamp](#func-clamp)({@k float} min = {@n 0.0f}, {@k float} max = {@n 1.0f}) |
| [[Color]]   | {@k static} [fromHex](#func-fromhex)({@k uint} hex, {@k bool} hasAlpha = {@n false}) |
| [[Color]]   | {@k static} [fromHsv](#func-fromhsv)({@k float} hue, {@k float} saturation, {@k float} value, {@k float} alpha = {@n 1.0f}) |
| [[Color]]   | {@k static} [fromHtml](#func-fromhtml)({@k string} html) |
| [[Color]]   | {@k static} [fromAnsi8](#func-fromansi8)({@k int} ansi8) |
| [[Color]]   | {@k static} [fromAnsi](#func-fromansi)({@k int} ansi) |
| {@k string} | [toHtml](#func-tohtml)({@k bool} p_alpha = {@n false}) |
| {@k uint}   | [toHex](#func-tohex)() |
| {@k int}    | [toAnsi8](#func-toansi8)({@k bool} isBackground = {@n false}) |
| {@k int}    | [toAnsi](#func-toansi)() |
| {@k string} | [toAnsi8String](#func-toansi8string)({@k bool} isBackground = {@n false}) |
| {@k string} | [toAnsiString](#func-toansistring)({@k bool} isBackground = {@n false}) |
| {@k string} | [toTrueColorString](#func-totruecolorstring)({@k bool} isBackground = {@n false}) |

## Operators
| A | B | OP | Description |
| --- | --- | --- | --- |
| [[Color]] | [[Color]] | +, -, *, /, % | Performs operation for each component (`a.r + b.r`, `a.g + b.g`...) |
| [[Color]] | Number | +, -, *, /, % | Performs operation for each component (`a.r + b`, `a.g + b`...) |
| [[Color]] | [[Color]] | == | Compares two colors for equality |
| [[Color]] | [[Color]] | <, >, <=, >= | Compares luminance of two colors |
| [[Color]] | | -, +, --, ++ | Performs unary operation for each component (`-a.r`, `-a.g`...)
| [[Color]] | [[Color]] | =, +=, -=, *=, /=, %= | Performs operation for each component in place (`a.r += b.r`...) |
| [[Color]] | Number | =, +=, -=, *=, /=, %= | Performs operation for each component in place (`a.r += b`...) |
| [[Color]] | {@k bool} | cast() | Allows casting to boolean value. Ignores alpha. False value is close to <code>{@k col}({@n 0.0f}, {@n 1.0f})</code>
| [[Color]] | [[Vector]] | cast() | Allows casting to vector of length 3 or 4 where vector type is floating point. Values are unchanged |
| [[Color]] | [[Vector]] | cast() | Allows casting to vector of length 3 or 4 where vector type is whole number. Values are converted to their 8 bit counterparts |

## Property Descriptions

### {@k float}[{@n 4}] data = {@n 1.0f} {#prop-data}
`[r, g, b, a]` array of color components

## Method Descriptions

### [[Color]] {@k this}() {#func-this}
Constructs new color
```d
Color c;
c = Color();                       // RGBA = 1
c = Color(0.4f, 0.5f, 1.0f);       // R = 0.4, G = 0.5, B = 1
c = Color(0.4f, 0.5f, 1.0f, 2.0f); // R = 0.4, G = 0.5, B = 1, A = 2
c = Color(0.4f);                   // RGB = 0.4, A = 1
c = Color(0.4f, 0.85f);            // RGB = 0.4, A = 0.85
c = Color([0.2f, 0.4f, 1.0f]);     // R = 0.2, G = 0.4, B = 1, A = 1
// Alias `col` can be also used
c = col([0.2f, 0.4f, 1.0f]);       // R = 0.2, G = 0.4, B = 1, A = 1
```

### [[Color]] {@f copyof}() {#func-copyof}
Creates a copy of this Color's data.

### {@k size_t} {@f toHash}() {@k const } {@t @safe} {@k nothrow} {#func-tohash}
Returns hash of [data](#prop-data).

### {@k string} {@f toString}() {@k const} {#func-tostring}
Returns string representation of color in format of {@s "[R, G, B, A]"}.

### {@k float}* {@f ptr}() {#func-ptr}
Returns pointer to [data](#prop-data).

### {@k ubyte} {@f r8}(), {@f g8}(), {@f b8}(), {@f a8}() {#func-rgba}
Returns individual components in 8 bit (0-255) format.

### {@k float} {@f hue}() {#func-hue}
Returns color's hue.

### {@k float} {@f saturation}() {#func-saturation}
Returns color's saturation.

### {@k float} {@f value}() {#func-value}
Returns color's value.

### {@k float} {@f luminance}() {#func-luminance}
Returns color's luminance.

### [[Color]] {@f invert}({@k bool} invertAlpha = {@n false}) {#func-invert}
Returns inverted color where each component is subtracted from {@n 1.0f}.

If `invertAlpha` is set then alpha component is also inverted.

### [[Color]] {@f darken}({@k float} amount) {#func-darken}
Returns color darkened by `amount`.

### [[Color]] {@f lighten}({@k float} amount) {#func-lighten}
Returns color lightened by `amount`.

### [[Color]] {@f lerp}({@k const} [[Color]] to, {@k float} weight)) {#func-lerp}
Returns linear interpolation with another color

### [[Color]] {@f clamp}({@k float} min = {@n 0.0f}, {@k float} max = {@n 1.0f}) {#func-clamp}
Returns color with each component clamped between `min` and `max`

### [[Color]] {@k static} {@f fromHex}({@k uint} hex, {@k bool} hasAlpha = {@n false}) {#func-fromhex}
Constructs new color from HEX value

### [[Color]] {@k static} {@f fromHsv}({@k float} hue, {@k float} saturation, {@k float} value, {@k float} alpha = {@n 1.0f}) {#func-fromhsv}
Constructs new color from HSV(A) values

### [[Color]] {@k static} {@f fromHtml}({@k string} html) {#func-fromhtml}
Constructs new color from HTML {@k string} in format {@s "#RRGGBB"}

### [[Color]] {@k static} {@f fromAnsi8}({@k int} ansi8) {#func-fromansi8}
Constructs new color from ANSI8 index

### [[Color]] {@k static} {@f fromAnsi}({@k int} ansi) {#func-fromansi}
Constructs new color from ANSI256 index

### {@k string} {@f toHtml}({@k bool} p_alpha = {@n false}) {#func-tohtml}
Returns {@k string} representation of color in HTML format {@s "#RRGGBB"}

### {@k uint} {@f toHex}() {#func-tohex}
Returns hex representation of color in format {@n 0xRRGGBB}

### {@k int} {@f toAnsi8}({@k bool} isBackground = {@n false}) {#func-toansi8}
Returns closest ANSI8 color index

### {@k int} {@f toAnsi}() {#func-toansi}
Returns closest ANSI256 color index

### {@k string} {@f toAnsi8String}({@k bool} isBackground = {@n false}) {#func-toansi8string}
Returns closest ANSI8 bash color string

### {@k string} {@f toAnsiString}({@k bool} isBackground = {@n false}) {#func-toansistring}
Returns closest ANSI256 bash color string

### {@k string} {@f toTrueColorString}({@k bool} isBackground = {@n false}) {#func-totruecolorstring}
Returns bash truecolor string

