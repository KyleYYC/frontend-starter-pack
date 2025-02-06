import { Helmet } from 'react-helmet-async'
import GeniusConfiguration from '../../config/config'
import { GeniusSEOProps } from '../../types/components/GeniusSEO'

const DefaultMetaTags = () => {
  const { seo } = GeniusConfiguration
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <meta
        name={seo.metaData.robots.name}
        content={seo.metaData.robots.content}
      />
      <meta
        name={seo.metaData.viewport.name}
        content={seo.metaData.viewport.content}
      />
      <meta
        httpEquiv={seo.metaData.contentType['http-equiv']}
        content={seo.metaData.contentType.content}
      />
      <meta
        httpEquiv={seo.metaData.xUACompatible['http-equiv']}
        content={seo.metaData.xUACompatible.content}
      />

      {/* Open Graph / Facebook Meta Tags */}
      <meta
        property={seo.metaData.ogType.property}
        content={seo.metaData.ogType.content}
      />
      <meta
        property={seo.metaData.ogLocale.property}
        content={seo.metaData.ogLocale.content}
      />

      {/* Twitter Meta Tags */}
      <meta
        name={seo.metaData.twitterCard.name}
        content={seo.metaData.twitterCard.content}
      />
      <meta
        name={seo.metaData.twitterSite.name}
        content={seo.metaData.twitterSite.content}
      />
      <meta
        name={seo.metaData.twitterCreator.name}
        content={seo.metaData.twitterCreator.content}
      />

      {/* Additional SEO Enhancements */}
      <meta
        name={seo.metaData.themeColor.name}
        content={seo.metaData.themeColor.content}
      />
      <meta
        name={seo.metaData.msTileColor.name}
        content={seo.metaData.msTileColor.content}
      />
      <meta
        name={seo.metaData.msConfig.name}
        content={seo.metaData.msConfig.content}
      />

      {/* Link Tags */}
      <link rel={seo.linkTags.manifest.rel} href={seo.linkTags.manifest.href} />
    </Helmet>
  )
}

const SchemaMarkup = () => (
  <Helmet>
    <script type='application/ld+json'>
      {JSON.stringify(GeniusConfiguration.seo)}
    </script>
  </Helmet>
)

const GeniusSEO = ({
  pageTitle,
  pageDescription,
  url,
  favicon,
  siteName,
  logoUrl,
  keywords,
}: GeniusSEOProps) => {
  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
        <meta name='keywords' content={keywords.join(',')} />
        <meta name='author' content={siteName} />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:image' content={logoUrl} />
        <meta property='og:url' content={url} />
        <meta property='og:site_name' content={siteName} />

        {/* Twitter Meta Tags */}
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:description' content={pageDescription} />
        <meta name='twitter:image' content={logoUrl} />

        {/* Canonical Link */}
        <link rel='canonical' href={url} />

        {/* Favicon Links */}
        <link rel='icon' type='image/png' sizes='32x32' href={favicon} />
      </Helmet>

      {/* Default and Schema Tags */}
      <DefaultMetaTags />
      <SchemaMarkup />
    </>
  )
}

export default GeniusSEO
