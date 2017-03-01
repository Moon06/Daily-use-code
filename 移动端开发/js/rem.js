/* 请添加在head中
*获取终端视口宽度,除1000再设置html的fontSize
*按设计图计算用rem做单位
*/
var pageWidth = document.documentElement.clientWidth/1000;
var content = "html{font-size:" + pageWidth +'px;}'
var style = document.createElement('style');
style.innerHTML = content;
document.head.appendChild(style);
