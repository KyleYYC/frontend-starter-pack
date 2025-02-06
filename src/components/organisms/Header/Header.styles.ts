import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Typography, { TypographyProps } from '@mui/material/Typography'
import List from '@mui/material/List'
import { Alignment } from '../../../types/components/Header'
import { ListItem } from '@mui/material'

interface AlignmentProps {
  align?: Alignment
}

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.common.black,
  backgroundImage: 'none',
}))

export const LogoContainer = styled('div')<AlignmentProps>(({ align }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: align,
  textDecoration: 'none',
  color: 'inherit',
  marginLeft: 10,
}))

export const Title = styled(Typography)<TypographyProps & AlignmentProps>(
  ({ align }) => ({
    textDecoration: 'none',
    color: 'inherit',
    textAlign: align,
  })
)

export const NavLinksContainer = styled('nav')<AlignmentProps>(({ align }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: align,
}))

export const NavLinkAnchor = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.common.white,
  padding: theme.spacing(1, 2),
  '&:hover': {
    color: theme.palette.primary.main,
  },
}))

export const DrawerContent = styled(List)(() => ({
  width: 250,
}))

export const NavLinkItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(2, 1),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 2),
  },
}))
