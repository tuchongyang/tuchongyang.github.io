;(function(){
	var source = [{
		"ques":"你叫什么名字",
		"keywords":["你叫什么","你,名字","你,姓名"],
		"anwsers":["我叫阿拉丁智能机器人!","你可以叫我阿拉丁大人","我是阿拉丁神灯的灯神！"]
	},{
		"ques":"你几岁了",
		"keywords":["你,几岁","你,多大","你,年龄","你,年纪"],
		"anwsers":["我一岁了哦","我从诞生到现在一个年头啦^^"]
	},{
		"ques":"你是什么性别",
		"keywords":["你,性别","你,男","你,女"],
		"anwsers":["你猜猜看！","这是个秘密--","就是不告诉你"]
	},{
		"ques":"你在哪里",
		"keywords":["你,哪里","你,哪儿","你,坐标"],
		"anwsers":["我在美国的洛杉矶！","就是不告诉你我在美国","坐标加尼福利亚州"]
	},{
		"ques":"天气",
		"keywords":["天气"],
		"anwsers":["这里可以查到哦。<a href='http://www.weather.com.cn/'>中国天气网</a>"]
	},{
		"ques":"创始人",
		"keywords":["创始人","CEO","老板"],
		"anwsers":["<p>操保华,美国华侨企业家，美国Alatting Inc.科技公司董事长兼执行总裁，武汉云页移动科技有限公司执行董事兼总经理。在人工智能和云计算领域有着十多年的科学研究和实战开发经验，师从于中国人工智能学会会长李德毅院士，中国云计算第一批专家，云计算领域畅销书《云计算实践之道》和《云计算宝典：技术与实践》作者。迄今为止，发表科学研究论文20多篇包括多篇ACM/IEEE国际论文，参与国家自然科学基金项目 2 项，发明科技专利20多项，以第一作者发明美国技术专利6项，参与千万美金级别的大型国际项目2项，包括IBM全球第一款云计算产品 IBM WebSphere Cloudburst以及美国南加州大学与美国国家航空航天局、加州能源部合作的智能网格“SMART GRID”项目。</p>"]
	},{
		"ques":"公司介绍",
		"keywords":["公司,介绍","你,做什么","你,干什么","公司,简介","企业,简介","企业,介绍"],
		"anwsers":["这里可以查到哦。<a href='http://www.weather.com.cn/'>中国天气网</a>"]
	}]
	function sources (){

		return {
			getData:function(){
				return source;
			}
		}
	}
	window.Sources = sources;
})()