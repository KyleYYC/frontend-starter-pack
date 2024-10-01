import {Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

interface BlogPost {
  id: number
  title: string
  summary: string
  image: string
  date: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Introducing Our New Feature',
    summary: 'Learn about our latest update that will improve your workflow.',
    image: '/assets/images/blog1.jpg',
    date: 'March 10, 2023',
  },
  {
    id: 2,
    title: 'How to Maximize Productivity',
    summary: 'Tips and tricks on getting the most out of our application.',
    image: '/assets/images/blog2.jpg',
    date: 'April 5, 2023',
  }
]

const Blog = () => (
  <Container sx={{ mt: 15, mb: 10}}>
    <Typography variant="h3" align="center">Blog</Typography>
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {blogPosts.map((post) => (
        <Grid item xs={12} md={4} key={post.id}>
          <Card>
            <CardActionArea component={RouterLink} to={`/blog/${post.id}`}>
              <CardMedia component="img" height="140" image={post.image} alt={post.title}/>
              <CardContent>
                <Typography variant="h5">{post.title}</Typography>
                <Typography variant="body2" color="textSecondary">{post.date}</Typography>
                <Typography variant="body2">{post.summary}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
)

export default Blog