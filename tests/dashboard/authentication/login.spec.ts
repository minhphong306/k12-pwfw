import { test, expect } from '@playwright/test';
import { AuthenticationPage } from '../../../pom/dashboard/authentication.page';
import { getPOM } from '../../../pom/pom-manager';
import * as fs from 'fs';
import { readJsonFile } from '../../../utils/json.utils';

let loginPage: AuthenticationPage;

test.beforeEach(async ({ page }) => {
    loginPage = new AuthenticationPage(page);
});

// POM manager
// Singleton pattern


test('test error message shown on login failure', async ({ page }) => {
    // // read data from json
    // // Đường dẫn đến file JSON
    // const jsonData = readJsonFile('path/to/file');

    // // data driven
    // for (const item of jsonData.accounts) {
    //     await loginPage.login(item.username, item.password);

    //     if (item.is_success) {
    //         // validate success message shown
            
    //     } else {
    //         // validate error message shown
    //         const errMsgLoc = loginPage.page.locator(loginPage.xpathErrorMessage);
    //         await expect(errMsgLoc).toBeVisible();
    //     }

    // }
    // for (list data) 
    // login
    // if is_success = true => validate success message
    // if is_success = false => validate error message

    console.log("Hello 1");
})