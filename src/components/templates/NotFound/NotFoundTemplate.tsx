import { Container, Typography, Box, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const NotFoundTemplate = () => (
  <Container>
    <Box my={4} textAlign="center">
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Button variant="contained" color="primary" component={RouterLink} to="/">
        Go to Home
      </Button>
    </Box>
  </Container>
)

export default NotFoundTemplate