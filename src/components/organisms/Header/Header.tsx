import React from 'react'
import {
  Alignment,
  HeaderProps,
  NavLink,
} from '../../../types/components/Header'
import {
  StyledAppBar,
  LogoContainer,
  NavLinksContainer,
  NavLinkAnchor,
  Title,
  DrawerContent,
} from './Header.styles'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

/**
 * Component to render navigation links, including nested sub-links for desktop view.
 */
const NavLinks = React.memo(
  ({ links, position }: { links: NavLink[]; position: Alignment }) => (
    <NavLinksContainer align={position}>
      {links.map((link) => (
        <NavLinkItem key={link.label} link={link} />
      ))}
    </NavLinksContainer>
  )
)

/**
 * Component to render an individual navigation link item with optional sub-links.
 */
const NavLinkItem = ({ link }: { link: NavLink }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleOpenMenu = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (link.subLinks) {
      event.preventDefault()
      setAnchorEl(event.currentTarget)
    }
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <NavLinkAnchor
        href={link.href || '#'}
        onClick={handleOpenMenu}
        aria-haspopup={!!link.subLinks}
        aria-controls={link.subLinks ? `${link.label}-menu` : undefined}
      >
        {link.label}
      </NavLinkAnchor>
      {link.subLinks && (
        <Menu
          id={`${link.label}-menu`}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          {link.subLinks.map((subLink) => (
            <MenuItem
              key={subLink.label}
              component='a'
              href={subLink.href}
              onClick={handleCloseMenu}
            >
              {subLink.label}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  )
}

/**
 * Component to render navigation links in the mobile drawer, including nested sub-links.
 */
const DrawerNavLinks = ({ links }: { links: NavLink[] }) => (
  <List>
    {links.map((link) => (
      <DrawerNavLinkItem key={link.label} link={link} />
    ))}
  </List>
)

/**
 * Component to render an individual navigation link item in the mobile drawer.
 */
const DrawerNavLinkItem = ({ link }: { link: NavLink }) => {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    if (link.subLinks) {
      setOpen((prevOpen) => !prevOpen)
    }
  }

  return (
    <>
      <ListItem onClick={handleClick} component='a' href={link.href}>
        <ListItemText primary={link.label} />
        {link.subLinks ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
      {link.subLinks && (
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {link.subLinks.map((subLink) => (
              <ListItem key={subLink.label} component='a' href={subLink.href}>
                <ListItemText primary={subLink.label} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </>
  )
}

/**
 * The Header component renders a responsive app bar with customizable logo, title, navigation links, and user menu.
 * It supports nested navigation links and adapts to mobile devices by rendering a drawer menu.
 * Defaults should be adjusted to user requirements.
 */
const Header = ({
  logo,
  title,
  links = [],
  userMenu,
  onMobileMenuClick,
  mobileMenuHeightOption = 'full',
  navLinksPosition = 'right',
  showLogo = true,
  showTitle = true,
  logoAlignment = 'left',
  titleAlignment = 'left',
  additionalContent,
  elevation = 4,
  position = 'fixed',
  hideOnScroll = false,
  themeColor = 'default',
  customStyles = {},
}: HeaderProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const trigger = useScrollTrigger()

  const [drawerOpen, setDrawerOpen] = React.useState(false)

  /**
   * Toggles the state of the mobile drawer menu.
   * @param open - Whether the drawer should be open or closed.
   */
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setDrawerOpen(open)
      if (onMobileMenuClick && open) {
        onMobileMenuClick()
      }
    }

  const appBarContent = (
    <StyledAppBar
      position={position}
      elevation={elevation}
      color={themeColor}
      style={customStyles}
    >
      <Toolbar>
        {(showLogo || showTitle) && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
              justifyContent: logoAlignment,
            }}
          >
            {showLogo && logo && (
              <LogoContainer align={logoAlignment}>{logo}</LogoContainer>
            )}
            {showTitle && title && (
              <Title align={titleAlignment} variant='h6'>
                {title}
              </Title>
            )}
          </Box>
        )}

        {additionalContent && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {additionalContent}
          </Box>
        )}

        {!isMobile && links.length > 0 && (
          <NavLinks links={links} position={navLinksPosition} />
        )}

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {userMenu}
          {isMobile && (
            <IconButton
              edge='end'
              color='inherit'
              aria-label='open navigation menu'
              onClick={toggleDrawer(true)}
              size='large'
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </StyledAppBar>
  )

  return (
    <>
      {hideOnScroll ? (
        <Slide appear={false} direction='down' in={!trigger}>
          {appBarContent}
        </Slide>
      ) : (
        appBarContent
      )}
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          style: {
            height: mobileMenuHeightOption === 'full' ? '100%' : 'auto',
          },
        }}
      >
        <DrawerContent role='presentation' onClick={toggleDrawer(false)}>
          <DrawerNavLinks links={links} />
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header
