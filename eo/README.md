
# wslu

[![GitHub (pre-)release](https://img.shields.io/github/v/release/wslutilities/wslu?include_prereleases&label=eldono&logo=github&style=flat-square)](https://github.com/wslutilities/wslu)
[![Launchpad](https://img.shields.io/static/v1?label=launchpad&logo=launchpad&color=F8C300&message=spegulita&style=flat-square)](https://launchpad.net/wslu)

Estas kolekto de utilaĵoj por Vindoza Subsistemo por Linukso (Windows Subsystem for Linux, WSL), kiel ricevi Vindozajn medivariablojn aŭ krei viajn plej ŝatatajn Linuksajn Grafikinterfacajn aplikaĵojn ŝparvojojn sur Vindoza labortablo.

Deviĝi Vindozo 10 1703; Iom de funkciojn deviĝas pli alian version de Vindozo 10; Ankaŭ subteni WSL2.

## Funkcioj

**wslusc**

WSL ŝparvoja kreinto kiu kreas ŝparvojo sur via Vindoza labortablo.

**wslsys**

WSL sistema informa presilo kiu presilas sistemajn informojn el Vindozo 10 aŭ WSL.

**wslfetch**

WSL ekrankopia informa ilo kiu presilas informojn elegante.

**wslvar**

WSL ilo por helpi vin ricevi Vindozajn sistemajn medivariablojn.

**wslview**

*Kun simbola ligilo `wview/wslstart/wstart`*

Falsa WSL retumilo/foliumilo kiu povas helpi vin malfermi ligilojn en via defaŭlta Vindoza retumilon aŭ malfermi dosierojn sur Vindozo.

**wslupath**

*⚠ Evitinda*

WSL ilo kiu konvertas dosierindikojn.

**wslact**

Aro de rapidaj agoj por WSL, kiel repide surmeti ĉiujn Vindozajn diskingojn aŭ mane sinkronigi tempon inter Vindozo kaj WSL.

## Subtenaj Linuksaj Distribuoj

- [Debian GNU/Linux](https://www.microsoft.com/store/productId/9MSVKQC78PK6)
- [Kali Linux](https://www.microsoft.com/store/productId/9PKR34TNCV07)
- OpenSUSE Leap [42](https://www.microsoft.com/store/productId/9NJVJTS82TJX), [15.0](https://www.microsoft.com/store/productId/9N1TB6FPVJ8C), [15.1](https://www.microsoft.com/store/productId/9NJFZK00FGKV), kaj [15.2](https://www.microsoft.com/store/productId/9MZD0N9Z4M4H)
- SUSE Linux Enterprise Server [12](https://www.microsoft.com/store/productId/9P32MWBH6CNS) kaj [15](https://www.microsoft.com/store/productId/9PMW35D7FNLX)
- Ubuntu [Latest](https://www.microsoft.com/store/productId/9NBLGGH4MSV6), [16.04 LTS](https://www.microsoft.com/store/productId/9PJN388HP8C9), [18.04 LTS](https://www.microsoft.com/store/productId/9N9TNGVNDL3Q) kaj 20.04 LTS
- [Pengwin (Antaŭe WLinux)](https://www.microsoft.com/store/productId/9NV1GV1PXZ6P)

**Komunumsubtenataj Distribuoj**
- Arch Linux per [ArchWSL](https://github.com/yuk7/ArchWSL)
- Alpine Linux per [AlpineWSL](https://github.com/yuk7/AlpineWSL) aŭ [Alpine WSL](https://www.microsoft.com/store/productId/9P804CRF0395)
- Scientific Linux, Oracle Linux* aŭ RedHat Enterprise Linux** per [Pengwin Enterprise (Antaŭe WLinux Enterprise)](https://www.microsoft.com/store/productId/9N8LP0X93VCP)
- Fedora per [Fedora Remix for WSL](https://github.com/WhitewaterFoundry/WSLFedoraRemix)
- Void Linux per [VoidWSL](https://github.com/am11/VoidWSL)
- Clear Linux per [ClearWSL](https://github.com/wight554/ClearWSL)


*: Ni apogos estonte.

**: Vi devas peti Whitewater Foundry por uzi RHEL, kaj devas havi vian propran RHEL licencon.

Hereda Ubuntu ne plu estas subtenata.

## Cimo

Raportu cimoj al <https://github.com/wslutilities/wslu/issues>.

Raportu Ubuntu versiaj cimoj al <https://bugs.launchpad.net/ubuntu/+source/wslu>.

## Permesilo & Agnosko

<img width="150" src="https://www.gnu.org/graphics/gplv3-with-text-136x68.png">

Ĉi tiu projekto uzas GPLv3 Permesilo.

Emblemo de WSL Utilities kaj bildsimboloj por `wslusc` estas disponebla laŭ la permesilo [Krea Komunaĵo Atribuite 4.0 Tutmonda](http://creativecommons.org/licenses/by/4.0/).

sudo.ps1 (`./src/etc/sudo.ps1`) estas la componanto in la projekto [psutils](^1) de Luke Sampson. La diseiro usas MIT Permisilo.

Tux Emblemo uzi en `/src/etc/wsl.ico` estas kreita de Larry Ewing per Gimp, kaj rekreita de Garrett LeSage per Inkscape.

Parto de la ASCII-arto de `wslfetch` venas de [neofetch](^2) kun MIT-permisilon kaj [screenFetch](^3) kun GPLv3-permisilon.

Pengwin Emblemo en `wslfetch` estas la ASCII versio de la arto de [Dennis D. Bednarz](^4), kaj estas uzata kun permeso de Whitewater Foundry.

WLinux Emblemo en `wslfetch` estas la ASCII versio de la arto de Larry Ewing.

[^1]: https://github.com/lukesampson/psutils/
[^2]: https://github.com/dylanaraps/neofetch/
[^3]: https://github.com/KittyKatt/screenFetch/
[^4]: https://twitter.com/DennisBednarz