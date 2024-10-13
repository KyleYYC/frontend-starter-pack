import { Typography, Container, Grid, Card, CardContent } from '@mui/material'

const featuresData = [
  {
    title: 'Fast Performance',
    description:
      'Experience lightning-fast load times and seamless interactions.',
  },
  {
    title: 'Secure',
    description: 'Your data is protected with top-notch security measures.',
  },
  {
    title: 'User-Friendly',
    description: 'An intuitive interface that anyone can navigate.',
  },
]

const FeaturesTemplate = () => (
  <Container sx={{ mt: 15, mb: 10 }}>
    <Typography variant='h3' align='center'>
      Our Features
    </Typography>
    <Grid container spacing={4}>
      {featuresData.map((feature, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant='h5'>{feature.title}</Typography>
              <Typography variant='body1'>{feature.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
)

export default FeaturesTemplate
