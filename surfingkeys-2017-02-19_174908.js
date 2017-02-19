// an example to create a new mapping `ctrl-y`
mapkey('<Ctrl-y>', 'Show me the money', function() {
    Front.showPopup('a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).');
});

// an example to replace `u` with `?`, click `Default mappings` to see how `u` works.
map('?', 'u');

 
// an example to remove mapkey `Ctrl-i`
unmap('<Ctrl-i>');
unmap('<Ctrl-1>')
unmap('<ctrl-2')
unmap('sr')

// 禁止掉,以便留给diigo用
unmap('<Ctrl-Alt-d>')



// addSearchAliasX('s', 'stackoverflow', 'http://stackoverflow.com/search?q=', 'o');
// works like
// addSearchAlias('s', 'stackoverflow', 'http://stackoverflow.com/search?q=');
// mapkey('os', 'Search Selected with stackoverflow',  'searchSelectedWith("http://stackoverflow.com/search?q=")');
// vmapkey('os', 'Search Selected with stackoverflow',  'searchSelectedWith("http://stackoverflow.com/search?q=")');


// 打开
var linkArray = [
        'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=2&tn=baiduhome_pg&wd=rili%20&rsv_spt=1&oq=%25E6%259F%25A5%25E7%259C%258B%25E6%2597%25A5%25E5%258E%2586&rsv_pq=c914e43300265e35&rsv_t=4d6dDpMmHuwxER3gn7Y7xUGBE%2BfvgZvE4U5SWb%2Bk%2FnGrN3evK6Il0EAg9tckJUvkqzpz&rqlang=cn&rsv_enter=0&inputT=2768&rsv_sug3=16&rsv_sug1=15&rsv_sug7=101&rsv_sug2=0&rsv_sug4=3319',
        'http://www.365rili.com/main/calendar.do',
        'https://calendar.google.com/calendar/render?pli=1#main_7%7Cmonth',
        'https://outlook.live.com/owa/?path=/calendar'
    ]; // your links
    

for (var i = 0; i < linkArray.length; i++) {
    mapkey('or'+(i+1), 'open rili 1', function() {
         window.open(linkArray[i],'_blank');
    })
}
//mapkey('or2', 'open rili 2', function() {
//     window.open('http://www.365rili.com/main/calendar.do','_blank');
//});
//mapkey('or3', 'open rili 3', function() {
//     window.open('https://calendar.google.com/calendar/render?pli=1#main_7%7Cmonth','_blank');
//});
//mapkey('or4', 'open rili 4', function() {
//     window.open('https://outlook.live.com/owa/?path=/calendar','_blank');
//});
mapkey('oR', '', function(){
      //var win = window.open('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=2&tn=baiduhome_pg&wd=rili%20&rsv_spt=1&oq=%25E6%259F%25A5%25E7%259C%258B%25E6%2597%25A5%25E5%258E%2586&rsv_pq=c914e43300265e35&rsv_t=4d6dDpMmHuwxER3gn7Y7xUGBE%2BfvgZvE4U5SWb%2Bk%2FnGrN3evK6Il0EAg9tckJUvkqzpz&rqlang=cn&rsv_enter=0&inputT=2768&rsv_sug3=16&rsv_sug1=15&rsv_sug7=101&rsv_sug2=0&rsv_sug4=3319','_blank');
      //window.open('http://www.365rili.com/main/calendar.do','_blank');
      //window.open('https://calendar.google.com/calendar/render?pli=1#main_7%7Cmonth','_blank');
      //window.open('https://outlook.live.com/owa/?path=/calendar','_blank');
      //win.focus();

    
    for (var i = 0; i < linkArray.length; i++) {
       // // will open each link in the current window
       // chrome.tabs.create({
       //     url: linkArray[i]
       // });
      //window.open(linkArray[0],'_blank', 'toolbar=0,location=0,menubar=0');
      window.open(linkArray[i],'_blank');
    }
});

// 打开-todolist 网站
var linkArray_todolist = [
'https://todoist.com/app?lang=zh_CN&v=852#project%2F195499119',
'https://i.doitim.com/home/#/inbox',
'https://www.ticktick.com/#q/all/tasks'
]
mapkey('ot', 'todo', function(){
    for (var i = 0; i < linkArray_todolist.length; i++) {
      window.open(linkArray_todolist[i],'_blank');
    }
});

// 搜索
addSearchAliasX('1', 'mysearch1', 'http://weixin.sogou.com/weixin?type=2&query=', 's');
addSearchAliasX('2', 'mysearch2', 'https://www.zhihu.com/search?type=content&q=', 's');
addSearchAliasX('3', 'mysearch3', 'http://zzk.cnblogs.com/s?t=b&w=', 's');

 


addSearchAliasX('v4', 'myvideo1', 'http://www.langsin.com/Search?key=', 's');
addSearchAliasX('v1', 'myvideo2', 'http://edu.51cto.com/index.php?do=search&m=course&q=', 's');
addSearchAliasX('v2', 'myvideo3', 'http://search.jikexueyuan.com/course/?q=', 's');
addSearchAliasX('v3', 'myvideo4', 'http://www.imooc.com/search/?words=', 's');
//map('svv', 'sv1<Enter>sv2<Enter>sv3<Enter>sv4<Enter>')

// 参考 Surfingkeys -- 用javascript和键盘扩展你的chrome
// https://brookhong.github.io/2015/09/20/surfingkeys-cn.html

// click `Save` button to make above settings to take effect.
// set theme
settings.theme = '\
.sk_theme { \
    background: #fff; \
    color: #000; \
} \
.sk_theme tbody { \
    color: #000; \
} \
.sk_theme input { \
    color: #000; \
} \
.sk_theme .url { \
    color: #555; \
} \
.sk_theme .annotation { \
    color: #555; \
} \
.sk_theme .focused { \
    background: #f0f0f0; \
}';


