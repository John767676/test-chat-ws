import {WebSocketServer} from 'ws'

const wss = new WebSocketServer({host: 'wss://https://test-chat-ws.vercel.app/'})

wss.on('connection',client => {
    client.on('message', (message,isBinary) => {
        [...wss.clients].filter(c => c!== client).forEach(c => c.send(isBinary ? message.toString() : message))
    })
})