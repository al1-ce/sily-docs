# Color

Module containing color related utilities

## Aliases

| From                      | To     | Description                                                                |
| ---                       | ---    | ---                                                                        |
| [[Color]]                 | col    | GLSL style alias to color                                                  |
| [[#g-func-color8|color8]] | Color8 | Allows constructing color from 8-bit components as if it was a constructor |

## Functions

| Type      | Signature                                                                                   |
| ---       | ---                                                                                         |
| [[Color]] | [color8](#g-func-color8)({@k float} R, {@k float} G, {@k float} B, {@k float} A = {@n 255}) |

## Function Descriptions
### {@f color8}({@k float} R, {@k float} G, {@k float} B, {@k float} A = {@n 255}) {#g-func-color8}

Constructs [[Color]] from 8 bit (0-255) components

## Structs
- [[Color]] - Color structure with data accesible with <code>[{@t N}]</code> or swizzling 

## Enums
| Type      | Name   | Description                        |
| ---       | ---    | ---                                |
| [[Color]] | Colors | Enum containing most of web colors |

