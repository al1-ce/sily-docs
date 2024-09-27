# Vector

Flexible vector template with some math utils.

## Aliases

| From                      | To     | Description |
| ---                       | ---    | --- |
| [[Vector]]                | vec    | GLSL style alias to vector |
| [[Vector]]!({@k float}, N)                | vec    | GLSL style alias to float vector |
| [[Vector]]!({@k float}, {@n 2})                | vec2    | GLSL style alias to float vector 2 |
| [[Vector]]!({@k float}, {@n 3})                | vec3    | GLSL style alias to float vector 3 |
| [[Vector]]!({@k float}, {@n 4})                | vec4    | GLSL style alias to float vector 4 |
| [[Vector]]!({@k double}, N)                | dvec    | GLSL style alias to double vector |
| [[Vector]]!({@k double}, {@n 2})                | dvec2    | GLSL style alias to double vector 2 |
| [[Vector]]!({@k double}, {@n 3})                | dvec3    | GLSL style alias to double vector 3 |
| [[Vector]]!({@k double}, {@n 4})                | dvec4    | GLSL style alias to double vector 4 |
| [[Vector]]!({@k int}, N)                | ivec    | GLSL style alias to int vector |
| [[Vector]]!({@k int}, {@n 2})                | ivec2    | GLSL style alias to int vector 2 |
| [[Vector]]!({@k int}, {@n 3})                | ivec3    | GLSL style alias to int vector 3 |
| [[Vector]]!({@k int}, {@n 4})                | ivec4    | GLSL style alias to int vector 4 |
| [[Vector]]!({@k uint}, N)                | uvec    | GLSL style alias to uint vector |
| [[Vector]]!({@k uint}, {@n 2})                | uvec2    | GLSL style alias to uint vector 2 |
| [[Vector]]!({@k uint}, {@n 3})                | uvec3    | GLSL style alias to uint vector 3 |
| [[Vector]]!({@k uint}, {@n 4})                | uvec4    | GLSL style alias to uint vector 4 |

## Templates
| Name                               | Description |
| ---                                | --- |
| {@f isVector}(V)                   | Returns true if `V` is a vector of any size or type |
| {@f isVector}(V, {@k size_t} n)    | Returns true if `V` is a vector of `n` size and any type |
| {@f isVector}(V, T)                | Returns true if `V` is a vector of any size and `T` type |
| {@f isVector}(V, T, {@k size_t} n) | Returns true if `V` is a vector of `n` size and `T` type |

## Structs
- [[Vector]] - Vector structure with data accesible with <code>[{@t N}]</code> or swizzling 

