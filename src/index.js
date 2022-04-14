import express from 'express'
const app = express();
import path from 'path';

import { Server as WebsocketServer } from 'socket.io';
import http from 'http';


app.set('port', process.env.PORT || 3500);

app.use(express.static(path.join(__dirname + 'public')));

const server = http.createServer(app);
const httpServer = server.listen(app.get('port'));
const io = new WebsocketServer(httpServer);

console.log('http://localhost:' + app.get('port'));