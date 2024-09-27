# Path

## Functions

| Type | Signature |
| ---  | --- |
| {@k string} | [buildAbsolutePath](#func-buildabsolutepath)({@k string} path) |
| {@k string} | [buildRelativePath](#func-buildrelativepath)({@k string} path) |
| {@k string}[] | [listdir](#func-listdir)({@k string} path, {@k bool} listDirs = {@n true}, {@k bool} listFiles = {@n true}) |

## Function Descriptions

### {@k string} {@f buildAbsolutePath}({@k string} path) {#func-buildabsolutepath}
Normalises path, expands tilde and builds absolute path.


### {@k string} {@f buildRelativePath}({@k string} path) {#func-buildrelativepath}
Normalises path, expands tilde and builds relative path.

### {@k string}[] {@f listdir}({@k string} path, {@k bool} listDirs = {@n true}, {@k bool} listFiles = {@n true}) {#func-listdir}
Returns listing from `path`. Includes files if `listFiles` is true and includes directories if `listDirs` is true.

