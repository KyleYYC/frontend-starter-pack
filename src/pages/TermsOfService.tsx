import { Container, Typography, Box } from '@mui/material'

const TermsOfService = () => (
  <Container sx={{ mt: 15, mb: 10}}>
    <Typography variant="h3" align="center">Terms of Service</Typography>
    <Box sx={{ mt: 2 }}>
      <Typography variant="body1">
        By using our website, you agree to comply with and be bound by the following terms and conditions.
      </Typography>
      <Typography variant="h6">
        1. Acceptance of Terms
      </Typography>
      <Typography variant="body1">
        These terms govern your use of our site and services. By accessing our site, you agree to these terms.
      </Typography>
    </Box>
  </Container>
)

export default TermsOfService