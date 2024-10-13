import { Container, Typography, Box } from '@mui/material'

const AccountTemplate = () => (
  <Container>
    <Box my={4}>
      <Typography variant='h4' component='h1' gutterBottom>
        Account Page
      </Typography>
      <Typography variant='body1'>
        Placeholder for account information.
      </Typography>
    </Box>
  </Container>
)

export default AccountTemplate
