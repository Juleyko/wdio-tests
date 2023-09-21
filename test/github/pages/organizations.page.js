import { Page } from "./Page.js"

class OrganizationsPage extends Page {
    get pageHeader() {
        return $('.application-main h1')
    }

    get enterpriseCloundLink() {
        return $('.application-main  a[href^="/account/enterprises/new"]')
    }

    async checkHeaderText(text) {
        // await expect(this.pageHeader).toHaveText('Pick your trial plan')
        await this.checkElementText(this.pageHeader, text)
    }

    async clickOnEnterpriseCloudLink() {
        await browser.waitUntil(async () => {
            return this.enterpriseCloundLink.isClickable()
        })

        await this.enterpriseCloundLink.click()
    }
}

export default new OrganizationsPage()