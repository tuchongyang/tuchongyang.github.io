var ws = new WebSocket("ws://192.168.1.29:3000?t=test"); 
var user = {
	name:'',
	avatar:''
} 
ws.onopen = function() { 
    console.log("连接状态", ws);  
    var state = ws.readyState==0?'未连接':ws.readyState==1?'已连接':ws.readyState==2?'正在关闭':ws.readyState==3?'已关闭':false;
    $(".head .state").html('连接状态: <span class="readyState-'+ws.readyState+'">' + state+'</span>');  
    var initLi = '<li>\
        <div class="avatar"><span class="img"><img src="http://www.yunye123.com:8000/static/other/dosing/2017year/dsimg/heros/诸葛亮.png"></span></div>\
        <!--<div class="name">诸葛亮</div>-->\
        <div class="det">你好，欢迎来到涂重阳的聊天室!</div>\
    </li>';
    $('.chat-thread').append(initLi);
};  
ws.onmessage = function(evt) { 
    console.log(evt.data) 
    var data = JSON.parse(evt.data);

    if(data.clients){
        $('.head .clients').html('聊天人数:'+data.clients);
    }
    if(data.chart){
    	var className = "";
    	if(data.chart.ip == user.ip){
    		className = "my";
    	}
    	if(data.chart.timestemp && $("#chart_"+data.chart.timestemp).find('.post_status').length > 0){
    		$("#chart_"+data.chart.timestemp).find('.post_status').remove();
    	}
        
    }
    if(data.ip){
    	user.ip = data.ip;
    } 
    $('.chat-thread').stop(false,true).animate({scrollTop:$('.chat-thread').scrollTop() + 60 + "px"},300)
};  
ws.onclose = function(evt) {  
    console.log("WebSocketClosed!");  
    console.log(evt);
    $(".head .state").html('连接状态: <span class="readyState-0">未连接</span>');  
};  
ws.onerror = function(evt) {  
    console.log("WebSocketError!");  
};  

document.getElementById("submit").onclick = function(){
	var msg = $("#message").val();
	if($.trim(msg) == ""){
		return;
	}
	send(msg);
	$("#message").val("");
};
function send(msg,charEle) {  
    var timestemp = (new Date()).getTime();
    //封装数据
    var strObj = {
        chart:{
        	name: user.name,
        	avatar: user.avatar,
            content: msg.replace(/\r/g,'&').replace(/\n/g,'<br />'),
            ip:user.ip,
            timestemp: timestemp
        }
    }; 
    var str = JSON.stringify(strObj);
    ws.send(str);

    //处理页面显示
    if(charEle){
    	//重新发送的消息
    	charEle.find('.post_status').removeClass('error').addClass('loading').attr('title','发送中...');
    	charEle.find('.post_status').off('click');
    }else{
    	//新消息
	    var str = '<li class="my" id="chart_'+strObj.chart.timestemp+'">\
	                <div class="avatar"><span class="img"><img src="'+strObj.chart.avatar+'"></span></div>\
	                <!--<div class="name">'+strObj.chart.name+'</div>-->\
	                <div class="det">'+strObj.chart.content+'</div>\
	                <a class="post_status loading" title="发送中..." href="javascript:;"></a>\
	            </li>'
	    $('.chat-thread').append(str);
    }
    

    if(!charEle){
    	charEle =  $('#chart_'+strObj.chart.timestemp);
    }

    var t = setTimeout(function(){

    	if(charEle.find('.post_status').length > 0){
    		charEle.find('.post_status').removeClass('loading').addClass('error').attr('title','重试');
    		charEle.find('.post_status').off('click').on('click',function(){
    			send(charEle.find('.det').html(),charEle)
    		})
    	}
    },3000)
};  
  
function exit() {  
    var r = ws.close();  
    console.log("退出", r);  
}  


$(function(){
	$(".chart-popup").dragable({
		handle: $('.chart-popup .head')
	});
})