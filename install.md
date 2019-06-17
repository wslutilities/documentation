### For WLinux

Preinstalled in WLinux.

### For Ubuntu/Debian/Kali Linux

Run following commands:
```bash
sudo apt install apt-transport-https
wget -O - https://api.patrickwu.ml/public.key | sudo apt-key add -
echo "deb https://apt.patrickwu.ml/ stable main" | sudo tee -a /etc/apt/sources.list 
sudo apt update
sudo apt install wslu
```

Or you can download the .deb package from release and install it using `sudo dpkg -i wslu*`.

### For OpenSUSE/SLES

```bash
sudo zypper ar -G https://rpm.patrickwu.ml/ ruapm
sudo zypper ref
sudo zypper in wslu
```

Or you can download the .rpm package from release and install it using `sudo rpm -ivh "wslu*"`.

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