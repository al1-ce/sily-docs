# Math

## Properties

| Type | Name | Value |
| ---  | ---  | --- |
| {@k const double} | degtorad | {@n PI} / {@n 180.0} |
| {@k const double} | radtodeg | {@n 180.0} / {@n PI} |

## Functions

| Type | Signature |
| ---  | --- |
| {@t T} | [lerp](#func-lerp)({@t T})({@t T} from ,{@t T} to, {@t T} weight) |
| {@t T} | [snap](#func-snap)({@t T})({@t T} value, {@t T} step) |

## Function Descriptions

### {@t T} {@f lerp}({@t T})({@t T} from ,{@t T} to, {@t T} weight) {#func-lerp}
Linearly interpolates value

### {@t T} {@f snap}({@t T})({@t T} value, {@t T} step) {#func-snap}
Snaps value to step.

If {@t T} is not a floating point then explicit casts are used. Might cause data loss.

