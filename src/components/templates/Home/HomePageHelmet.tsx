import GeniusSEO from '../../molecules/GeniusSEO'

const HomePageHelmet = () => {
  const pageTitle = 'Example Website' // MAX LENGTH IS 60 CHARACTERS DO NOT EXCEED
  const pageDescription =
    'Example Descriptions' // MAX LENGTH IS 160 CHARACTERS DO NOT EXCEED
  const url = 'https://example.com/'
  const favicon = url + 'favicon.svg'
  const siteName = 'Example Website'
  const logoUrl = url + 'images/logo_white.png'
  const keywords = ['example', 'website']

  return (
    <GeniusSEO
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      url={url}
      favicon={favicon}
      siteName={siteName}
      logoUrl={logoUrl}
      keywords={keywords}
    />
  )
}

export default HomePageHelmet
