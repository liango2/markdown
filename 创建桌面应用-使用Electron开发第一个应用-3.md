# 创建桌面应用-使用electron

## 1.首先安装[node](https://nodejs.org/en/)



安装完成以后在cmd里运行 `node -v`检测安装是否成功。
![img](https://segmentfault.com/img/bVusvQ)



## 设置[淘宝 NPM 镜像](https://npm.taobao.org/)

设置NPM镜像

```language
 npm install -g cnpm --registry=https://registry.npm.taobao.org
```

](https://github.com/jiahaog/nativefier)



## 2.安装[Electron](http://electron.atom.io/)

[electron/README.md at master · electron/electron · GitHub](https://github.com/electron/electron/blob/master/docs-translations/zh-CN/project/README.md)

```
set ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/ 
cnpm install -g electron-prebuilt
```

下载到了"C:\Users\liango\AppData\Local\Temp\electron-tmp-download-11472-1475298491425\electron-v1.1.3-win32-x64.zip"

安装成功后

```
D:\lianxi\lianxi-desktop-window>electron -v
v1.4.2
```

## 

### 禁止使用缓存文件

```
electron --disable-http-cache .
```

参考了：

electron开发(一) - 陈霞光的博客 - 博客园
http://www.cnblogs.com/simoncook/p/5548859.html

## 3.一个简单的Electron程序



cd D:\lianxi\lianxi-desktop-window\mc

从零开始使用Electron + jQuery开发桌面应用 （一） HelloWorld - 远程智力英雄 - SegmentFault
https://segmentfault.com/a/1190000004843033?_ea=710087#articleHeader0