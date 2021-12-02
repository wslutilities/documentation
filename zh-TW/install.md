## Installation

### Alpine Linux

你可以用以下指令通過 **Alpine Linux 3.12+** 安裝 `wslu`：

```
sudo apk add wslu
```

### Arch Linux

你可以用以下方法安裝 `wslu`：
1. 如未操作過，請先用指令 `pacman-key --init` 最初化 `pacman-key`；
2. 使用指令 `pacman-key -r A2861ABFD897DD37` 將 WSL Utilities 公共密鑰從密鑰伺服器加入 `pacman`，或通過以下方法從官網下載公共密鑰導入:
```
wget https://pkg.wslutiliti.es/public.key
pacman-key --add public.key
```
3. 使用指令 `pacman-key --lsign-key A2861ABFD897DD37`本地簽名密鑰;
4. 將以下內容加入 `/etc/pacman.conf`:
```
[wslutilities]
Server = https://pkg.wslutiliti.es/arch/
```
5. 使用指令 `pacman -Sy && pacman -S wslu` 來執行安裝。

### CentOS/RHEL/Oracle Linux

為相應的發行版新增倉庫：

- **CentOS 7**: 
```
sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_7/home:wslutilities.repo
```
- **CentOS 8**: 
```
sudo dnf install -y epel-release 
sudo dnf config-manager --set-enabled PowerTools
sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_8/home:wslutilities.repo
```
- **Oracle Linux 7**: 
```
sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/RHEL_7/home:wslutilities.repo
```
- **Oracle Linux 8**: 
```
sudo dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
sudo subscription-manager repos --enable codeready-builder-for-rhel-8-$(/bin/arch)-rpms
sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_8/home:wslutilities.repo
```
- **Red Hat Enterprise Linux 7**: 
```
sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/RHEL_7/home:wslutilities.repo
```
- **Red Hat Enterprise Linux 8**: 
```
sudo dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
sudo subscription-manager repos --enable codeready-builder-for-rhel-8-$(/bin/arch)-rpms
sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_8/home:wslutilities.repo
```

然後用以下指令 `sudo yum install wslu` 安裝 `wslu`。


### Debian

你可以用以下指令安裝 `wslu`：

```
sudo apt install gnupg2 apt-transport-https
wget -O - https://pkg.wslutiliti.es/public.key | sudo tee -a /etc/apt/trusted.gpg.d/wslu.asc
echo "deb https://pkg.wslutiliti.es/debian buster main" | sudo tee -a /etc/apt/sources.list
sudo apt update
sudo apt install wslu
```

### Fedora

你可以用以下指令通過 `COPR` 安裝 `wslu`：

```
sudo dnf copr enable wslutilities/wslu
sudo dnf install wslu
```

### Fedora Remix for WSL

已預載。

### Kali Linux

你可以用以下指令安装 `wslu`：

```
sudo apt install gnupg2 apt-transport-https
wget -O - https://pkg.wslutiliti.es/public.key | sudo tee -a /etc/apt/trusted.gpg.d/wslu.asc
echo "deb https://pkg.wslutiliti.es/kali kali-rolling main" | sudo tee -a /etc/apt/sources.list
sudo apt update
sudo apt install wslu
```

### Pengwin

已預載。

### Pengwin Enterprise 7

你可以用以下指令安装 `wslu`：

```
sudo yum install wslu
```

### Pengwin Enterprise 8

加入 EPEL 倉庫:

```
sudo dnf install -y epel-release
```

你可以用以下指令安装 `wslu`：

```
sudo dnf install -y wslu
```

### Ubuntu

> 注意!
>
> Ubuntu 版本的 `wslu` 為修改版。你需要在[此](https://bugs.launchpad.net/ubuntu/+source/wslu)對 Ubuntu 版問題進行反饋。

最新版本已預載。針對舊版本的安裝，請安裝依賴於 wslu 的 ubuntu-wsl:

```
sudo apt update
sudo apt install ubuntu-wsl
```

在最新版 `wslu` 進入 `main` 倉庫前，請從以下 PPA 安裝： <https://launchpad.net/~wslutilities/+archive/ubuntu/wslu>

### OpenSUSE

你可以用以下指令安装 `wslu`：

```
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/openSUSE_Leap_15.1/home:wslutilities.repo
sudo zypper up
sudo zypper in wslu
```

### SUSE Linux Enperprise Server

你可以用以下指令安装 `wslu`：

```
SLESCUR_VERSION="$(grep VERSION= /etc/os-release | sed -e s/VERSION=//g -e s/\"//g -e s/-/_/g)"
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/SLE_$SLESCUR_VERSION/home:wslutilities.repo
sudo zypper addrepo https://download.opensuse.org/repositories/graphics/SLE_12_SP3_Backports/graphics.repo
sudo zypper up
sudo zypper in wslu
```

### 其他發行版

> **⚠ 不建議**
> 
> `curl | bash` 這種方法並不安全。 [相關文章](https://sandstorm.io/news/2015-09-24-is-curl-bash-insecure-pgp-verified-install)

在你想要安裝的發行版下執行以下指令：`curl -sL https://raw.githubusercontent.com/wslutilities/wslu/master/extras/scripts/wslu-install | bash`

### 針對更舊的版本 （只限英文）

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
