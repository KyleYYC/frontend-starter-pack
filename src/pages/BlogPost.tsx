import { useParams } from 'react-router-dom'
import { Container, Typography, Box } from '@mui/material'

interface BlogPostData {
  id: number
  title: string
  content: string
  date: string
}

const blogPostsData: BlogPostData[] = [
  {
    id: 1,
    title: 'Introducing Our New Feature',
    content: 'Detailed content about the new feature...',
    date: 'March 10, 2023',
  },
  {
    id: 2,
    title: 'How to Maximize Productivity',
    content: 'In-depth tips and tricks...',
    date: 'April 5, 2023',
  }
]

const BlogPost = () => {
  const { id } = useParams<{ id: string }>()
  const post = blogPostsData.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <Container sx={{ mt: 15, mb: 10}}>
        <Typography variant="h5" align="center">Post not found.</Typography>
      </Container>
    )
  }

  return (
    <Container sx={{ mt: 15, mb: 10}}>
      <Typography variant="h3">{post.title}</Typography>
      <Typography variant="subtitle2" color="textSecondary">{post.date}</Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">{post.content}</Typography>
      </Box>
    </Container>
  )
}

export default BlogPost