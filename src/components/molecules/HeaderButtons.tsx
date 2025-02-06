import {
  AccountCircleOutlined,
  Search,
  ShoppingBagOutlined,
} from '@mui/icons-material'
import { Box, Link } from '@mui/material'
import GeniusConfiguration from '../../config/config'

const { isCartIconEnabled, isAccountIconEnabled, isSearchIconEnabled } =
  GeniusConfiguration.navigation

const HeaderButtons = () => {
  return (
    <Box display={'flex'}>
      {isSearchIconEnabled && (
        <Link href={'#'} marginRight={1}>
          {' '}
          <Search />{' '}
        </Link>
      )}
      {isAccountIconEnabled && (
        <Link href={'#'} marginRight={1}>
          {' '}
          <AccountCircleOutlined />{' '}
        </Link>
      )}
      {isCartIconEnabled && (
        <Link href={'#'} marginRight={1}>
          {' '}
          <ShoppingBagOutlined />{' '}
        </Link>
      )}
    </Box>
  )
}

export default HeaderButtons
