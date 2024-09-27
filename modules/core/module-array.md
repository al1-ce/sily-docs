# Array

Module containing color related utilities

## Aliases

| From                    | To     | Description |
| ---                     | ---    | --- |
| [fill](#func-fill-size)  | repeat | |

## Functions

| Type        | Signature |
| ---         | --- |
| {@k bool}   | [isOneOf](#func-isoneof)({@t T})({@t T} val, {@t T}[] vals...) |
| {@t T}[]    | [fill](#func-fill-arr)({@t T})({@t T}[] arr, {@t T} val) |
| {@t T}[]    | [fill](#func-fill-size)({@t T})({@t T} val, {@k size_t} size) |
| {@k size_t} | [deepLength](#func-deeplength)({@t T})({@t T} array) |

## Templates
| Name                | Description |
| ---                 | --- |
| {@f ArrayBaseOf}(T) | Returns base type of array |

## Function Descriptions

### {@k bool} {@f isOneOf}({@t T})({@t T} val, {@t T}[] vals...) {#func-isoneof}
Returns true if `val` is contained in `vals`.

### {@t T}[] {@f fill}({@t T})({@t T}[] arr, {@t T} val) {#func-fill-arr}
Fills new array with length of `arr` with values `val`.

### {@t T}[] {@f fill}({@t T})({@t T} val, {@k size_t} size) {#func-fill-size}
Fills new array with length of `size` with values `val`.

### {@k size_t} {@f deepLength}({@t T})({@t T} array) {#func-deeplength}
Returns product of all lengths of `array` (i.e `[[1, 2, 3], [1, 3]].deepLength == 6`).

