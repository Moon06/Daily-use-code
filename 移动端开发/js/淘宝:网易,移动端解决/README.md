

TB文件是淘宝所用方案,它的做页面的思路是：拿到设计图，比如iPhone6的设计图，我们就将浏览器设置到iPhone6设备调试，然后使用js动态修改meta标签，使布局视口的尺寸等于设计图尺寸，也就是设备像素尺寸，然后使用rem替代px做尺寸代为，使得页面在不同设备中等比缩放。


WY文件是网易所用方案,它做页面的思路是: 1、拿到设计图，计算出页面的总宽，为了好计算，取100px的font-size，如果设计图是iPhone6的那么计算出的就是7.5rem，如果页面是iPhone5的那么计算出的结果就是6.4rem。

                                 2、动态设置html标签的font-size值：
                                   document.documentElement.style.fontSize = document.documentElement.clientWidth / 以rem为单位的页面总宽 + 'px';

                                如iPhone6的设计图就是：

                                        document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
                                iPhone5的设计图就是：

                                        document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';


                                3、 做页面是测量设计图的px尺寸除以100得到rem尺寸。

                                4、和淘宝的做法一样，文字字体大小不要使用rem换算。
