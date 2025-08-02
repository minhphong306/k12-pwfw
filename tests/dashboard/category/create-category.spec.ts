import { test, expect } from '@playwright/test';


test.beforeEach(async () => {
    console.log('Test changes');
})

test('test 1', async ({ page }) => {
    console.log("Running test 1");
    expect(1).toEqual(1);
})