import mysql from 'mysql2/promise';

/**
 * Creates a connection to the MySQL Docker container.
 */
export async function getConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'qa_testing'
    });
}