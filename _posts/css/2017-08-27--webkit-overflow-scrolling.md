---
layout: post
title:  -webkit-overflow-scrolling
category: css
date: 2017-08-27
---


<!-- more -->

**概述**
====

-webkit-overflow-scrolling 属性控制元素在移动设备上是否使用滚动回弹效果.


**值**
-----

auto
使用普通滚动, 当手指从触摸屏上移开，滚动会立即停止。
touch
使用具有回弹效果的滚动, 当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比。同时也会创建一个新的堆栈上下文。

**示例**
-----

	-webkit-overflow-scrolling: touch; /* 当手指从触摸屏上移开，会保持一段时间的滚动 */

	-webkit-overflow-scrolling: auto; /* 当手指从触摸屏上移开，滚动会立即停止 */

**规范**
-----

尚未有相关规范。另在Apple提供的Safari CSS 参考文档中有所提及。

**浏览器兼容性**
-----

Desktop Mobile

<table>
	<thead>
		<tr>
			<td>Feature</td><td>Chrome	</td><td>Firefox (Gecko)</td><td>Internet Explorer</td><td>Opera</td><td>Safari (WebKit)</td>
	</tr>
    </thead>
    <tbody>
	    <tr>
	        <td>Basic support</td><td><font color=#ff9600>?</font></td><td><font color=#ff0000>未实现</font></td><td><font color=#ff9600>?</font></td><td><font color=#ff9600>?</font></td><td><font color=#ff9600>?</font></td>
	    </tr>
    </tbody>
</table>
---
<table>
	<thead>
		<tr>
			<td>Feature</td><td>Android</td><td>Firefox Mobile (Gecko)</td><td>IE Phone</td><td>Opera Mobile</td><td>Safari Mobile</td>
	</tr>
    </thead>
    <tbody>
	    <tr>
	        <td>Basic support</td><td><font color=#ff9600>?</font></td><td><font color=#ff0000>未实现</font></td><td><font color=#ff9600>?</font></td><td><font color=#ff9600>?</font></td><td><font color=#ff9600>5.0</font></td>
	    </tr>
    </tbody>
</table>
---

**相关链接：**
-----

* [CSS-Tricks article with demo ](http://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/)
* [-webkit-overflow-scrolling entry in Safari CSS Reference docs](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/css/property/-webkit-overflow-scrolling)

**参考：**
-----

* [MDN web docs](https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-overflow-scrolling)