import { Fade } from 'react-awesome-reveal'
import CustomFooter from '../../organisms/Footer/CustomFooter'
import CustomHeader from '../../organisms/Header/CustomHeader'
import { styles } from './HomePage.styles'
import HomePageHelmet from './HomePageHelmet'

import { Box } from '@mui/material'
import Features from '../../../pages/Features'
import CareersTemplate from '../Careers/CareersTemplate'
import ContactTemplate from '../Contact/ContactTemplate'

const HomePage = () => {
  return (
    <>
      <HomePageHelmet />
      <CustomHeader />
      <Box sx={styles.mainContainer}>
        <Box component='main' sx={styles.mainContent}>
          <Fade triggerOnce>
            <Features />
          </Fade>

          <Fade triggerOnce>
            <ContactTemplate />
          </Fade>

          <Fade triggerOnce>
            <CareersTemplate />
          </Fade>
        </Box>
      </Box>

      <CustomFooter />
    </>
  )
}

export default HomePage
