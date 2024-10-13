import { Container, Typography, Box } from '@mui/material'

const ComingSoonTemplate = () => (
  <Container sx={{ mt: 15, mb: 10 }}>
    <Box my={4} textAlign='center'>
      <Typography variant='h2' component='h1' gutterBottom>
        Coming Soon
      </Typography>
      <Typography variant='h5'>
        We are working hard to bring you this page.
      </Typography>
    </Box>
  </Container>
)

export default ComingSoonTemplate
