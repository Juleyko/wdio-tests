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
        await this.checkElementText(this.compareFeaturesHeader, text)
    }

    async checkHeaderText(text) {
        await this.checkElementText(this.pageHeader, text)
    }

    async scrollToCompareAllFeaturesButton() {
        await this.scrollToElement(this.compareAllFeaturesButton)
    }

    async clickOnCompareAllFeaturesButton() {
        await this.waitForClickableAndClick(this.compareAllFeaturesButton)
    }
}

export default new PricingPage()