import { Theme } from '@mui/material'
import { SxProps } from '@mui/system'
import theme from '../../../theme'

export const styles: Record<string, SxProps<Theme>> = {
  heroSection: {
    py: 8,
    px: 4,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },
  section: {
    py: 8,
    px: 4,
  },
  servicesSection: {
    py: 8,
    px: 4,
  },
  card: {
    textAlign: 'center',
    p: 3,
  },
  avatar: {
    bgcolor: theme.palette.secondary.main,
    width: 56,
    height: 56,
    mx: 'auto',
    mb: 2,
  },
  paper: {
    p: 4,
  },
  contentSection: {
    py: 8,
    px: 4,
  },
  articleCard: {
    p: 3,
    mb: 2,
  },
  newsletter: {
    p: 3,
    mb: 4,
  },
  ctaSection: {
    py: 8,
    px: 4,
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },
}
