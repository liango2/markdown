# 创建桌面应用-使用electron

## 设置[淘宝 NPM 镜像](https://npm.taobao.org/)

设置NPM镜像

```language
 npm install -g cnpm --registry=https://registry.npm.taobao.org
```

](https://github.com/jiahaog/nativefier)



## 安装：electron

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

## 使用Electron开发第一个应用

参考了：

Electron-使用Electron开发第一个应用 - 风浪 - 博客园
http://www.cnblogs.com/whtydn/p/5197214.html

electron/quick-start.md at master · electron/electron · GitHub -打造你第一个 Electron 应用
https://github.com/electron/electron/blob/master/docs-translations/zh-CN/tutorial/quick-start.md

运行

```
electron .
```

