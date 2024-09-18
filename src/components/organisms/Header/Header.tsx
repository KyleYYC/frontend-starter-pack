import { AppBar, Toolbar, Typography } from '@mui/material'
import { HeaderContainer } from './Header.styles'

interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => (
    <AppBar position="static">
    <Toolbar>
      <HeaderContainer>
        <Typography variant="h6">{title}</Typography>
      </HeaderContainer>
    </Toolbar>
  </AppBar>
)

export default Header