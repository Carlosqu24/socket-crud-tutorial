import express from 'express'
const app = express();
import path from 'path';
import { PORT } from './config.js';

import { connectDB } from './db.js';

import { Server as WebsocketServer } from 'socket.io';
import http from 'http';
import Sockets from './sockets'

connectDB();

app.use(express.static(path.join(__dirname + '/public')));

const server = http.createServer(app);
const httpServer = server.listen(PORT);
const io = new WebsocketServer(httpServer);

Sockets(io)

console.log('http://localhost:' + PORT);