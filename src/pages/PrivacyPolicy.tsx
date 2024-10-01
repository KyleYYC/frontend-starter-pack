import { Container, Typography, Box } from '@mui/material'

const PrivacyPolicy = () => (
  <Container sx={{ mt: 15, mb: 10}}>
    <Typography variant="h3" align="center">Privacy Policy</Typography>
    <Box sx={{ mt: 2 }}>
      <Typography variant="body1">
        Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information.
      </Typography>
      <Typography variant="h6">
        1. Information Collection
      </Typography>
      <Typography variant="body1">
        We collect information when you register on our site, subscribe to our newsletter, or fill out a form.
      </Typography>
    </Box>
  </Container>
)

export default PrivacyPolicy