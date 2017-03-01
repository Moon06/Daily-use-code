一、meta标签相关知识
1、移动端页面设置视口宽度等于设备宽度，并禁止缩放。
1
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
2、移动端页面设置视口宽度等于定宽（如640px），并禁止缩放，常用于微信浏览器页面。
1
<meta name="viewport" content="width=640,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
3、禁止将页面中的数字识别为电话号码
1
<meta name="format-detection" content="telephone=no" />
4、忽略Android平台中对邮箱地址的识别
1
<meta name="format-detection" content="email=no" />
5、当网站添加到主屏幕快速启动方式，可隐藏地址栏，仅针对ios的safari
1
2
<meta name="apple-mobile-web-app-capable" content="yes" />
<!-- ios7.0版本以后，safari上已看不到效果 -->
6、将网站添加到主屏幕快速启动方式，仅针对ios的safari顶端状态条的样式
1
2
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<!-- 可选default、black、black-translucent -->
viewport莫板
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="telephone=no" name="format-detection">
<meta content="email=no" name="format-detection">
<title>title</title>
<link rel="stylesheet" href="index.css">
</head>

<body>
content...
</body>

</html>
二、CSS样式技巧
1、禁止ios和android用户选中文字
1
.css{-webkit-user-select:none}
2、禁止ios长按时触发系统的菜单，禁止ios&android长按时下载图片
1
.css{-webkit-touch-callout: none}
3、webkit去除表单元素的默认样式
1
.css{-webkit-appearance:none;}
4、修改webkit表单输入框placeholder的样式
1
2
input::-webkit-input-placeholder{color:#AAAAAA;}
input:focus::-webkit-input-placeholder{color:#EEEEEE;}
5、去除android a/button/input标签被点击时产生的边框 & 去除ios a标签被点击时产生的半透明灰色背景
1
a,button,input{-webkit-tap-highlight-color:rgba(255,0,0,0);}
6、ios使用-webkit-text-size-adjust禁止调整字体大小
1
body{-webkit-text-size-adjust: 100%!important;}
7、android 上去掉语音输入按钮
1
input::-webkit-input-speech-button {display: none}
8、移动端定义字体，移动端没有微软雅黑字体
1
2
/* 移动端定义字体的代码 */
body{font-family:Helvetica;}
9、禁用Webkit内核浏览器的文字大小调整功能。
1
-webkit-text-size-adjust: none;
三、其他技巧
1、手机拍照和上传图片
1
2
3
4
<!-- 选择照片 -->
<input type=file accept="image/*">
<!-- 选择视频 -->
<input type=file accept="video/*">
2、取消input在ios下，输入的时候英文首字母的默认大写
1
<input autocapitalize="off" autocorrect="off" />
3、打电话和发短信
1
2
<a href="tel:0755-10086">打电话给:0755-10086</a>
<a href="sms:10086">发短信给: 10086</a>