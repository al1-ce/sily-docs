# Random 

## Description

Import with <code>{@k import} sily.random;</code>

Random number generator.

## Properties

| Type | Name | Default |
| ---  | ---  | --- |
| {@k uint} | [seed](#prop-seed) | `std.random.Random.defaultSeed` |

## Methods

| Return | Signature |
| ---    | --- |
| [[Random]] | [this](#func-this)({@k uint} seed) |
| {@k void} | [randomize](#func-randomize)() |
| {@t T} | [rand](#func-rand-none){@t T}() |
| {@t T} | [rand](#func-rand-minmax)({@t T})({@t T} min, {@t T} max) |
| {@k uint} | [random](#func-random)() |
| {@k void} | [skip](#func-skip)({@k size_t} amount = {@n 1}) |
| {@k void} | [skipTo](#func-skipto)({@k size_t} numCalls) |

## Aliases

| From | To  | Description |
| ---  | --- | --- |

## Property Descriptions

### {@k uint} seed = std.random.Random.defaultSeed {#prop-seed}
Random number generator seed.

## Method Descriptions

### [[Random]] {@f this}({@k uint} seed) {#func-this}
Creates new random number generator with set seed.

### {@k void} {@f randomize}(), {@f randomise}() {#func-randomize}
Changes seed to random unpredictable seed.

### {@t T} {@f rand}({@t T})() {#func-rand-none}
Returns random value of type {@t T} between <code>{@n 0}</code> and <code>{@t T}.max</code>.

### {@t T} {@f rand}({@t T})({@t T} min, {@t T} max) {#func-rand-minmax}
Returns random value of type {@t T} between `min` and `max`.

### {@k uint} {@f random}() {#func-random}
Returns random <code>{@k uint}</code>.

### {@k void} {@f skip}({@k size_t} amount = {@n 1}) {#func-skip}
Skips `amount` of current random values.

### {@k void} {@f skipTo}({@k size_t} numCalls) {#func-skipto}
Skips random values until amount of consumed values equal ot `numCalls`. Can be used to fast-forward to certain known point.

