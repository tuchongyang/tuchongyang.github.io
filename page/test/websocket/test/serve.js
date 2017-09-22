var WebSocketServer = require('ws').Server,  
    wss = new WebSocketServer({  
        port: 3000, //监听接口  
        verifyClient: socketVerify //可选，验证连接函数  
    });  
  
function socketVerify(info) {
    return true; //否则拒绝  
}  

var number = 260;
//广播  
wss.broadcast = function broadcast(n) {
    wss.clients.forEach(function each(client) {
       	client.send(n);
    });  
};  
// 初始化  
wss.on('connection', function(ws) {
	ws.on('message', function(n,flags) {  
    	number += parseInt(n);
    	wss.broadcast(number);  
    });
    
});