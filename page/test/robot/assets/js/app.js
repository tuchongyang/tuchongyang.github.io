var sources = new Sources();
var user = {
    name:'',
    avatar:''
} 

init();

function init(){
    var initLi = '<li>\
        <div class="avatar"><span class="img"><img src="assets/images/Aladdin_lamp.gif"></span></div>\
        <!--<div class="name">阿拉丁</div>-->\
        <div class="det">你好，我是阿拉丁智能客服!</div>\
    </li>';
    $('.chat-thread').append(initLi);
}
function anwser(text){
    var s = sources.getData(),result = "暂时还不能帮到你哦！试试别的问题吧！";

    var BreakException = {};
    try {
        s.forEach(function(item,i){
            var pass = true;
            item.keywords.forEach(function(key,j){
                var keys = key.split(',');
                var pass_keys = true;
                for(var n = 0;n<keys.length;n++){
                    if(text.indexOf(keys[n]) <= -1){
                        pass_keys = false;
                    }
                }
                if(pass_keys){
                    var n = parseInt(Math.random()*item.anwsers.length);
                    result = item.anwsers[n]; throw BreakException;
                }
            })
        })
    }catch(e){console.log(e)
        if (e !== BreakException) throw e;
        console.log(result)
    }


    var initLi = '<li>\
        <div class="avatar"><span class="img"><img src="assets/images/Aladdin_lamp.gif"></span></div>\
        <!--<div class="name">阿拉丁</div>-->\
        <div class="det">'+result+'</div>\
    </li>';
    $('.chat-thread').append(initLi);
   
        $('.chat-thread').stop(false,true).animate({scrollTop: $('.chat-thread')[0].scrollHeight+"px"},300);
    
    

}
function getAnwser(text){

}

function send(){
    var msg = $("#message").val();
    if($.trim(msg) == ""){
        return;
    }
    var strObj = {
        chart:{
            name: user.name,
            avatar: user.avatar,
            content: msg.replace(/\r/g,'&').replace(/\n/g,'<br />')
        }
    };


    //新消息
    var str = '<li class="my">\
                <div class="avatar"><span class="img"><img src="'+strObj.chart.avatar+'"></span></div>\
                <!--<div class="name">'+strObj.chart.name+'</div>-->\
                <div class="det">'+strObj.chart.content+'</div>\
            </li>'
    $('.chat-thread').append(str);
    $("#message").val("");


    anwser(msg);
}


$(function(){
	$(".chart-popup").dragable({
		handle: $('.chart-popup .head')
	});
})
function initMobile(){
    $(".chart-popup").css({
        'width': $(window).width()*.9,
        'height': $(window).height()*.9
    })
}
(function(){var ua=navigator.userAgent.toLowerCase();var bIsIpad=ua.match(/ipad/i)=="ipad";var bIsIphoneOs=ua.match(/iphone os/i)=="iphone os";var bIsAndroid=ua.match(/android/i)=="android";var bIsWM=ua.match(/windows mobile/i)=="windows mobile";if(bIsIpad||bIsIphoneOs||bIsAndroid||bIsWM){initMobile()}})();