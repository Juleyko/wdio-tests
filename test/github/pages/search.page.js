class SearchPage {
    get resultList() {
        return $('div[data-testid="results-list"]')
    }

    async checkDoesReposMathTerm(term) {
        await browser.waitUntil(async () => {
            return this.resultList.isDisplayed()
        })

        for await (const repoName of this.resultList.$$('& > .search-title .search-match em')) {
            await expect(repoName).toHaveTextContaining(term, { ignoreCase: true })
        }
    }
}

export default new SearchPage()