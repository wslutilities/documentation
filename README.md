
# wslu

[![GitHub (pre-)release](https://img.shields.io/github/v/release/wslutilities/wslu?include_prereleases&logo=github&style=flat-square)](https://github.com/wslutilities/wslu)
[![Launchpad](https://img.shields.io/static/v1?label=launchpad&logo=launchpad&color=F8C300&message=mirrored&style=flat-square)](https://launchpad.net/wslu)

This is a collection of utilities for Windows 10 Linux Subsystem, such as retrieving Windows 10 environment variables or creating your favorite Linux GUI application shortcuts on Windows 10 Desktop.

Requires Windows 10 Creators Update; Some of the feature requires a higher version of Windows 10; Supports WSL2.

## Feature

**wslusc**

A WSL shortcut creator to create a shortcut on your Windows 10 Desktop.

**wslsys**

A WSL system information printer to print out system informations from Windows 10 or WSL.

**wslfetch**

A WSL screenshot information tool to print information in an elegant way.

**wslvar**

A WSL tool to help you get Windows system environment variables.

**wslview**

*With alias `wview/wslstart/wstart`*

A fake WSL browser that can help you open link in default Windows browser or open files on Windows.

**wslupath**

*⚠ Deprecated*

A WSL tool to convert path styles.

**wslact**

A set of quick actions for WSL such as quickly mounting all drives or manually sync time between Windows and WSL.

## Currently supported Distro

- [Debian GNU/Linux](https://www.microsoft.com/store/productId/9MSVKQC78PK6)
- [Kali Linux](https://www.microsoft.com/store/productId/9PKR34TNCV07)
- OpenSUSE Leap [42](https://www.microsoft.com/store/productId/9NJVJTS82TJX), [15.0](https://www.microsoft.com/store/productId/9N1TB6FPVJ8C), [15.1](https://www.microsoft.com/store/productId/9NJFZK00FGKV), and [15.2](https://www.microsoft.com/store/productId/9MZD0N9Z4M4H)
- SUSE Linux Enterprise Server [12](https://www.microsoft.com/store/productId/9P32MWBH6CNS) and [15](https://www.microsoft.com/store/productId/9PMW35D7FNLX)
- Ubuntu [Latest](https://www.microsoft.com/store/productId/9NBLGGH4MSV6), Community Preview, [16.04 LTS](https://www.microsoft.com/store/productId/9PJN388HP8C9), [18.04 LTS](https://www.microsoft.com/store/productId/9N9TNGVNDL3Q) and 20.04 LTS
- [Pengwin (Formerly WLinux)](https://www.microsoft.com/store/productId/9NV1GV1PXZ6P)

**Community Supported Distro**
- Arch Linux via [ArchWSL](https://github.com/yuk7/ArchWSL)
- Alpine Linux via [AlpineWSL](https://github.com/yuk7/AlpineWSL) or [Alpine WSL](https://www.microsoft.com/store/productId/9P804CRF0395)
- Scientific Linux, Oracle Linux* or RedHat Enterprise Linux** via [Pengwin Enterprise (Formerly WLinux Enterprise)](https://www.microsoft.com/store/productId/9N8LP0X93VCP)
- Fedora via [Fedora Remix for WSL](https://github.com/WhitewaterFoundry/WSLFedoraRemix)


*: Will support in the future.

**: you need to request to using RHEL from Whitewater Foundary and have a license of RHEL of your own.

Legacy Ubuntu is no longer supported.

## Bug

Report bugs to <https://github.com/wslutilities/wslu/issues>.

Report bugs for Ubuntu version to <https://bugs.launchpad.net/ubuntu/+source/wslu>.

## License & Credits

<img width="150" src="https://www.gnu.org/graphics/gplv3-with-text-136x68.png">

This project uses GPLv3 License.

Logo of WSL Utilities and icons for `wslusc` desktop shortcuts are licensed under [CC BY 4.0 International License](http://creativecommons.org/licenses/by/4.0/).



The sudo.ps1 (`./src/etc/sudo.ps1`) used here is a part of [psutils](^1) made by Luke Sampson. the file is used under MIT License.

Tux logo used here(`/src/etc/wsl.ico`) was originally made by Larry Ewing in the Gimp and re-illustrated in vector by Garrett LeSage, using Inkscape.

Some of `wslfetch` ASCII Arts comes from [neofetch](^2) with MIT License (License B) and [screenFetch](^3) with GPLv3 License (License C).

Pengwin Logo used in `wslfetch` ASCII art is ASCII version of the artwork by [Dennis D. Bednarz](^4), with use permission from Whitewater Foundry.

WLinux Logo used in `wslfetch` ASCII art is ASCII version of the artwork by Larry Ewing.

[^1]: https://github.com/lukesampson/psutils/
[^2]: https://github.com/dylanaraps/neofetch/
[^3]: https://github.com/KittyKatt/screenFetch/
[^4]: https://twitter.com/DennisBednarz