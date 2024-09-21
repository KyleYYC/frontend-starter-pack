import React from 'react'
import CustomHeader from './components/organisms/Header/CustomHeader'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CustomFooter from './components/organisms/Footer/CustomFooter'

function App() {
  const theme = useTheme()

  const appBarHeight =
    (theme.mixins.toolbar as React.CSSProperties).minHeight || 56

  return (
    <Box>
      <CustomHeader />
      <Box sx={{ mt: `${appBarHeight}px`, minHeight: '100vh' }}>
        {/* Rest of your app content */}
      </Box>
      <CustomFooter />
    </Box>
  )
}

export default App
