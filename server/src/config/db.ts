import { createConnection } from 'typeorm';

export const db = async () => {
    const connection = await createConnection();
    console.log(`Connected to BD ${connection.options.database}`);

    process.on('SIGINT', () => {
        connection.close().then(() => console.log('Connection closed'));
    });
};