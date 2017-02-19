# 创建桌面应用-使用electron

## 1.首先安装[node](https://nodejs.org/en/)



安装完成以后在cmd里运行 `node -v`检测安装是否成功。
![img](https://segmentfault.com/img/bVusvQ)



### 设置[淘宝 NPM 镜像](https://npm.taobao.org/)

设置NPM镜像

```language
 npm install -g cnpm --registry=https://registry.npm.taobao.org
```

https://github.com/jiahaog/nativefier



## 2.安装[Electron](http://electron.atom.io/)

[electron/README.md at master · electron/electron · GitHub](https://github.com/electron/electron/blob/master/docs-translations/zh-CN/project/README.md)

~~用electron-packager打包生成各平台的程序，还是很方便的，但是有些坑。~~

### 速度慢

#### ~~通过设置taob镜像来安装~~

~~对某个平台第一次打包的时候，packager需要下载对应的electron包，那速度真是慢啊！~~
幸好淘宝有[electron镜像](http://npm.taobao.org/mirrors)。通过设置ELECTRON_MIRROR环境变量，可以大大加快速度。

```
set ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/ 
cnpm install -g electron-prebuilt
```

~~临时文件下载到了"C:\Users\liango\AppData\Local\Temp\electron-tmp-download-11472-1475298491425\electron-v1.1.3-win32-x64.zip"~~

#### *手动下载安装*

如果这样还是没法下载，建议：

> 直接从[electron包地址](https://github.com/electron/electron/releases)下载最新的`electron`包，然后放到｀~/.electron ｀目录下，重新执行 electron-prebuilt 即可，原理 electron-download 模块会把下载好的文件放到用户目录的 .electron 中，如果存在即不会重新下载。此方法同样适用于打包工具 electron-package、electron-builder

```
c:\Users\liango.electron\electron-v1.4.2-win32-x64.zip
```

安装成功后

```
D:\lianxi\lianxi-desktop-window>electron -v
v1.4.2
```

## 

### ~~禁止使用缓存文件~~

```
electron --disable-http-cache .
```

参考了：

electron开发(一) - 陈霞光的博客 - 博客园
http://www.cnblogs.com/simoncook/p/5548859.html

# 一个简单的Electron程序

```
cd D:\lianxi\lianxi-desktop-window\mc
```

以下参考了：

从零开始使用Electron + jQuery开发桌面应用 （一） HelloWorld - 远程智力英雄 - SegmentFault
https://segmentfault.com/a/1190000004843033?_ea=710087#articleHeader0

### 使用npm init命令创建package.json文件

```
在根目录下使用npm init命令创建package.json文件，根据提示填写就行，
```

### *添加electron-prebuilt依赖*

```
执行一次npm install --save-dev electron-prebuilt
```

### 创建index.js,内容如下：

```
/**
 * Created by liango on 2016-10-01.
 */
const electron = require('electron');
// 控制应用生命周期的模块。
const {app} = electron;
// 创建原生浏览器窗口的模块。
const {BrowserWindow} = electron;

// 主窗口
let mainWindow;

// 初始化并准备创建主窗口
app.on('ready', function () {
    // 创建一个宽800px 高700px的窗口
    mainWindow = new BrowserWindow({
        width: 800,
        height: 700,
    });
    // 载入应用的inde.html
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    // 打开开发工具界面
    mainWindow.openDevTools();
    // 窗口关闭时触发
    mainWindow.on('closed', function(){
        // 想要取消窗口对象的引用， 如果你的应用支持多窗口，你需要将所有的窗口对象存储到一个数组中，然后在这里删除想对应的元素
        mainWindow = null
    });
});
```



### 创建index.html文件，内容如下：

```
<!doctype html>
<html>
<head>
    <meta charset="utf-8" /> 
    <title>我的世界</title>
</head>
<body>
    <span style="color:#fff;">Hello World</span>
</body>
</html>
```

# 使用electron .启动你的项目

```
D:\lianxi\lianxi-desktop-window\mc>electron .
```

# 配置npm start启动你的项目

在根目录下，命令行输入 `npm start`(需要在`package.json`中配置

```
"scripts": {"start": "electron ."}
```

```
D:\lianxi\lianxi-desktop-window\mc>npm start

> myelectronapp@1.0.0 start D:\lianxi\lianxi-desktop-window\mc
> electron .

```

# 配置gulp运行代码

先装全局`glup`：`npm install gulp -g`
再装本地：`npm install --save-dev gulp`
至于为啥[看这](https://www.zhihu.com/question/36023122/answer/65611814)

根目录下创建`gulpfile.js`配置文件,内容如下：

```
/**
 * Created by liango on 2016-10-01.
 */
// 获取依赖
var gulp = require('gulp'),
    childProcess = require('child_process'),
    electron = require('electron-prebuilt');

// 创建 gulp 任务
gulp.task('run', function () {
    childProcess.spawn(electron, ['.'], {stdio:'inherit'});
});
```

运行`gulp`任务：`gulp run`

```
D:\lianxi\lianxi-desktop-window\mc>gulp run
[20:22:12] Using gulpfile D:\lianxi\lianxi-desktop-window\mc\gulpfile.js
[20:22:12] Starting 'run'...
[20:22:12] Finished 'run' after 15 ms


D:\lianxi\lianxi-desktop-window\mc>
```



# 打包产出exe文件

## *添加 `electron-packager`依赖*

```
export ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
```

使用命令 `npm install --save-dev electron-packager`将`electron-package`安装到本地

```
cnpm install --save-dev electron-packager
```

在`package.json`中添加脚本

```
"scripts": {
    "start": "electron .",
    "packager": "electron-packager ./app myappname --all --out ./OutApp --version 0.37.3 --overwrite --icon=./app/img/icon/icon.ico"
  }
```



在命令行里运行：
`npm run-script packager`

```

```

更多请见：

(6)从零开始使用Electron + jQuery开发桌面应用 （二） 打包应用 - 远程智力英雄 - SegmentFault
https://segmentfault.com/a/1190000004863646

打包electron应用 | 金丝猴的博客
http://jinsihou19.github.io/2016/05/20/electron1/



手动下载：

Releases · electron/electron · GitHub
https://github.com/electron/electron/releases



## 打包_压缩源码



安装 `asar`:`npm install --save-dev asar`
安装完成以后,就可以使用asar命令讲程序文件打包了，
`asar pack . myappname.asar`

或者

在 package.json 中添加`"myasar": "asar pack . OutApp/myelectronapp-win32-x64/resources/app.asar"`,

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "electron .",
    "myasar": "asar pack . OutApp/myelectronapp-win32-x64/resources/app.asar",
    "packager": "electron-packager . myelectronapp --out ./OutApp --version 1.4.2 --overwrite --icon=./img/icon/Heart_32px_1096420_easyicon.net.ico"
  }
```

```
D:\lianxi\lianxi-desktop-window\mc>npm run myasar

> myelectronapp@1.0.0 myasar D:\lianxi\lianxi-desktop-window\mc
> asar pack . OutApp/myelectronapp-win32-x64/resources/app.asar
```

执行完毕以后，在`./`下可以看到`app.asar`文件，把他复制到`./OutApp/myappname.../resources/`下，然后把`resources`下的`app`文件夹删除，运行`resources`上层的`appName.exe`文件可以启动应用了。



# 更多的参考

南京 - 面向对象 - 伯乐在线
http://date.jobbole.com/tag/%e5%8d%97%e4%ba%ac/

生活或工作中我们会遇到形形色色的bug，希望能与对的你一起debug！ - 面向对象 - 伯乐在线
http://date.jobbole.com/3412/

所爱隔山海，山海皆可平。时而严肃时而少女心满满的我给你报个需求啊，快找到我~~~~ - 面向对象 - 伯乐在线
http://date.jobbole.com/3510/

生活或工作中我们会遇到形形色色的bug，希望能与对的你一起debug！ - 面向对象 - 伯乐在线
http://date.jobbole.com/3412/

log.io
http://logio.org:28778/#

用nodejs+webkit开发桌面程序 - 坚持原则-保持简单 - ITeye技术网站
http://gavin.iteye.com/blog/1387816

heX——基于 HTML5 和 Node.JS 开发桌面应用 - 梦想天空（山边小溪） - 博客园
http://www.cnblogs.com/lhb25/p/using-html5-and-nodejs-develop-desktop-app.html

GitHub - netease-youdao/hex: heX
https://github.com/netease-youdao/hex

GitHub - jiahaog/nativefier: Wrap any web page natively without even thinking, across Windows, OSX and Linux
https://github.com/jiahaog/nativefier#usage

GitHub - electron-userland/electron-builder: A complete solution to package and build a ready for distribution Electron app with “auto update” support out of the box
https://github.com/electron-userland/electron-builder

heX Blog | A Solution to Building Desktop Application Using HTML5 and Node.js
http://hex.youdao.com/blog/

为什么移动Web应用程序很慢（译） - tangzhnju - 博客园
http://www.cnblogs.com/codemood/p/3213459.html

GitHub - electron/electron: Build cross platform desktop apps with JavaScript, HTML, and CSS
https://github.com/electron/electron

electron/README.md at master · electron/electron · GitHub
https://github.com/electron/electron/blob/master/docs-translations/zh-CN/project/README.md

GitHub - sindresorhus/awesome-electron: Useful resources for creating apps with Electron
https://github.com/sindresorhus/awesome-electron

GitHub - sindresorhus/awesome-electron: Useful resources for creating apps with Electron
https://github.com/sindresorhus/awesome-electron#apps

GitHub - sindresorhus/awesome-electron: Useful resources for creating apps with Electron
https://github.com/sindresorhus/awesome-electron#tools

electron site:cnblogs.com - Google 搜索
https://www.google.com/search?q=electron+site%3Acnblogs.com&oq=electron+site%3Acnblogs.com&gs_l=serp.12...10669.10669.0.11104.1.1.0.0.0.0.233.233.2-1.1.0....0...1c.1.64.serp..0.0.0.RPAG19UtKj8

Electron使用与学习--(基本使用与菜单操作) - leslie·Zhao - 博客园
http://www.cnblogs.com/zqzjs/p/5544047.html

Electron使用与学习--(页面间的通信) - leslie·Zhao - 博客园
http://www.cnblogs.com/zqzjs/p/5558282.html

NodeJs - 随笔分类 - leslie·Zhao - 博客园
http://www.cnblogs.com/zqzjs/category/828101.html

Electron使用与学习--(基本使用与菜单操作) - leslie·Zhao - 博客园
http://www.cnblogs.com/zqzjs/p/5544047.html

electron 中文 exe - Google 搜索
https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=electron+%E4%B8%AD%E6%96%87+exe

(6)从零开始使用Electron + jQuery开发桌面应用 （一） HelloWorld - 远程智力英雄 - SegmentFault
https://segmentfault.com/a/1190000004843033?_ea=710087#articleHeader0

Electron 开发桌面应用 - 掘金
http://gold.xitu.io/entry/5770fa1c0a2b58006a253bbc

# 使用webstorm开发electron

Getting started with Electron in WebStorm | WebStorm Blog
https://blog.jetbrains.com/webstorm/2016/05/getting-started-with-electron-in-webstorm/

# 使用[nsis](http://baike.baidu.com/link?url=u_5BTOw62-HWUAAUpeT0-3g83e2yUzlq5K1I13ESxOayYc_5xnGjq-cXcxAxcxdBw5chCa0cR6ojHe1pfnLmB_)制作安装程序

下载：[HM NIS Edit](https://sourceforge.net/projects/hmne/)
http://prdownloads.sourceforge.net/hmne/nisedit2.0.3.exe?download

启动nsis，选择`新建脚本：向导`
![img](https://segmentfault.com/img/bVuzmS)程序应用信息

#### 第一步：程序基本信息，根据自己实际情况填写就行；

#### 第二步：安装程序图标，自己选择。安装程序文件就是要输出的.exe文件,随便放。安装程序语言根据自己实际需要选择；

![img](https://segmentfault.com/img/bVuznm)

#### 第三步闪屏和背景属性：根据自己实际情况选择；

#### 第四步目录授权：根据自己实际情况选择；

#### 第五步选择文件：选择我们输出的文件的目录；

![img](https://segmentfault.com/img/bVuznK)

#### 第六步创建快捷图标：根据自己实际情况选择；

#### 第七步指定安装完成后的动作：基本就是启动本程序即可；

#### 第八步卸载相关属性：根据自己实际情况选择；

完成！！
完成之后摁`F9`或者选择`NSIS->编译并运行` 编译并运行
![img](https://segmentfault.com/img/bVuzoF)运行完毕之后

![img](https://segmentfault.com/img/bVuzpt)即可在应用跟目录下看到我们的安装文件

![img](https://segmentfault.com/img/bVuzpO)

### 至此使用electron编写应用以及打包部分，就完成了，下一步就是使用jQuery编写具体程序了，我先去学会儿，过几天在写。