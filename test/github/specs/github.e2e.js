import confirmationPage from '../pages/confirmation.page.js';
import mainPage from '../pages/main.page.js';
import newsletterPage from '../pages/newsletter.page.js';
import organizationsPage from '../pages/organizations.page.js';
import pricingPage from '../pages/pricing.page.js';
import searchPage from '../pages/search.page.js';
import signupPage from '../pages/signup.page.js';

describe('[case 1] Github signup', () => {
    it('should open main page', async () => {
        await mainPage.openPage();
    });

    it('should open sign up page', async () => {
        await mainPage.clickOnSignUpBtn()
    });

    it('should enter an email address', async () => {
        await signupPage.submitEmail('plushka123454331@gmail.com');
    });


    it('should enter a password', async () => {
        await signupPage.submitPassword('super-test-password123321');
    });

    it('should enter a username', async () => {
        await signupPage.submitUsername('Plushkina404');
    });

    it('should enter a product updates', async () => {
        await signupPage.submitProductUpdates('y');
        await browser.pause(2000)
    });
});

describe('[case 2] Github free enterprise plan', () => {
    it('should open main page', async () => {
        await mainPage.openPage();
    });

    it('should scroll to signup block', async () => {
        await mainPage.scrollToSignupBlock()
    })

    it('should check does header exists', async () => {
        await mainPage.checkDoesHeaderExist();
    })

    it('should check does enterprise trial button exists', async () => {
        await mainPage.checkDoesEnterpriseTrialButtonIsVisible()
    })

    it('should click on enterprise trial button', async () => {
        await mainPage.clickOnEnterpriseTrialButton()
    })

    it('should check header text', async () => {
        await organizationsPage.checkHeaderText();
    })

    it('should click on enterprise cloud link', async () => {
        await organizationsPage.clickOnEnterpriseCloudLink()
        await browser.pause(2000)
    })
});

describe('[case 3] Github newsletter subscribtion', () => {
    it('should open main page', async () => {
        await mainPage.openPage();
    });

    it('should check does subscribe button exists', async () => {
        await mainPage.checkDoesSubscribeButtonExists()
    })

    it('should scroll to subscribe button', async () => {
        await mainPage.scrollToSubscribeButton()
    })

    it('should click on subscribe button', async () => {
        await mainPage.clickOnSubscribeButton()
    })

    it('should change domain to resource.github.com/newsletter', async () => {
        await newsletterPage.isNewslatterPage();
    })

    it('should check does header exists', async () => {
        await newsletterPage.checkHeaderText('Subscribe to our developer newsletter')
    })

    it('should enter email address', async () => {
        await newsletterPage.setEmail('plushkina99@gmail.com');
    })

    it('should select ukaine country', async () => {
        await newsletterPage.selectCountry();
    })

    it('should check a checkbox', async () => {
        await newsletterPage.checkMarketingAgreementCheckbox()
    })

    it('should press subscribe', async () => {
        await newsletterPage.clickSubscribeButton()
    })

    it('should check subscription confirmation header', async () => {
        await confirmationPage.checkPageHeaderText('Thanks for subscribing!');
    })
});

describe('[case 4] Github search', async () => {
    const searchValue = 'act';

    it('should open main page', async () => {
        await mainPage.openPage();
    });

    it('should click on search', async () => {
        await mainPage.clickOnSearchButton()
    });

    it('should search by "act" word', async () => {
        await mainPage.searchByTerm(searchValue)
    });

    it('should find at least one repo with the word "act"', async () => {
        await searchPage.checkDoesReposMathTerm(searchValue);
    })
})

describe('[case 5] Github pricing', async () => {
    it('should open main page', async () => {
        await mainPage.openPage();
    });

    it('should click on pricing', async () => {
        await mainPage.clickOnPricingButton()
    });

    it('should check header text', async () => {
        await pricingPage.checkHeaderText('Get the complete developer platform.')
    });

    it('should scroll to "compare all features" button ', async () => {
        await pricingPage.scrollToCompareAllFeaturesButton();
    })

    it('should click "compare all features" button ', async () => {
        await pricingPage.clickOnCompareAllFeaturesButton();
    })

    it('should check compare features header', async () => {
        await pricingPage.checkCompareFeaturesHeaderText('Compare features')
    })
})
