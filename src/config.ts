import * as dotenv from 'dotenv';

import * as process from 'node:process'

dotenv.config();

export const TURSO_CONNECTION_URL = process.env.TURSO_CONNECTION_URL!;
export const TURSO_AUTH_TOKEN = process.env.TURSO_AUTH_TOKEN!;