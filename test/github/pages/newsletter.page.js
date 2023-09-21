import { Page } from "./Page.js"

class NewsletterPage extends Page {
    constructor() {
        super()
        this.pageUrl = 'https://resources.github.com/newsletter/'
    }

    get pageHeader() {
        return $('#hero-section-brand-heading')
    }

    get subscriptionForm() {
        return $('#form')
    }

    get emailInput() {
        return this.subscriptionForm.$('input[name="emailAddress"]')
    }

    get countrySelect() {
        return this.subscriptionForm.$('#country')
    }

    get ukraineCountryOption() {
        return this.countrySelect.$('option[value="UA"]')
    }

    get marketingAgreementCheckbox() {
        return this.subscriptionForm.$('#gated-agree-marketingEmailOptin1')
    }

    get subcribeButton() {
        return this.subscriptionForm.$('button[type="submit"]')
    }

    async isNewslatterPage() {
        await expect(browser).toHaveUrl(this.pageUrl)
    }

    async checkHeaderText(text) {
        // expect(this.pageHeader).toHaveText(text)
        await this.checkElementText(this.pageHeader, text)
    }

    async setEmail(email) {
        this.emailInput.setValue(email);
    }

    async selectCountry() {
        await this.countrySelect.click();

        await browser.waitUntil(async () => {
            return this.ukraineCountryOption.isDisplayed()
        })

        await this.ukraineCountryOption.click()
    }

    async checkMarketingAgreementCheckbox() {
        this.marketingAgreementCheckbox.click();
    }

    async clickSubscribeButton() {
        this.subcribeButton.click();
    }
}

export default new NewsletterPage()