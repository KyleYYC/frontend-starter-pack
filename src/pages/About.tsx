import { Container, Typography, Box } from '@mui/material'

const About = () => (
  <Container sx={{ mt: 15, mb: 10}}>
    <Typography variant="h3" align="center">About Us</Typography>
    <Box sx={{ mt: 2 }}>
      <Typography variant="body1">
        Welcome to MyApp! We are a dedicated team of professionals committed to delivering top-notch services.
      </Typography>
      <Typography variant="body1">
        Our mission is to provide excellent solutions that make your life easier.
      </Typography>
    </Box>
  </Container>
)

export default About