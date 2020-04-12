## Installation

### Alpine Linux

You can install `wslu` from Alpine Linux testing with the following command:

```
$ echo "@testing http://dl-cdn.alpinelinux.org/alpine/edge/testing/" | sudo tee -a /etc/apk/repositories
$ sudo apk update
$ sudo apk add wslu@testing
```

### Arch Linux

[wslu](https://aur.archlinux.org/packages/wslu/) and [wslu-git](https://aur.archlinux.org/packages/wslu-git/) on AUR.

### CentOS/RHEL

Add the repository for the corresponding Linux distribution:

- **CentOS 7**: `sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_7/home:wslutilities.repo`
- **CentOS 8**: `sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_8/home:wslutilities.repo`
- **Red Hat Enterprise Linux 7**: `sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/RHEL_7/home:wslutilities.repo`

Then install with the command `sudo yum install wslu`.


### Debian

You can install `wslu` with the following command:

```
sudo apt install gnupg2 apt-transport-https
wget -O - https://access.patrickwu.space/wslu/public.asc | sudo apt-key add -
echo "deb https://access.patrickwu.space/wslu/debian buster main" | sudo tee -a /etc/apt/sources.list
sudo apt update
sudo apt install wslu
```

### Fedora Remix

You can install `wslu` from `COPR` with the following command:

```
sudo dnf copr enable wslutilities/wslu
sudo dnf install wslu
```

### Kali Linux

You can install `wslu` with the following command:

```
sudo apt install gnupg2 apt-transport-https
wget -O - https://access.patrickwu.space/wslu/public.asc | sudo apt-key add -
echo "deb https://access.patrickwu.space/wslu/kali kali-rolling main" | sudo tee -a /etc/apt/sources.list
sudo apt update
sudo apt install wslu
```

### Pengwin

Preinstalled.

### Pengwin Enterprise

You can install `wslu` with the following command:

```
sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/ScientificLinux_7/home:wslutilities.repo
sudo yum install wslu
```

### Ubuntu

Preinstalled in the latest apps. On older installations of Ubuntu please install `ubuntu-wsl` that depends on `wslu`:

```
sudo apt update
sudo apt install ubuntu-wsl
```

### OpenSUSE

You can install `wslu` with the following command:

```
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/openSUSE_Leap_15.1/home:wslutilities.repo
sudo zypper up
sudo zypper in wslu`.
```

### SUSE Linux Enperprise Server

You can install `wslu` with the following command:

```
SLESCUR_VERSION="$(grep VERSION= /etc/os-release | sed -e s/VERSION=//g -e s/\"//g -e s/-/_/g)"
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/SLE_$SLESCUR_VERSION/home:wslutilities.repo
sudo zypper addrepo https://download.opensuse.org/repositories/graphics/SLE_12_SP3_Backports/graphics.repo
sudo zypper up
sudo zypper in wslu
```

### Other distributions

> **⚠ Not Recommend**
> 
> `curl | bash` method is not secure. [Related article](https://sandstorm.io/news/2015-09-24-is-curl-bash-insecure-pgp-verified-install)

You can install `wslu` with the following command on your preferred distribution: `curl -sL https://raw.githubusercontent.com/wslutilities/wslu/master/extras/scripts/wslu-install | bash`

### For Older Verions

#### Install from `wsl-translinux`

`wslu` is part of [wsl-translinux](https://github.com/cerebrate/wsl-translinux) apt repository. 

Following the guidelines [Here](https://github.com/cerebrate/wsl-translinux/blob/master/README.md) to add the repository. Then you can simply run `sudo apt install wslu` to install `wslu`.

However, with lack of support, I moved my packages to my own apt repository.

#### Install version 1.2

```
git clone --branch v1.2 https://github.com/patrick330602/wslu.git ~/.wslu
cd ~/.wslu
./configure -i
```

#### Install version 1.1/1.0
```
git clone --branch v1.1 https://github.com/patrick330602/wslu.git
#for 1.0: change 1.1 to 1.0
cd wslu
sudo make install
```

To uninstall, `run sudo make uninstall`

#### Install pre-releases

directly run `wslu-dev` after cloning.