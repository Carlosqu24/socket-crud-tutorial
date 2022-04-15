import { config } from 'dotenv';
config();

export const PORT = process.env.PORT || 3500;
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/websockets-tutorial'