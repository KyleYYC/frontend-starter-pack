import React from 'react'
import { useTheme } from '@mui/material/styles'
import CustomHeader from './components/organisms/Header/CustomHeader'
import CustomFooter from './components/organisms/Footer/CustomFooter'
import { Box } from '@mui/material'
import HomePageExampleTemplate from './components/templates/Examples/HomePage/HomePageExampleTemplate'

function App() {
  const theme = useTheme()

  const appBarHeight =
    (theme.mixins.toolbar as React.CSSProperties).minHeight || 56

  return (
    <>
      <CustomHeader />
        <HomePageExampleTemplate />
      <CustomFooter />
    </>
  )
}

export default App
