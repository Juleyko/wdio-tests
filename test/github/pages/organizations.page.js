import { Page } from "./Page.js"

class OrganizationsPage extends Page {
    get pageHeader() {
        return $('.application-main h1')
    }

    get enterpriseCloundLink() {
        return $('.application-main  a[href^="/account/enterprises/new"]')
    }

    async checkHeaderText(text) {
        await this.checkElementText(this.pageHeader, text)
    }

    async clickOnEnterpriseCloudLink() {
        await this.waitForClickableAndClick(this.enterpriseCloundLink)
    }
}

export default new OrganizationsPage()