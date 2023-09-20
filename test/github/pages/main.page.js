class MainPage {
    constructor() {
        this._pageUrl = 'https://github.com';
    }

    get signupButton() {
        return $('.HeaderMenu-link--sign-up')
    }

    get signupBlock() {
        return $('#security + div .river-mktg')
    }

    get header() {
        return this.signupBlock.$('h2')
    }

    get enterpriseTrialButton() {
        return this.signupBlock.$('.btn-mktg.btn-large-mktg.btn-muted-mktg')
    }

    get subscribeButton() {
        return $('#subscribe-to-newsletter + p + a')
    }

    get openSearchButton() {
        return $('.header-search-button')
    }

    get searchInput() {
        return $('#query-builder-test')
    }

    get pricingButton() {
        return $('nav > ul > .HeaderMenu-item:nth-of-type(4)')
    }

    async openPage() {
        await browser.url(this._pageUrl);
    }

    async clickOnSignUpBtn() {
        await this.signupButton.waitUntil(async () => {
            return this.signupButton.isClickable()
        })

        await this.signupButton.click()
    }

    async scrollToSignupBlock() {
        await this.signupBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    async checkDoesHeaderExist() {
        await expect(this.header).toHaveText('The place for anyone from anywhere to build anything')
    }

    async checkDoesEnterpriseTrialButtonIsVisible() {
        await expect(this.enterpriseTrialButton).toBeDisplayed()
    }

    async clickOnEnterpriseTrialButton() {
        await this.enterpriseTrialButton.click();
    }

    async checkDoesSubscribeButtonExists() {
        await expect(this.subscribeButton).toBeExisting()
    }

    async scrollToSubscribeButton() {
        await this.subscribeButton.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    async clickOnSubscribeButton() {
        await browser.waitUntil(async () => {
            return this.subscribeButton.isDisplayed()
        })

        await this.subscribeButton.click()
    }

    async clickOnSearchButton() {
        await browser.waitUntil(async () => {
            return this.openSearchButton.isClickable()
        })

        this.openSearchButton.click();
    }

    async searchByTerm(term) {
        await browser.waitUntil(async () => {
            return this.searchInput.isDisplayed()
        })

        await this.searchInput.click();
        await this.searchInput.setValue(term);
        await browser.keys(['Enter'])
    }

    async clickOnPricingButton() {
        await browser.waitUntil(async () => {
            return this.pricingButton.isClickable()
        })

        this.pricingButton.click();
    }
}

export default new MainPage()