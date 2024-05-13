## Installation

### Alpine Linux

You can install `wslu` on **Alpine Linux 3.12+** with the following command:

```
sudo apk add wslu
```

### Arch Linux

You can install `wslu` with the following methods:
1. If not done so, initial `pacman-key` with `pacman-key --init`;
2. download the WSL Utilities Package Signing Key from our website and import it into `pacman`:
```
wget https://pkg.wslutiliti.es/public.key
pacman-key --add public.key
```
3. Locally sign the key with `pacman-key --lsign-key 2D4C887EB08424F157151C493DD50AA7E055D853`;
4. add the following content in your `/etc/pacman.conf`:
```
[wslutilities]
Server = https://pkg.wslutiliti.es/arch/
```
5. run `pacman -Sy && pacman -S wslu` to install.

### CentOS 7
```
sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_7/home:wslutilities.repo
sudo yum install wslu
```

### Red Hat Enterprise Linux 7/Oracle Linux 7
```
sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/RHEL_7/home:wslutilities.repo
sudo yum install wslu
```


### Debian

You can install `wslu` with the following command:

```
sudo apt install gnupg2 apt-transport-https
wget -O - https://pkg.wslutiliti.es/public.key | sudo gpg -o /usr/share/keyrings/wslu-archive-keyring.pgp --dearmor

echo "deb [signed-by=/usr/share/keyrings/wslu-archive-keyring.pgp] https://pkg.wslutiliti.es/debian \
$(. /etc/os-release && echo "$VERSION_CODENAME") main" | sudo tee /etc/apt/sources.list.d/wslu.list

sudo apt update
sudo apt install wslu
```

### Fedora and CentOS/RHEL/Oracle Linux/AlmaLinux/Rocky Linux 8+

```

# for CentOS/RHEL 8 only
sudo dnf install epel-release dnf-plugins-core
sudo dnf config-manager --set-enabled PowerTools

sudo dnf copr enable wslutilities/wslu
sudo dnf install wslu
```

### Fedora Remix for WSL

Preinstalled.

### Kali Linux

You can install `wslu` with the following command:

```
sudo apt install gnupg2 apt-transport-https
wget -O - https://pkg.wslutiliti.es/public.key | sudo gpg -o /usr/share/keyrings/wslu-archive-keyring.pgp --dearmor
echo "deb [signed-by=/usr/share/keyrings/wslu-archive-keyring.pgp] https://pkg.wslutiliti.es/kali kali-rolling main" | sudo tee -a /etc/apt/sources.list.d/wslu.list
sudo apt update
sudo apt install wslu
```

### Pengwin

Preinstalled.

### Pengwin Enterprise 7

You can install `wslu` with the following command:

```
sudo yum install wslu
```

### Pengwin Enterprise 8

Add the EPEL repository:
```
sudo dnf install -y epel-release
```
You can install `wslu` with the following command:

```
sudo dnf install -y wslu
```

### Ubuntu

::: tip INFO
For Ubuntu `universe` version, you should only report bug at [Launchpad](https://bugs.launchpad.net/ubuntu/+source/wslu); for the PPA version, you should report bugs at the GitHub issues.
:::

::: warning
Starting from Ubuntu 22.04 LTS, Ubuntu on WSL no longer bundled with `wslu`. Please install the PPA version.
:::

Preinstalled before Ubuntu 22.04 LTS. On older installations of Ubuntu please install `ubuntu-wsl` that depends on `wslu`:

```
sudo apt update
sudo apt install ubuntu-wsl
```

To install the latest version of `wslu`, you can install via our PPA: <https://launchpad.net/~wslutilities/+archive/ubuntu/wslu>

```
sudo add-apt-repository ppa:wslutilities/wslu
sudo apt update
sudo apt install wslu
```

### OpenSUSE

You can install `wslu` with the following command:

#### Leap

```
SUSE_VERSION="$(grep VERSION= /etc/os-release | sed -e s/VERSION=//g -e s/\"//g -e s/-/_/g)"
sudo zypper addrepo https://copr.fedorainfracloud.org/coprs/wslutilities/wslu/repo/opensuse-leap-${SUSE_VERSION}/wslutilities-wslu-opensuse-leap-${SUSE_VERSION}.repo
sudo zypper ref
sudo zypper in wslu
```

#### Tumbleweed

```
sudo zypper addrepo https://copr.fedorainfracloud.org/coprs/wslutilities/wslu/repo/opensuse-tumbleweed/wslutilities-wslu-opensuse-tumbleweed.repo
sudo zypper ref
sudo zypper in wslu
```

### SUSE Linux Enperprise Server

#### 12 SP5

```
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/SLE_12_SP5/home:wslutilities.repo
sudo zypper addrepo https://download.opensuse.org/repositories/graphics/SLE_12_SP5/graphics.repo
sudo zypper ref
sudo zypper in wslu
```

#### 15

```
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/SLE_15/home:wslutilities.repo
sudo zypper addrepo https://download.opensuse.org/repositories/graphics/SLE_15_SP3/graphics.repo
sudo zypper ref
sudo zypper in wslu
```

### Void Linux

You can install `wslu` with the following command:

```
sudo xbps-install wslu
```

### Clear Linux

You can install `wslu` with the following command:

```
sudo swupd 3rd-party add wslutilities https://pkg.wslutiliti.es/clearlinux
sudo swupd 3rd-party bundle-add wslu
```

### Other distributions

> **⚠ Not Recommend**
>
> `curl | bash` method is not secure. [Related article](https://sandstorm.io/news/2015-09-24-is-curl-bash-insecure-pgp-verified-install)

You can install `wslu` with the following command on your preferred distribution: `curl -sL https://raw.githubusercontent.com/wslutilities/wslu/master/extras/scripts/wslu-install | bash`

### For Older Versions

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
