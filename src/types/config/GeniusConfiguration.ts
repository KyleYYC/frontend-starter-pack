export interface GeniusConfigurationType {
  navigation: {
    isToolsPageDisplayed: boolean
    isServicesPageDisplayed: boolean
    isProductsPageDisplayed: boolean
    isPricingPageDisplayed: boolean
    isMoreSubNavDisplayed: boolean
    isBlogPageDisplayed: boolean
    isCartIconEnabled: boolean
    isAccountIconEnabled: boolean
    isSearchIconEnabled: boolean
  }
  routes: {
    isHomePageEnabled: boolean
    isFeaturesPageEnabled: boolean
    isPricingPageEnabled: boolean
    isContactPageEnabled: boolean
    isAboutUsPageEnabled: boolean
    isPressPageEnabled: boolean
    isPrivacyPolicyPageEnabled: boolean
    isTermsOfServicePageEnabled: boolean
    isBlogPageEnabled: boolean
    isBlogPostPageEnabled: boolean
    isDevelopersPageEnabled: boolean
    isForumsPageEnabled: boolean
    isForumTopicPageEnabled: boolean
    isLoginPageEnabled: boolean
    isHelpPageEnabled: boolean
    isSignUpPageEnabled: boolean
    isAccountPageEnabled: boolean
    isAccountSettingsPageEnabled: boolean
    isSearchPageEnabled: boolean
    isNewsletterSignUpPageEnabled: boolean
    isComingSoonPageEnabled: boolean
    isMaintenancePageEnabled: boolean
    isPasswordResetPageEnabled: boolean
    isDashboardPageEnabled: boolean
    isNotFoundPageEnabled: boolean
  }
  seo: {
    metaData: {
      robots: { name: string; content: string }
      viewport: { name: string; content: string }
      contentType: { 'http-equiv': string; content: string }
      xUACompatible: { 'http-equiv': string; content: string }
      ogType: { property: string; content: string }
      ogLocale: { property: string; content: string }
      twitterCard: { name: string; content: string }
      twitterSite: { name: string; content: string }
      twitterCreator: { name: string; content: string }
      themeColor: { name: string; content: string }
      msTileColor: { name: string; content: string }
      msConfig: { name: string; content: string }
    }
    linkTags: {
      manifest: { rel: string; href: string }
    }
    schema: {
      '@context': string
      '@type': string
      name: string
      url: string
      logo: string
      sameAs: string[]
      contactPoint: {
        '@type': string
        email: string
        contactType: string
        areaServed: string
        availableLanguage: string[]
      }
      hasPart: {
        '@type': string
        name: string
        url: string
        address: {
          '@type': string
          streetAddress: string
          addressLocality: string
          addressRegion: string
          postalCode: string
          addressCountry: string
        }
        telephone: string
        openingHours: string
        geo: {
          '@type': string
          latitude: string
          longitude: string
        }
      }
    }
  }
}
