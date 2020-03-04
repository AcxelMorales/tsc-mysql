import express, { Application } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

export default class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.config();
        this.middlewares();
    }

    private middlewares(): void {
        this.app.use(morgan('dev'));
        this.app.use(helmet());
    }

    private config(): void {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log(`Server on port ${this.app.get('port')}`);
    }

}
