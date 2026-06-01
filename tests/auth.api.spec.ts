import { test, expect } from '@playwright/test';
import { BASE_URL } from '../utils/apiClient';

test.describe('Authentication API', () => {

    /**
     * Test Objective:
     * Verify that a user can successfully authenticate
     * and receive an access token.
     */
    test('Login with valid credentials', async ({ request }) => {

        const response = await request.post(
            `${BASE_URL}/auth/login`,
            {
                data: {
                    username: 'mor_2314',
                    password: '83r5^_'
                }
            }
        );

        expect(response.status()).toBe(201);

        const body = await response.json();

        expect(body.token).toBeTruthy();
    });

});