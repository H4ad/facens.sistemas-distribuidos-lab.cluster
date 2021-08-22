//#region Imports

import { Connection, ConnectionOptions, createConnection } from 'typeorm';

//#endregion

/**
 * Método que cria a conexão com o banco de dados
 */
export async function getDatabaseConnection(): Promise<Connection> {
  const options: ConnectionOptions = {
    name: 'default',
    type: 'sqlite',
    database: process.env.DB_PATH,
    logger: 'advanced-console',
  }

  const connection = await createConnection(options);

  return connection;
}
