
# wslu

[![GitHub (pre-)release](https://img.shields.io/github/v/release/wslutilities/wslu?include_prereleases&label=版本&logo=github&style=flat-square)](https://github.com/wslutilities/wslu)
[![Launchpad](https://img.shields.io/static/v1?label=launchpad&logo=launchpad&color=F8C300&message=已镜像&style=flat-square)](https://launchpad.net/wslu)

这是一套适用于 Windows 10 Linux 子系统的工具组，可以在 Windows 的 Linux 子系统下完成诸如获取 Windows 环境变量或者创建你最喜爱的 Linux 进程桌面捷径等工作。

需要 Windows 10 创造者更新；部分功能需要更高版本的Windows 10；支持 WSL2。

## 功能

**wslusc**

用于创建 Linux 进程的 Windows 桌面快捷方式的 WSL 工具。

**wslsys**

展示 Windows 和 WSL 下系统信息的 WSL 工具。

**wslfetch**

类似于 screenfetch 的 WSL 系统信息展示工具。

**wslvar**

可以帮助你获取 Windows 系统环境变量的 WSL 工具。

**wslview**

**拥有别名 `wview/wslstart/wstart`**

虚拟 WSL 浏览器，可以通过其在 Windows 默认网络浏览器开启链接或在 Windows 里开启 WSL 下的文档。

**wslupath**

*⚠ 已弃用*

可以转换不同路径类型的 WSL 工具。

**wslact**

一组 WSL 快捷动作，如快速挂载所有硬盘或手动与 Windows 同步时间。

## 支持的 Linux 操作系统

- [Debian GNU/Linux](https://www.microsoft.com/store/productId/9MSVKQC78PK6)
- [Kali Linux](https://www.microsoft.com/store/productId/9PKR34TNCV07)
- OpenSUSE Leap [42](https://www.microsoft.com/store/productId/9NJVJTS82TJX), [15.0](https://www.microsoft.com/store/productId/9N1TB6FPVJ8C), [15.1](https://www.microsoft.com/store/productId/9NJFZK00FGKV), 与 [15.2](https://www.microsoft.com/store/productId/9MZD0N9Z4M4H)
- SUSE Linux Enterprise Server [12](https://www.microsoft.com/store/productId/9P32MWBH6CNS) 与 [15](https://www.microsoft.com/store/productId/9PMW35D7FNLX)
- Ubuntu [Latest](https://www.microsoft.com/store/productId/9NBLGGH4MSV6), [16.04 LTS](https://www.microsoft.com/store/productId/9PJN388HP8C9), [18.04 LTS](https://www.microsoft.com/store/productId/9N9TNGVNDL3Q) 与 20.04 LTS
- [Pengwin (Formerly WLinux)](https://www.microsoft.com/store/productId/9NV1GV1PXZ6P)

**社区支持的操作系统**
- Arch Linux （使用 [ArchWSL](https://github.com/yuk7/ArchWSL)）
- Alpine Linux （使用 [AlpineWSL](https://github.com/yuk7/AlpineWSL) 或 [Alpine WSL](https://www.microsoft.com/store/productId/9P804CRF0395)）
- Scientific Linux, Oracle Linux* 或 RedHat Enterprise Linux** （使用 [Pengwin Enterprise (Formerly WLinux Enterprise)](https://www.microsoft.com/store/productId/9N8LP0X93VCP)）
- Fedora （使用 [Fedora Remix for WSL](https://github.com/WhitewaterFoundry/WSLFedoraRemix)）


*: 未来会支持。

**: 你需要向 Whitewater Foundry 提出使用 RHEL，并且同时需要拥有自己的 RHEL使用许可证书。

旧版的 Ubuntu 不再被支持。

## 问题

汇报问题至 <https://github.com/wslutilities/wslu/issues>。

汇报 Ubuntu 版的问题至 <https://bugs.launchpad.net/ubuntu/+source/wslu>。

## 授权及版权

<img width="150" src="https://www.gnu.org/graphics/gplv3-with-text-136x68.png">

本项目使用 GPLv3 授权条款。

WSL Utilities 的图标及 `wslusc` 桌面快捷方式系采用[创用 CC 姓名标示-非商业性 4.0 国际 授权条款](http://creativecommons.org/licenses/by-nc/4.0/)授权。



sudo.ps1 (`./src/etc/sudo.ps1`) 属于 Luke Sampson 的 [psutils](^1) 项目。本文档在 MIT 证书许可下使用。

使用的 Tux 图标(`/src/etc/wsl.ico`) 为 Larry Ewing 在 Gimp 中创造并由 Garrett LeSage 用 Inkscape 重绘。

一部分 `wslfetch` ASCII 艺术图来自于使用 MIT 证书的 [neofetch](^2) 和使用 GPLv3 证书的 [screenFetch](^3)。

在 `wslfetch` 中使用的 Pengwin 图标是 Whitewater Foundry 授权， [Dennis D. Bednarz](^4) 创作的艺术作品的 ASCII 版本。

在 `wslfetch` 中使用的 WLinux 图标是 Larry Ewing 创作的艺术作品的 ASCII 版本。

[^1]: https://github.com/lukesampson/psutils/
[^2]: https://github.com/dylanaraps/neofetch/
[^3]: https://github.com/KittyKatt/screenFetch/
[^4]: https://twitter.com/DennisBednarz