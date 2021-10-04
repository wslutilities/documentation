## What is WSL?

WSL is short for "Windows Subsystem for Linux", which is a Linux Subsystem from Windows 10. WSL provides developers with a familiar Bash shell and Linux environment in which you can run most Linux command-line tools, directly on Windows, UNMODIFIED, without needing an entire Linux virtual machine.

## Why deprecating `wslupath`?

WSL now have a better wsl path conversion tool `wslpath` provided by Microsoft that is builtin for all distros. `wslupath` is still here for compatibility.

## When pinned in the taskbar, why the shortcut created by `wslusc` will have 2 icons?

This is a limitation of WSL and it is expected. when running the shortcut, it will use your Windows X server(X410, VcXsrv, Xming, etc) to create a separate window for displaying the Linux app. Since it is displaying in another app, the window for displaying app will be separated from the original shortcut.

## I am unable to update and `access.patrickwu.space` is not accessible. What happened?

the package has moved to a new location <https://pkg.wslutiliti.es/> that do not relies on my personal website. For old users, you should remove the `http://access.patrickwu.space` entry from `/etc/apt/sources.list` and readd following the guidelines for Kali Linux and Debian GNU/Linux.

## What is the error code returned?

| error code | description |
| ---------- | ----------- |
| 1 | general error/unknown error. |
| 20 | input is empty or invalid. |
| 21 | input is empty. |
| 22 | input is invalid. |
| 30 | file do not exist. |
| 31 | folder do not exist. |
| 32 | feature not implemented. |
| 33 | required component do not exist. |
| 34 | unsupported feature (for a distro) |
| 40 | Unknown system input. |

## Hotel?

Trivago.
