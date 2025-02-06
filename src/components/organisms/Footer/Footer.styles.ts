import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { AlignmentProps } from '../../../types/components/Footer'

export const FooterContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(256, 256, 256, 0.01)',
  backgroundImage: 'none',
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  component: 'footer',
  role: 'contentinfo',
  textAlign: 'center',
}))

export const LogoContainer = styled('div')<AlignmentProps>(
  ({ align, theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: align,
    textDecoration: 'none',
    color: 'inherit',
    marginBottom: theme.spacing(2),
  })
)

export const CompanyName = styled(Typography)<TypographyProps & AlignmentProps>(
  ({ align, theme }) => ({
    textDecoration: 'none',
    color: 'inherit',
    textAlign: align,
    marginBottom: theme.spacing(2),
  })
)

export const LinksContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(2),
  paddingTop: theme.spacing(2),
}))

export const LinkGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: theme.spacing(1),
}))

export const LinkGroupTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
}))

export const FooterLinkAnchor = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  padding: theme.spacing(0.5, 0),
  '&:hover': {
    color: theme.palette.primary.main,
  },
}))

export const SocialLinksContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}))

export const SocialLinkAnchor = styled('a')(({ theme }) => ({
  color: theme.palette.text.secondary,
  margin: theme.spacing(0, 1),
  '&:hover': {
    color: theme.palette.primary.main,
  },
}))

export const CopyrightText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}))
