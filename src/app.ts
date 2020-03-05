import express, { Application } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import indexRoutes from './routes/index.routes';
import postsRoutes from './routes/posts.routes';

export default class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.config();
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.app.use(morgan('dev'));

        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());

        this.app.disable('x-powered-by');
        this.app.use(helmet());
    }

    private config(): void {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/posts', postsRoutes);
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log(`Server on port ${this.app.get('port')}`);
    }

}
