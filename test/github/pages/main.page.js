import { Page } from "./Page.js";

class MainPage extends Page {
    constructor() {
        super();
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
        await this.openUrl(this._pageUrl)
    }

    async clickOnSignUpBtn() {
        await this.waitForClickableAndClick(this.signupButton)
    }

    async scrollToSignupBlock() {
        await this.scrollToElement(this.signupBlock)
    }

    async checkHeaderText(text) {
        await this.checkElementText(this.header, text)
    }

    async checkDoesEnterpriseTrialButtonIsVisible() {
        await expect(this.enterpriseTrialButton).toBeDisplayed()
    }

    async clickOnEnterpriseTrialButton() {
        await this.waitForClickableAndClick(this.enterpriseTrialButton);
    }

    async checkDoesSubscribeButtonExists() {
        await expect(this.subscribeButton).toBeExisting()
    }

    async scrollToSubscribeButton() {
        await this.scrollToElement(this.subscribeButton)
    }

    async clickOnSubscribeButton() {
        await this.waitForClickableAndClick(this.subscribeButton)
    }

    async clickOnSearchButton() {
        await this.waitForClickableAndClick(this.openSearchButton)
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
        await this.waitForClickableAndClick(this.pricingButton)
    }
}

export default new MainPage()