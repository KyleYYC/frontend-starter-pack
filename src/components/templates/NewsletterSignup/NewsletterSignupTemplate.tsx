import { Container, Typography, Box, TextField, Button } from '@mui/material'

const NewsletterSignUpTemplate = () => (
  <Container maxWidth="sm">
    <Box my={4} textAlign="center">
      <Typography variant="h4" component="h1" gutterBottom>
        Subscribe to our Newsletter
      </Typography>
      <Box component="form" noValidate>
        <TextField fullWidth label="Email Address" margin="normal" variant="outlined" required/>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Subscribe
        </Button>
      </Box>
    </Box>
  </Container>
)

export default NewsletterSignUpTemplate