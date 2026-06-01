import { test, expect } from '@playwright/test';
import { BASE_URL } from '../utils/apiClient';


test.describe('Negative API Tests', () => {

    /**
     * Test Objective:
     * Verify API behavior when requesting a product ID
     * that does not exist.
     *
     * Note:
     * FakeStore API returns HTTP 200 with an empty string
     * instead of 404 Not Found.
     */
    test('GET product with invalid ID', async ({ request }) => {
        const response = await request.get(
            `${BASE_URL}/products/999999`
        );

        expect(response.status()).toBe(200);

        const body = await response.text();

        expect(body).toBe('');
    });

});