import { Container, Typography, Box, TextField, Button } from '@mui/material'

const PasswordResetTemplate = () => (
  <Container maxWidth='sm'>
    <Box my={4}>
      <Typography variant='h4' component='h1' gutterBottom>
        Reset Password
      </Typography>
      <Box component='form' noValidate>
        <TextField
          fullWidth
          label='Email Address'
          margin='normal'
          variant='outlined'
          required
        />
        <Button variant='contained' color='primary' sx={{ mt: 2 }}>
          Send Password Reset Email
        </Button>
      </Box>
    </Box>
  </Container>
)

export default PasswordResetTemplate
