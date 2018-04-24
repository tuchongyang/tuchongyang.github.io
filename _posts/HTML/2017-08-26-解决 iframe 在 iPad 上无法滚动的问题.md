---
layout : post
title : "解决 iframe 在 iPad 上无法滚动的问题"
category : HTML
date : 2017-08-24
---


<!-- more -->

昨天用iframe模拟原生应用的webview功能，嵌套一个网址或本地HTML，今天通过测试，在ipad会出现页面无法滚动的问题。iframe的宽高都为屏幕的宽和高，设置属性scrolling=‘auto’，以及样式overflow: auto都没用，而且iframe元素不支持touch事件，在iframe嵌套的网页内部用js实现滚动也不现实。



怎么让ipad safari 中的iframe的内容在固定大小中可滚动？ 

网上说要用seamless属性。直接写个seamless。但是这个属性ipad的safari不支持。chrome是支持的。 

>IE6 – Windows: no support 
IE7 – Windows: no support 
IE8 – Windows – Windows: no support 
IE9 beta – Windows: no support 
Firefox 3.6 – Windows: no support 
Firefox 3.6 – OSX: no support 
Firefox 4.0 – beta Windows: no support 
Firefox 4.0 – beta OSX: no support 
Safari OSX: no support 
Chrome 7 – Windows: no support 
Chrome 7 – Windows: no support 
Chrome 9 – OSX: no support 
Opera 11 – OSX: no support 

测试例子： 
http://www.maxdesign.com.au/jobs/example-seamless/ 

以上方法都无法解决ipad safari中iframe滚动的问题。

**解决方法：** 

在iframe外加一层div，设置样式

    -webkit-overflow-scrolling:touch; overflow: scroll; 
    
让超出div的内容可以通过touch来滚动。

[了解更多-webkit-overflow-scrolling](http://blog.csdn.net/tcy9099/article/details/77529493)

另外，如果iframe的src不是网址，而是本地的html，则需要给HTML的DOM添加监听事件，让html的body可以监听到touch事件，让嵌套的html也可以滚动。
js代码：

	var toScrollFrame = function(iFrame, mask) {
		if (!navigator.userAgent.match(/iPad|iPhone/i)){
			return false;
		}
		//do nothing if not iOS devie

		var mouseY = 0;
		var mouseX = 0;
		jQuery(iFrame).ready(function() {//wait for iFrame to load
			//remeber initial drag motition
			jQuery(iFrame).contents()[0].body.addEventListener('touchstart', function(e) {
				mouseY = e.targetTouches[0].pageY;
				mouseX = e.targetTouches[0].pageX;
			});

			//update scroll position based on initial drag position
			jQuery(iFrame).contents()[0].body.addEventListener('touchmove', function(e) {
				e.preventDefault();
				//prevent whole page dragging

				var box = jQuery(mask);
				box.scrollLeft(box.scrollLeft() + mouseX - e.targetTouches[0].pageX);
				box.scrollTop(box.scrollTop() + mouseY - e.targetTouches[0].pageY);
				//mouseX and mouseY don't need periodic updating, because the current position
				//of the mouse relative to th iFrame changes as the mask scrolls it.
			});
		});

		return true;
	};

	toScrollFrame('.myFrame', '.myMask'); 

html部分代码 

	<!DOCTYPE html>
	<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<title>wrapScroller demo</title>
		<link rel="stylesheet" href="../style/wrapScroller.css" type="text/css" media="screen" />
		<script type="text/javascript" src="../jquery-1.8.0.min.js"></script>
		<script type="text/javascript">
			
		</script>
	</head>
	<body style="background: #ccc;">
		<div>
			HEADER - use 2 fingers to scroll contents:
		</div>
		<div id="scrollee" style="width:300px;height:300px;-webkit-overflow-scrolling:touch; overflow: scroll;">
			<iframe id="object" height="90%" width="100%" type="text/html" src="http://en.wikipedia.org/"></iframe>
		</div>
	</body>
</html>

