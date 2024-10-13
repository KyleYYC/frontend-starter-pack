import { Container, Typography, Box } from '@mui/material'

const MaintenancePageTemplate = () => (
  <Container sx={{ mt: 15, mb: 10}}>
    <Box my={4} textAlign="center">
      <Typography variant="h2" component="h1" gutterBottom>
        Page Under Maintenance
      </Typography>
      <Typography variant="h5">
        We'll be back shortly. Thank you for your patience.
      </Typography>
    </Box>
  </Container>
)

export default MaintenancePageTemplate