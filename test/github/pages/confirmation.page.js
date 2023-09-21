import { Page } from "./Page.js"

class ConfirmationPage extends Page {
    get pageHeader() {
        return $('#hero-section-brand-heading')
    }

    async checkPageHeaderText(text) {
        await browser.waitUntil(async () => {
            return this.pageHeader.isDisplayed()
        })

        await this.checkElementText(this.pageHeader, text);
    }
}

export default new ConfirmationPage()