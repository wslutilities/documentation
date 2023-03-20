## Instalo

### Alpine Linux

Oni povas instali `wslu` el **Alpine Linux 3.12+** per la jenaj komandoj:

```
sudo apk add wslu
```

### Arch Linux

Oni pocas instali `wslu` per la jenaj metodoj:
1. Komencu `pacman-key` per `pacman-key --init`;
2. Aldonu la WSL Utilities Publica ŝlosilo al `pacman` de la ŝlosilaservilo per `pacman-key -r A2861ABFD897DD37`, aŭ elŝutu de la nia propra servilo kaj importu la ŝlosilo:
```
wget https://pkg.wslutiliti.es/public.key
pacman-key --add public.key
```
3. Subskribu la ŝlosilo loke per `pacman-key --lsign-key A2861ABFD897DD37`;
4. Aldonu la jena enhavo al `/etc/pacman.conf`:
```
[wslutilities]
Server = https://pkg.wslutiliti.es/arch/
```
5. Lanĉu `pacman -Sy && pacman -S wslu` por instali.

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

Oni povas instali `wslu` per la jenaj komandoj:

```
sudo apt install gnupg2 apt-transport-https
wget -O - https://pkg.wslutiliti.es/public.key | sudo tee -a /etc/apt/trusted.gpg.d/wslu.asc

# Debian 10
echo "deb https://pkg.wslutiliti.es/debian buster main" | sudo tee -a /etc/apt/sources.list
# Debian 11
echo "deb https://pkg.wslutiliti.es/debian bullseye main" | sudo tee -a /etc/apt/sources.list

sudo apt update
sudo apt install wslu
```

### Fedora kaj CentOS/RHEL/Oracle Linux/AlmaLinux/Rocky Linux 8+

```

# por nur CentOS/RHEL 8
sudo dnf install epel-release dnf-plugins-core
sudo dnf config-manager --set-enabled PowerTools

sudo dnf copr enable wslutilities/wslu
sudo dnf install wslu
```

### Fedora Remix for WSL

Preinstalled.

### Kali Linux

Oni povas instali `wslu` per la jenaj komandoj:

```
sudo apt install gnupg2 apt-transport-https
wget -O - https://pkg.wslutiliti.es/public.key | sudo tee -a /etc/apt/trusted.gpg.d/wslu.asc
echo "deb https://pkg.wslutiliti.es/kali kali-rolling main" | sudo tee -a /etc/apt/sources.list
sudo apt update
sudo apt install wslu
```

### Pengwin

Antaŭinstalita.

### Pengwin Enterprise 7

Oni povas instali `wslu` per la jenaj komandoj:

```
sudo yum install wslu
```

### Pengwin Enterprise 8

Aldonu la EPEL deponejo:
```
sudo dnf install -y epel-release
```
Oni povas instali `wslu` per la jenaj komandoj:

```
sudo dnf install -y wslu
```

### Ubuntu

::: tip INFORMO
Raportu cimojn ĉe [Launchpad](https://bugs.launchpad.net/ubuntu/+source/wslu) por Ubuntu versio.
:::

::: warning AVERTO
`wslu` ne plu estas antaŭinstalita ekde Ubuntu 22.04 LTS. Bonvolu instali la PPA-version.
:::

Antaŭinstalita en la plej freŝa versio antaŭ Ubuntu 22.04 LTS. Sur pli aĝaj instaloj de Ubuntu, oni povas instali `ubuntu-wsl` kiu dependas de `wslu`: <https://launchpad.net/~wslutilities/+archive/ubuntu/wslu>

```
sudo apt update
sudo apt install ubuntu-wsl
```

Vi povas instali per nia PPA por instali la plej freŝan version de `wslu`: <https://launchpad.net/~wslutilities/+archive/ubuntu/wslu>

```
sudo add-apt-repository ppa:wslutilities/wslu
sudo apt update
sudo apt install wslu
```

### OpenSUSE

Oni povas instali `wslu` per la jenaj komandoj:

#### Leap

```
SUSE_VERSION="$(grep VERSION= /etc/os-release | sed -e s/VERSION=//g -e s/\"//g -e s/-/_/g)"
sudo zypper addrepo https://copr.fedorainfracloud.org/coprs/wslutilities/wslu/repo/opensuse-leap-${SUSE_VERSION}/wslutilities-wslu-opensuse-leap-${SUSE_VERSION}.repo
sudo zypper up
sudo zypper in wslu
```

#### Tumbleweed

```
sudo zypper addrepo https://copr.fedorainfracloud.org/coprs/wslutilities/wslu/repo/opensuse-tumbleweed/wslutilities-wslu-opensuse-tumbleweed.repo
sudo zypper up
sudo zypper in wslu
```

### SUSE Linux Enperprise Server

#### 12 SP5

```
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/SLE_12_SP5/home:wslutilities.repo
sudo zypper addrepo https://download.opensuse.org/repositories/graphics/SLE_12_SP5/graphics.repo
sudo zypper up
sudo zypper in wslu
```

#### 15

```
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/SLE_15/home:wslutilities.repo
sudo zypper addrepo https://download.opensuse.org/repositories/graphics/SLE_15_SP3/graphics.repo
sudo zypper up
sudo zypper in wslu
```

### Void Linux

Oni povas instali `wslu` per la jenaj komandoj:

```
sudo xbps-install wslu
```

### Clear Linux

Oni povas instali `wslu` per la jenaj komandoj:

```
sudo swupd 3rd-party add wslutilities https://pkg.wslutiliti.es/clearlinux
sudo swupd 3rd-party bundle-add wslu
```

### Aliaj Distribuoj

> **⚠ Ne Rekomendu**
> 
> La maniero `curl | bash` estas ne sekura. [Rilata atikolo (La angla)](https://sandstorm.io/news/2015-09-24-is-curl-bash-insecure-pgp-verified-install)

Oni povas instali `wslu` per la jenaj komandoj sur via preferata distribuoj: `curl -sL https://raw.githubusercontent.com/wslutilities/wslu/master/extras/scripts/wslu-install | bash`

### Por Pli Malnovaj Verionoj (Sur La Angla)

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
