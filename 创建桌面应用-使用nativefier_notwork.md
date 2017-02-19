

# 创建桌面应用-使用nativefier

## [淘宝 NPM 镜像](https://npm.taobao.org/)

设置NPM镜像

```language
 npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 安装web转桌面app的工具：nativefier
[https://github.com/jiahaog/nativefier](https://github.com/jiahaog/nativefier)

## Usage： nativefier

### 下载需要的依赖：electron

[electron/README.md at master · electron/electron · GitHub](https://github.com/electron/electron/blob/master/docs-translations/zh-CN/project/README.md)

```
set ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/ 
cnpm install -g electron-prebuilt
```

下载到了"C:\Users\liango\AppData\Local\Temp\electron-tmp-download-11472-1475298491425\electron-v1.1.3-win32-x64.zip"

### 使用nativefier

```
nativefier "http://medium.com"
```

下载失败了。。