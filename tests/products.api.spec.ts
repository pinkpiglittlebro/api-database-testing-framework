import { test, expect } from '@playwright/test';
import { BASE_URL } from '../utils/apiClient';
import { testProduct } from '../test-data/products';



test.describe('Products API', () => {
    /**
     * Test Objective:
     * Verify that the Products API returns a 200 response
     * and contains at least one product.
     */
    test('GET all products', async ({ request }) => {
        const response = await request.get(
            `${BASE_URL}/products`
        );

        expect(response.status()).toBe(200);

        const products = await response.json();

        expect(products.length).toBeGreaterThan(0);
    });

    /**
     * Test Objective:
     * Verify that a specific product can be retrieved
     * and the returned product ID matches the requested ID.
     */
    test('GET single product', async ({ request }) => {
        const response = await request.get(
            `${BASE_URL}/products/1`
        );

        expect(response.status()).toBe(200);

        const product = await response.json();

        expect(product.id).toBe(1);
        expect(product.title).toBeTruthy();
        expect(product.price).toBeGreaterThan(0);
    });

     /**
     * Test Objective:
     * Verify that a new product can be created successfully
     * through the Products API.
     */
    test('POST new product', async ({ request }) => {
        const response = await request.post(
            `${BASE_URL}/products`,
            {
                data: testProduct
            }
        );


    // Successful resource creation should return HTTP 201 Created.
    expect(response.status()).toBe(201);

    const product = await response.json();

    expect(product.title).toBe(testProduct.title);
    expect(product.price).toBe(testProduct.price);
    });

    /**
     * Test Objective:
     * Verify that an existing product can be updated.
     */
    test('PUT update product', async ({ request }) => {
        const response = await request.put(
            `${BASE_URL}/products/1`,
            {
                data: {
                    title: 'Updated Product'
                }
            }
        );

        expect(response.status()).toBe(200);

        const product = await response.json();

        expect(product.title).toBe('Updated Product');
    });


    /**
     * Test Objective:
     * Verify that a product can be deleted.
     */
    test('DELETE product', async ({ request }) => {
        const response = await request.delete(
            `${BASE_URL}/products/1`
        );

        expect(response.status()).toBe(200);
    });


});