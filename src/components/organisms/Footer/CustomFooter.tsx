import Footer from './Footer'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FooterSignup from './FooterSignup'

/**
 * Example implementation of the Footer component with custom configurations.
 */
const CustomFooter = () => {
  const footerLinks = [
    [
      { label: 'Company' },
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
    ],
    [
      { label: 'Support' },
      { label: 'Help Center', href: '/help' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
    [
      { label: 'Resources' },
      { label: 'Legal', href: '/legal' },
    ],
  ]

  const socialLinks = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: <FacebookIcon />,
    },
    {
      label: 'Twitter',
      href: 'https://www.x.com/',
      icon: <TwitterIcon />,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com',
      icon: <InstagramIcon />,
    },
  ]

  return (
    <Footer
      logo={null}
      companyName={null}
      links={footerLinks}
      socialLinks={socialLinks}
      showLogo={true}
      showCompanyName={true}
      logoAlignment='left'
      companyNameAlignment='center'
      additionalContent={<FooterSignup />}
      additionalContentAlignment={'left'}
      elevation={4}
      position='static'
      themeColor='default'
      customStyles={{}}
      copyrightText={`2025 Example Company. All rights reserved.`}
    />
  )
}

export default CustomFooter
