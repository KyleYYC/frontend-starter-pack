import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material'

const pressReleases = [
  {
    title: 'MyApp Launches New Feature',
    date: 'Jan 1, 2023',
    image: '/assets/images/press1.jpg',
    summary: 'We are excited to announce the launch of our new feature...',
  },
  {
    title: 'MyApp Wins Industry Award',
    date: 'Feb 15, 2023',
    image: '/assets/images/press2.jpg',
    summary: 'MyApp has been recognized for excellence in...',
  },
]

const PressTemplate = () => (
  <Container sx={{ mt: 15, mb: 10}}>
    <Typography variant="h3" align="center">Press</Typography>
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {pressReleases.map((release, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card>
            <CardMedia component="img" height="140" image={release.image} alt={release.title}/>
            <CardContent>
              <Typography variant="h5">{release.title}</Typography>
              <Typography variant="subtitle2" color="textSecondary">{release.date}</Typography>
              <Typography variant="body2">{release.summary}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
)

export default PressTemplate