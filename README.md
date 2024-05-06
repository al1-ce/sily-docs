# sily library for D programming language

sily is a general-purpose library containing utilities for general programming and game development.

[![Build](https://github.com/al1-ce/sily/actions/workflows/d.yml/badge.svg)](https://github.com/al1-ce/sily/actions/workflows/d.yml)
[![REUSE Compliance Check](https://github.com/al1-ce/sily/actions/workflows/reuse.yml/badge.svg)](https://github.com/al1-ce/sily/actions/workflows/reuse.yml)

## Modules
- [sily](modules/core.md) - Core utilities
- [sdl](modules/sdl.md) - Parser for SDLang with minor modifications
- [term](modules/term.md) - Tools for working with posix terminal
- [web](modules/web.md) - *Unfinished* parser for html/css

## Usage

<!-- tabs:start -->

#### **CLI**

```bash
dub add sily
```

#### **SDL**
Replace `x.x` with latest release version (see [versioning](#versioning) for more info)

```sdl
dependency "sily" version="~>x.x"
```

#### **JSON**
Replace `x.x` with latest release version (see [versioning](#versioning) for more info)

```json
"dependencies": {
    "sily": "~>x.x"
}
```

<!-- tabs:end -->

For particular usage see [Modules](#modules)

## Versioning
Library follows semantic versioning (`x.y.z` where `x` is Major release, `y` is Minor release and `z` is Patch). This means that:
- 1.0.Z - Patch version signified bugfixes and minor changes
    - Patches are compatible with each other
    - You can safely change from one patch to another
    - You can specify version in project config file as {@s "~>x.y"}
- 1.Y.0 - Minor version signifies new features
    - Minor versions are not backwards-compatible
    - You can safely upgrade from lower Minor release to higher Minor release
    - You can specify version in project config file as {@s "~>x"} if you're using features only from first minor release
- X.0.0 - Major version signifies breaking or removal of features
    - Major releases are not compatible with each other
    - You might have to fix your code in case of deprecations or major changes
    - Deprecation will be removed in every Major release
    - Deprecations will be introduces in Minor releases by tagging deprecated code with <code>{@t @}{@k deprecated}({@s "x.y.z - Why"})</code>, where {@s "x.y.z"} is version where code was deprecated and {@s "Why"} is reason for removal or what to use instead

Example:
```d
Version 1.0.0 - Initial release
Version 1.0.1 - Fixed functionA and structA
Version 1.0.2 - Fixed functionB
Version 1.1.0 - Moved functionB to moduleB
                functionB marked @deprecated("1.1.0 - Moved to moduleB")
Version 1.1.1 - Fixed functionC
Version 1.2.0 - Added structB
Version 2.0.0 - structA now has different logic. Removed functionB from moduleA
```

## Development
- [dmd / ldc / gdc](https://dlang.org/) - D compiler
- [dub](https://code.dlang.org/) - D package manager
- [just](https://github.com/casey/just) - Make system
- [valgrind](https://valgrind.org/) - Memory checker
- [reuse](https://reuse.software/) - See [License](#license)

## Contributing
See [CONTRIBUTING.md](https://github.com/al1-ce/sily/blob/master/CONTRIBUTING.md).

## License
- Copy of used licenses can be found in `LICENSES` folder. Main license can be found in [LICENSE](https://github.com/al1-ce/sily/blob/master/LICENSE) file.
- List of authors can be found in [AUTHORS.md](https://github.com/al1-ce/sily/blob/master/AUTHORS.md).

This project is [REUSE](https://reuse.software/) compliant.

