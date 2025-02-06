import { Box, Typography } from '@mui/material'
import Logo from '../../atoms/Logo'

const FooterSignup = () => {
  return (
    <Box maxWidth={250} textAlign={'start'}>
      <Logo width={150} />
      <Typography fontSize={15} my={1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
        minim veniam.
      </Typography>
    </Box>
  )
}

export default FooterSignup
