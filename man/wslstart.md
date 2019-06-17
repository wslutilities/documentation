## Manpage Name

wslstart/wslview - Component of Windows 10 Linux Subsystem Utility

## SYNOPSIS

```
wslview (--register|--unregister|--help|--version) [LINK]
wslstart (--register|--unregister|--help|--version) [LINK]
```

## DESCRIPTION

This is a fake WSL browser that can help you open link in default Windows browser.

## COMMANDS

**-h, --help**
- print a simple help

**-v, --version**
- print current version

**-u, --unregister**
- remove `wslview` as the default WSL web browser. (`wslstart` is an alias)

**-r, --register**
- register `wslview` as the default WSL web browser. (`wslstart` is an alias)

## SEE ALSO

https://github.com/wslutilities/wslu

## AUTHOR

Created by Patrick Wu <wotingwu@live.com>

## REPORTING BUGS

Report bugs to <https://github.com/wslutilities/wslu/issues>

## COPYRIGHT

This is free software; you can redistribute it and/or modify
it under the terms of the GNU GPL version 3 or (at your option) any later version.
There is NO warranty; not even MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.