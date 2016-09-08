#  安装R

https://cran.rstudio.com/src/base/R-3/R-3.1.3.tar.gz



```
$ wget https://cran.rstudio.com/src/base/R-3/R-3.1.3.tar.gz
$ tar xvf R-3.1.1.tar.gz
$ cd R-3.1.1
$ ./configure --prefix=$HOME/R
$ make && make install
```





# 安装图形界面 

```
Ctrl + Alt + F1进入命令行，然后sudo apt-get install gnome-desktop-environment试试，不行的话反馈一下命令行的输出
```

[ubuntu无法启动图形界面[问题解决] - 查看主题 • Ubuntu中文论坛](http://forum.ubuntu.org.cn/viewtopic.php?f=86&t=323126)

# 安装图形界面 -ok

升级后重启突然不能进入图形界面了，解决方法：

```
ubuntu升级过程很容易出错，从而导致运行系统时，出现各种问题。
出现这个问题，首先要检查升级安装过程是否出错：
$sudo apt-get update && sudo apt-get dist-upgrade
然后重新安装桌面软件：
$sudo apt-get install ubuntu-desktop
$sudo apt-get -f install
$sudo dpkg-reconfigure ubuntu-desktop
$sudo apt-get install gnome-session
$sudo apt-get install lightdm
$sudo apt-get install unity-greeter
$sudo dpkg-reconfigure lightdm
$sudo reboot
如果桌面没有常用用户的登录提示框，则是因为常用用户权限被改成超级用户了。
再把它改过来：
$cd /var/lib/AccountsService/users
$ls
YourAccountsName
将YourAccountsName文件中的SystemAccount=true改为SystemAccount=false即可。
另，如何把ibus输入法从默认的微软双拼改成小鹤双拼呢？
在系统中将ibus的pereference中设置成双拼，选XHE，然后退出。
在terminal中运行：ibus-daemon -drx即可。
Ubuntu升级后无法登录图形界面问题
```

[Ubuntu升级后无法登录图形界面问题 - 开源软件 - IT610.com](http://www.it610.com/article/2564538.htm)



登陆后看不到图形界面的修复方法

执行命令[ubuntu 登录后没有图形桌面 - 操作系统 - IT610.com](http://www.it610.com/article/848031.htm)

```
－、系统－－－新立得软件包管理器－－搜索－－libbeagle0－－－标记为删除
二、终端运行：sudo apt-get install nautilus
三、终端运行：nautilus
```

 ![sp160824_023824](pictures\2016-08-24\sp160824_023824.png)

会看到失败的图形界面中有弹出窗口出现：

![sp160824_023550](file:///D:/markdown/pictures/2016-08-24/sp160824_023550.png?lastModify=1471976493)



看到上面的弹出窗口后，按照[xorg - How to fix "The system is running in low-graphics mode" error? - Ask Ubuntu](http://askubuntu.com/questions/141606/how-to-fix-the-system-is-running-in-low-graphics-mode-error)继续修理-ok.









