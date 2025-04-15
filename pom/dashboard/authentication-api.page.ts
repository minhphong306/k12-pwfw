import { Page } from '@playwright/test';

export class AuthenticationPage {
    page: Page;

    // xpath
    xpathUsername = '';
    xpathPassword = '';
    xpathRememberme = '';
    xpathErrorMessage = '';

    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string) {
        await this.page.fill(this.xpathUsername, 'admin_abc');
        await this.page.fill(this.xpathPassword, '123');
    }
}