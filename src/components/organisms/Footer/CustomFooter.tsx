import Footer from './Footer'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Typography } from '@mui/material'

/**
 * Example implementation of the Footer component with custom configurations.
 */
const CustomFooter = () => {
  const footerLinks = [
    [
      { label: 'Company' },
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
    ],
    [
      { label: 'Support' },
      { label: 'Help Center', href: '/help' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
    [
      { label: 'Resources' },
      { label: 'Blog', href: '/blog' },
      { label: 'Developers', href: '/developers' },
      { label: 'Forums', href: '/forums' },
    ],
  ]

  const socialLinks = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com',
      icon: <FacebookIcon />,
    },
    {
      label: 'Twitter',
      href: 'https://www.twitter.com',
      icon: <TwitterIcon />,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com',
      icon: <InstagramIcon />,
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com',
      icon: <YouTubeIcon />,
    },
  ]

  return (
    <Footer
      logo={<img src='src/assets/images/common/logo.png' alt='Company Logo' width={100}/>}
      companyName='Your Company Name'
      links={footerLinks}
      socialLinks={socialLinks}
      showLogo={true}
      showCompanyName={true}
      logoAlignment='center'
      companyNameAlignment='center'
      additionalContent={null}
      elevation={4}
      position='static'
      themeColor='default'
      customStyles={{}}
      copyrightText={
        <Typography>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </Typography>
      }
    />
  )
}

export default CustomFooter