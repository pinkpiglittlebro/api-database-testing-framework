import { test, expect } from '@playwright/test';
import { getConnection } from '../database/dbClient';

test.describe('Database Validation', () => {

    /**
     * Test Objective:
     * Verify that seeded user data exists in the MySQL database.
     */
    test('Verify seeded user exists in database', async () => {
        const connection = await getConnection();

        const [rows]: any = await connection.execute(
            'SELECT * FROM users WHERE username = ?',
            ['testuser']
        );

        await connection.end();

        expect(rows.length).toBeGreaterThan(0);
        expect(rows[0].email).toBe('test@example.com');
    });

});