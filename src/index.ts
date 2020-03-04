import { config } from 'dotenv';

import App from './app';

async function main(): Promise<void> {
    config();

    const app = new App(process.env.PORT);
    await app.listen();
}

main();