import Header from './Header'
import HeaderButtons from '../../molecules/HeaderButtons'
import { headerNavigationLinks } from '../../../config/constants'
import Logo from '../../atoms/Logo'

const CustomHeader = () => {
  return (
    <Header
      logo={<Logo width={100} />}
      title={null}
      links={headerNavigationLinks}
      userMenu={null}
      mobileMenuHeightOption='full'
      navLinksPosition='center'
      showLogo={false}
      showTitle={true}
      logoAlignment='left'
      titleAlignment='center'
      additionalContent={<HeaderButtons />}
      elevation={2}
      position='fixed'
      hideOnScroll={true}
      themeColor='primary'
    />
  )
}

export default CustomHeader
