import { createServer } from 'node:http';
import { connectDB } from './db.js';

connectDB();

const server = createServer(async (_req, res) => {
    res.write('Hello world');
    return res.end();
});

server.on('listening', () => console.log('App running'));
server.on('error', () => process.exit(1));

server.listen(3333);
