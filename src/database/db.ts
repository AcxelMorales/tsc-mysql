import { createPool, Pool } from 'mysql2';

/**
 * Se deben poner sus conexiónes
 * dependiendo de la configuración en MySQL
 */
export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'localhost',
        user: '',
        password: '',
        database: '',
        connectionLimit: 10
    });

    return connection;
}