import { Page } from "./Page.js"

class PricingPage extends Page {
    get pageHeader() {
        return $('.application-main > main > div h1')
    }

    get compareFeaturesHeader() {
        return $('.js-compare-features-item h1')
    }

    get compareAllFeaturesButton() {
        return $('a[href="#compare-features"]')
    }

    async checkCompareFeaturesHeaderText(text) {
        // expect(this.pageHeader).toHaveText(text)
        await this.checkElementText(this.compareFeaturesHeader, text)
    }

    async checkHeaderText(text) {
        // expect(this.pageHeader).toHaveText(text)
        await this.checkElementText(this.pageHeader, text)
    }

    async scrollToCompareAllFeaturesButton() {
        // await this.compareAllFeaturesButton.scrollIntoView({ behavior: 'smooth', block: 'center' })
        await this.scrollToElement(this.compareAllFeaturesButton)
    }

    async clickOnCompareAllFeaturesButton() {
        await browser.waitUntil(async () => {
            return this.compareAllFeaturesButton.isClickable()
        })

        await this.compareAllFeaturesButton.click();
    }
}

export default new PricingPage()