const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    console.log(`[SERVER] connection()`);

    ws.on('message', message => {
        console.log(`[SERVER] Received: ${message}`);

        ws.send(`ECHO: ${message}`, err => {
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        });
    });
});