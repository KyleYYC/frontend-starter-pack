import { Container, Typography, Box, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const DevelopersTemplate = () => (
  <Container sx={{ mt: 15, mb: 10}}>
    <Typography variant="h3" align="center">Developers</Typography>
    <Box sx={{ mt: 2 }}>
      <Typography variant="body1">
        Welcome, developers! Access our API documentation and start building amazing integrations.
      </Typography>
      <Button variant="contained" color="primary" component={RouterLink} to="/developers/docs" sx={{ mt: 2 }}>
        View API Docs
      </Button>
    </Box>
  </Container>
)

export default DevelopersTemplate