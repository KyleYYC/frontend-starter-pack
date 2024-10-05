import {Box, Typography, Button, Grid, Card, Avatar, CardMedia, CardContent, Paper, Stack, TextField, List, ListItem, ListItemAvatar, ListItemText} from '@mui/material'
import theme from '../../../theme'
import { styles } from './HomePageExampleTemplate.styles'

const appBarHeight = theme.mixins.toolbar?.minHeight || 56

const features = [
  {
    id: 1,
    title: 'Feature 1',
    description:
      'Description of feature 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Feature 2',
    description:
      'Description of feature 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    title: 'Feature 3',
    description:
      'Description of feature 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

const services = [
  {
    id: 1,
    title: 'Service 1',
    image: 'https://via.placeholder.com/400x140?text=Service+1',
    description:
      'Detailed description of service 1. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    title: 'Service 2',
    image: 'https://via.placeholder.com/400x140?text=Service+2',
    description:
      'Detailed description of service 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }
]

const testimonials = [
  {
    id: 1,
    name: 'User 1',
    avatar: 'https://via.placeholder.com/64?text=U1',
    feedback:
      '"Testimonial from user 1. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
  },
  {
    id: 2,
    name: 'User 2',
    avatar: 'https://via.placeholder.com/64?text=U2',
    feedback:
      '"Testimonial from user 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
  }
]

const articles = [
  {
    id: 1,
    title: 'Article Title 1',
    author: 'Author Name',
    date: 'Date',
    preview:
      'Preview of article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Article Title 2',
    author: 'Author Name',
    date: 'Date',
    preview:
      'Preview of article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }
]

const popularPosts = [
  {
    id: 1,
    title: 'Post Title 1',
    description: 'Short description of the post.',
    image: 'https://via.placeholder.com/64?text=P1',
  },
  {
    id: 2,
    title: 'Post Title 2',
    description: 'Short description of the post.',
    image: 'https://via.placeholder.com/64?text=P2',
  }
]

const HomePageExampleTemplate = () => {
  return (
    <Box sx={{ minHeight: `calc(110vh - ${appBarHeight}px)` }}>
      <Box component="main" sx={{ mt: `${appBarHeight}px`, flexGrow: 1 }}>
        {/* Hero Section */}
        <Box sx={styles.heroSection}>
          <Typography variant="h3">Welcome to My Site</Typography>
          <Typography variant="h6">
            A fully responsive template using Material-UI v5 components
          </Typography>
          <Button variant="contained" color="secondary" size="large">Get Started</Button>
        </Box>

        {/* Features Section */}
        <Box sx={styles.section}>
          <Typography variant="h4" align="center">Features</Typography>
          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid item xs={12} sm={4} key={feature.id}>
                <Card sx={styles.card}>
                  <Avatar sx={styles.avatar}>{feature.id}</Avatar>
                  <Typography variant="h6">{feature.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{feature.description}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Services Section */}
        <Box sx={styles.servicesSection}>
          <Typography variant="h4" align="center">Our Services</Typography>
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} key={service.id}>
                <Card>
                  <CardMedia component="img" height="140" image={service.image} alt={service.title}/>
                  <CardContent>
                    <Typography variant="h5">{service.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{service.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials Section */}
        <Box sx={styles.section}>
          <Typography variant="h4" align="center">Testimonials</Typography>
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <Paper sx={styles.paper}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar alt={testimonial.name} src={testimonial.avatar} />
                    <Typography variant="h6">{testimonial.name}</Typography>
                  </Stack>
                  <Typography variant="body1" sx={{ mt: 2 }}>{testimonial.feedback}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Content Section */}
        <Box sx={styles.contentSection}>
          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={12} md={8}>
              <Typography variant="h5">Latest Articles</Typography>
              {articles.map((article) => (
                <Paper key={article.id} sx={styles.articleCard}>
                  <Typography variant="h6">{article.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{article.author} | {article.date}</Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>{article.preview}</Typography>
                  <Button variant="text" sx={{ mt: 1 }}>Read More</Button>
                </Paper>
              ))}
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5">Newsletter</Typography>
              <Paper sx={styles.newsletter}>
                <Typography variant="body1">
                  Subscribe to our newsletter to get the latest updates.
                </Typography>
                <TextField label="Email Address" variant="outlined" fullWidth sx={{ mb: 2 }}/>
                <Button variant="contained" color="primary" fullWidth>Subscribe</Button>
              </Paper>

              <Typography variant="h5">Popular Posts</Typography>
              <List>
                {popularPosts.map((post) => (
                  <ListItem key={post.id} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar variant="square" src={post.image} />
                    </ListItemAvatar>
                    <ListItemText primary={post.title} secondary={post.description}/>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>

        {/* Call to Action Section */}
        <Box sx={styles.ctaSection}>
          <Typography variant="h4">Ready to Get Started?</Typography>
          <Typography variant="h6">
            Contact us today and let's build something amazing together.
          </Typography>
          <Button variant="contained" color="secondary" size="large">Contact Us</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default HomePageExampleTemplate