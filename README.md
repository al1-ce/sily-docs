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
Replace `x.x.x` with latest release version

```sdl
dependency "sily" version="~>x.x.x"
```

#### **JSON**
Replace `x.x.x` with latest release version

```json
"dependencies": {
    "sily": "~>x.x.x"
}
```

<!-- tabs:end -->

For particular usage see [Modules](#modules)

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

