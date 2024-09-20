// src/App.tsx

import React, { useEffect } from 'react'
import CustomHeader from './components/organisms/Header/CustomHeader'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

function App() {
  const theme = useTheme()

  const appBarHeight = (theme.mixins.toolbar as React.CSSProperties).minHeight || 56

  return (
    <Box>
      <CustomHeader />
      <Box sx={{ mt: `${appBarHeight}px` }}>
        {/* Rest of your app content */}
      </Box>
    </Box>
  )
}

export default App
