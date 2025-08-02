import { test } from '@playwright/test';


test.beforeEach(async () => {
    console.log('Test changes');
})
test('test 1', async ({ page }) => {

})