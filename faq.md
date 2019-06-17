### Why deprecating `wslupath`?

WSL now have a better wsl path conversion tool wslpath provided by Microsoft that is builtin for all distros. `wslupath` is still here for compatibility.

### When pinned in the taskbar, why the shortcut created by `wslusc` will have 2 icons?

This is a limitation of WSL and it is expected. when running the shortcut, it will use your Windows X server(X410, VcXsrv, Xming, etc) to create a separate window for displaying the Linux app. Since it is displaying in another app, the window for displaying app will be separated from the original shortcut.

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

### Hotel?

Trivago.
