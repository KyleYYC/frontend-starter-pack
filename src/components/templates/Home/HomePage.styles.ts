import { Theme } from '@mui/material'
import { SxProps } from '@mui/system'
import theme from '../../../theme'

const appBarHeight = theme.mixins.toolbar?.minHeight || 56

export const styles: Record<string, SxProps<Theme>> = {
  mainContainer: {
    minHeight: `calc(110vh - ${appBarHeight}px)`,
    backgroundColor: theme.palette.common.black,
    backgroundImage: 'none',
  },
  mainContent: {
    flexGrow: 1,
    py: 2,
  },
}
