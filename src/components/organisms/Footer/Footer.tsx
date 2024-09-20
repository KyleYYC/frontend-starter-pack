import {
  FooterContainer,
  LogoContainer,
  CompanyName,
  LinksContainer,
  LinkGroup,
  LinkGroupTitle,
  FooterLinkAnchor,
  SocialLinksContainer,
  SocialLinkAnchor,
  CopyrightText,
} from './Footer.styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { FooterLink, FooterProps } from '../../../types/components/Footer'

/**
 * Component to render a group of links in the footer.
 */
const FooterLinkGroup = ({ group }: { group: FooterLink[] }) => (
  <LinkGroup>
    {group[0]?.label && (
      <LinkGroupTitle variant='subtitle1'>{group[0].label}</LinkGroupTitle>
    )}
    {group.slice(1).map((link) => (
      <FooterLinkAnchor key={link.label} href={link.href || '#'}>
        {link.label}
      </FooterLinkAnchor>
    ))}
  </LinkGroup>
)

/**
 * Component to render social media links.
 */
const SocialLinks = ({ links }: { links: FooterLink[] }) => (
  <SocialLinksContainer>
    {links.map((link) => (
      <SocialLinkAnchor
        key={link.label}
        href={link.href || '#'}
        aria-label={link.label}
      >
        {link.icon}
      </SocialLinkAnchor>
    ))}
  </SocialLinksContainer>
)

/**
 * The Footer component renders a customizable footer with optional logo, company name, links, social media icons, and additional content.
 * It adapts to mobile devices by stacking elements vertically.
 */
const Footer = ({
  logo,
  companyName,
  links = [],
  socialLinks = [],
  showLogo = true,
  showCompanyName = true,
  logoAlignment = 'center',
  companyNameAlignment = 'center',
  additionalContent,
  elevation = 0,
  customStyles = {},
  copyrightText,
}: FooterProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <FooterContainer style={customStyles} elevation={elevation} square>
      {showLogo && logo && (
        <LogoContainer align={logoAlignment}>{logo}</LogoContainer>
      )}
      {showCompanyName && companyName && (
        <CompanyName align={companyNameAlignment} variant='h6'>
          {companyName}
        </CompanyName>
      )}
      {additionalContent && (
        <Box sx={{ marginBottom: theme.spacing(2) }}>{additionalContent}</Box>
      )}
      {links.length > 0 && (
        <LinksContainer
          data-testid='links-container'
          sx={{
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'flex-start',
          }}
        >
          {links.map((group, index) => (
            <FooterLinkGroup key={index} group={group} />
          ))}
        </LinksContainer>
      )}
      {socialLinks.length > 0 && <SocialLinks links={socialLinks} />}
      {copyrightText && (
        <CopyrightText variant='body2'>{copyrightText}</CopyrightText>
      )}
    </FooterContainer>
  )
}

export default Footer
