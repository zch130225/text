const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', ws => {
    console.log(`[SERVER] connection()`);

    ws.on('message', message => {
        console.log(`[SERVER] Received: ${message}`);
         data= `${message}`;
        ws.send(`ECHO: ${message}`, err => {
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        });
        wss.clients.forEach(function each(client) {
                  // 如果连接状态是打开状态,且不是当前客户端对象
                  if (client !== ws && client.readyState === WebSocket.OPEN) {
                    // 发送消息
                    client.send( data);
                  }
                });
    });
});

