import express from 'express'
const app = express();
import path from 'path';
import { PORT } from './config.js';

import { connectDB } from './db.js';

import { Server as WebsocketServer } from 'socket.io';
import http from 'http';

connectDB();

app.use(express.static(path.join(__dirname + '/public')));

const server = http.createServer(app);
const httpServer = server.listen(PORT);
const io = new WebsocketServer(httpServer);

console.log('http://localhost:' + PORT);