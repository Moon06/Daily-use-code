

TB文件是淘宝所用方案,它的做页面的思路是：
    拿到设计图，比如iPhone6的设计图，我们就将浏览器设置到iPhone6设备调试，然后使用js动态修改meta标签，使布局视口的尺寸等于设计图尺寸，也就是设备像素尺寸，然后使用rem替代px做尺寸代为，使得页面在不同设备中等比缩放。


WY文件是网易所用方案,它做页面的思路是: 

1、拿到设计图，计算出页面的总宽，为了好计算，取100px的font-size，如果设计图是iPhone6的那么计算出的就是7.5rem，如果页面是iPhone5的那么计算出的结果就是6.4rem。

2、动态设置html标签的font-size值：
document.documentElement.style.fontSize = document.documentElement.clientWidth / 以rem为单位的页面总宽 + 'px';

    如iPhone6的设计图就是：

        document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
                                
    iPhone5的设计图就是：

        document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';


3、 做页面是测量设计图的px尺寸除以100得到rem尺寸。

4、和淘宝的做法一样，文字字体大小不要使用rem换算。


-----------


无论是第一种做法还是第二种做法，我们都提到了，文字字体大小是不要换算成rem做单位的，而是使用媒体查询来进行动态设置，比如下面的代码就是网易的代码：

代码片段一：

@media screen and (max-width: 321px) {
body {
font-size:16px
}
}

@media screen and (min-width: 321px) and (max-width:400px) {
body {
font-size:17px
}
}

@media screen and (min-width: 400px) {
body {
font-size:19px
}
}


代码片段二：

@media screen and (max-width: 321px) {
header,footer {
font-size:16px
}
}

@media screen and (min-width: 321px) and (max-width:400px) {
header,footer {
font-size:17px
}
}

@media screen and (min-width: 400px) {
header,footer {
font-size:19px
}
}
我们总结一下网易在文字字体大小上的做法，在媒体查询阶段，分为三个等级分别是：
321px以下
321px - 400px之间
400px以上
具体文字大小要多少个像素这个以设计图为准，但是这三个等级之间是有规律的，仔细观察发现，321px以下的屏幕字体大小比321px - 400px之间的屏幕字体大小要小一个像素，而321px - 400px之间的屏幕字体大小要比400以上屏幕字体大小要小2个像素。依照这个规律，我们根据设计图所在的像素区段先写好该区段的字体大小，然后分别写出另外两个区段的字体大小媒体查询代码就可以了。