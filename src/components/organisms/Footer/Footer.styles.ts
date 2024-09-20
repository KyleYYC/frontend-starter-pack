import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { Alignment } from '../../../types/components/Footer'

interface AlignmentProps {
  align?: Alignment
}

export const FooterContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  marginTop: 'auto',
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
  marginTop: theme.spacing(2),
}))
