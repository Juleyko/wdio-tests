class ConfirmationPage {
    get pageHeader() {
        return $('#hero-section-brand-heading')
    }

    async checkPageHeaderText(text) {
        await browser.waitUntil(async () => {
            return this.pageHeader.isDisplayed()
        })

        expect(this.pageHeader).toHaveText(text)
    }
}

export default new ConfirmationPage()