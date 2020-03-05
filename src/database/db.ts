import { createPool, Pool } from 'mysql2/promise';

/**
 * Se deben poner sus conexiónes
 * dependiendo de la configuración en MySQL
 */
export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: process.env.DB_HOST_DEV,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectionLimit: 10
    });

    return connection;
}