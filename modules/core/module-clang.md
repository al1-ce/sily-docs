# Clang 

## Aliases

| From | To  | Description |
| ---  | --- | --- |
| {@k uint} | csize_t | {@k size_t}, but C-based |

## Functions

| Type | Signature |
| ---  | --- |
| {@t csize_t} | [csizeof](#func-csizeof)({@t T})({@t T} val) |
| {@k const} ({@k char}*)[] | [cstringList](#func-cstringlist)({@k string}[] list) |

## Function Descriptions

### {@t csize_t} {@f csizeof}({@t T})({@t T} val) {#func-csizeof}
Returns C style size where `val` is length if {@t T} is numeric.

Returns C style size for array using [[module-array#func-deeplength|deepLength]] if {@t T} is array.

### {@k const} ({@k char}*)[] {@f cstringList}({@k string}[] list) {#func-cstringlist}
Converts array of strings to c-style array of pointers

