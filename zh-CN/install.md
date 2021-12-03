## 安裝

### Alpine Linux

你可以用以下指令通过 **Alpine Linux 3.12+** 安装 `wslu`：

```
sudo apk add wslu
```

### Arch Linux

你可以用以下方法安装 `wslu`：
1. 如未操作过，请先用命令 `pacman-key --init` 初始化 `pacman-key`；
2. 使用命令 `pacman-key -r A2861ABFD897DD37` 将 WSL Utilities 公共密钥从密钥服务器加入 `pacman`，或通过以下方法从官网下载公共密钥导入:
```
wget https://pkg.wslutiliti.es/public.key
pacman-key --add public.key
```
3. 使用命令 `pacman-key --lsign-key A2861ABFD897DD37`本地签名密钥;
4. 将以下内容加入 `/etc/pacman.conf`:
```
[wslutilities]
Server = https://pkg.wslutiliti.es/arch/
```
5. 使用命令 `pacman -Sy && pacman -S wslu` 来运行安装。

### CentOS/RHEL/Oracle Linux

为相应的发行版添加仓库：

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

然后用以下指令 `sudo yum install wslu` 安装 `wslu`。


### Debian

你可以用以下指令安装 `wslu`：

```
sudo apt install gnupg2 apt-transport-https
wget -O - https://pkg.wslutiliti.es/public.key | sudo tee -a /etc/apt/trusted.gpg.d/wslu.asc
echo "deb https://pkg.wslutiliti.es/debian buster main" | sudo tee -a /etc/apt/sources.list
sudo apt update
sudo apt install wslu
```

### Fedora

你可以用以下指令通过 `COPR` 安装 `wslu`：

```
sudo dnf copr enable wslutilities/wslu
sudo dnf install wslu
```

### Fedora Remix for WSL

已预装。

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

已预装。

### Pengwin Enterprise 7

你可以用以下指令安装 `wslu`：

```
sudo yum install wslu
```

### Pengwin Enterprise 8

加入 EPEL 仓库:

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
> Ubuntu 版本的 `wslu` 为修改版。你需要在[此](https://bugs.launchpad.net/ubuntu/+source/wslu)对 Ubuntu 版问题进行反馈。

最新版本已预装。针对旧版本的安装，请安装依赖于 wslu 的 ubuntu-wsl:

```
sudo apt update
sudo apt install ubuntu-wsl
```

在最新版 `wslu` 进入 `main` 仓库前，请从以下 PPA 安装： <https://launchpad.net/~wslutilities/+archive/ubuntu/wslu>

### OpenSUSE

你可以用以下命令安装 `wslu`：

```
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/openSUSE_Leap_15.1/home:wslutilities.repo
sudo zypper up
sudo zypper in wslu
```

### SUSE Linux Enperprise Server

你可以用以下命令安装 `wslu`：

```
SLESCUR_VERSION="$(grep VERSION= /etc/os-release | sed -e s/VERSION=//g -e s/\"//g -e s/-/_/g)"
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/SLE_$SLESCUR_VERSION/home:wslutilities.repo
sudo zypper addrepo https://download.opensuse.org/repositories/graphics/SLE_12_SP3_Backports/graphics.repo
sudo zypper up
sudo zypper in wslu
```

### 其他发行版

> **⚠ 不建议**
> 
> `curl | bash` 这种方法并不安全。 [相关文章](https://sandstorm.io/news/2015-09-24-is-curl-bash-insecure-pgp-verified-install)

在你想要安装的发行版下运行以下命令：`curl -sL https://raw.githubusercontent.com/wslutilities/wslu/master/extras/scripts/wslu-install | bash`

### 针对更旧的版本 （只限英文）

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
