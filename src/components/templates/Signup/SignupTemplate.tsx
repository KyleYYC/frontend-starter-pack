import { Container, Typography, Box, TextField, Button } from '@mui/material'

const SignUpTemplate = () => (
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <Box component="form" noValidate>
        <TextField fullWidth label="Email" margin="normal" variant="outlined" required />
        <TextField fullWidth label="Password" type="password" margin="normal" variant="outlined" required />
        <TextField fullWidth label="Confirm Password" type="password" margin="normal" variant="outlined" required />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Sign Up
        </Button>
      </Box>
    </Box>
  </Container>
)

export default SignUpTemplate