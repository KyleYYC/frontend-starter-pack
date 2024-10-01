import Header from './Header'

/**
 * Example implementation of the Header component with custom configurations.
 */
const CustomHeader = () => {
  const handleMobileMenuClick = () => {
    console.log('Mobile menu opened')
  }

  const navLinks = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Sub Menu',
      href: '/',
      subLinks: [
        { label: 'Sub Menu 1', href: '/submenu1' },
        { label: 'Sub Menu 2', href: '/submenu2' },
      ],
    },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <Header
      logo={<img src='src/assets/images/common/logo.png' alt='App Logo' width={100}/>}
      title={null}
      links={navLinks}
      userMenu={null}
      onMobileMenuClick={handleMobileMenuClick}
      mobileMenuHeightOption='content'
      navLinksPosition='center'
      showLogo={true}
      showTitle={true}
      logoAlignment='left'
      titleAlignment='center'
      additionalContent={null}
      elevation={2}
      position='fixed'
      hideOnScroll={true}
      themeColor='primary'
    />
  )
}

export default CustomHeader