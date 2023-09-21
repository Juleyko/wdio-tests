class SignupPage {
    get emailInput() {
        return $('#email');
    }

    get passwordInput() {
        return $('#password');
    }

    get usernameInput() {
        return $('#login');
    }

    get productUpdatesInput() {
        return $('#opt_in');
    }

    async openPage() {
        await this.openUrl(this._pageUrl);
    }

    async focusFieldAndEnterValue({ field, value }) {
        await browser.waitUntil(async () => {
            return field.isDisplayed();
        });

        if (!(await field.isFocused)) {
            await field.click()
        }

        await field.setValue(value);
    }

    async submitField(button) {
        await browser.waitUntil(async () => {
            return button.isClickable();
        })

        await button.click()
    }

    async submitEmail(value) {
        const field = await this.emailInput;

        await this.focusFieldAndEnterValue({ field, value });

        const continueButton = await $('#email-container button.signup-continue-button');

        await this.submitField(continueButton)
    }

    async submitPassword(value) {
        const field = await this.passwordInput;

        await this.focusFieldAndEnterValue({ field, value });

        const continueButton = await $('#password-container .signup-continue-button');

        await this.submitField(continueButton)
    }

    async submitUsername(value) {
        const field = await this.usernameInput;

        await this.focusFieldAndEnterValue({ field, value });

        const continueButton = await $('#username-container .signup-continue-button');

        await this.submitField(continueButton)
    }

    async submitProductUpdates(value) {
        const field = await this.productUpdatesInput;

        await this.focusFieldAndEnterValue({ field, value });

        const continueButton = await $('#opt-in-container .signup-continue-button');

        await this.submitField(continueButton)
    }
}

export default new SignupPage()