import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Typography, List, ListItem, ListItemText, Divider, TextField, Button } from '@mui/material'

interface ForumPost {
  id: number
  author: string
  content: string
  date: string
}

interface ForumTopicData {
  id: number
  title: string
  posts: ForumPost[]
}

const forumTopicsData: ForumTopicData[] = [
  {
    id: 1,
    title: 'General Discussion',
    posts: [
      {
        id: 1,
        author: 'User1',
        content: 'Welcome to the general discussion!',
        date: 'April 10, 2023',
      },
    ],
  },
]

const ForumTopic = () => {
  const { id } = useParams<{ id: string }>()
  const topic = forumTopicsData.find((t) => t.id === Number(id))

  if (!topic) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" align="center">Topic not found.</Typography>
      </Container>
    )
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <Container sx={{ mt: 15, mb: 10}}>
      <Typography variant="h3">{topic.title}</Typography>
      <List sx={{ mt: 2 }}>
        {topic.posts.map((post) => (
          <React.Fragment key={post.id}>
            <ListItem alignItems="flex-start">
              <ListItemText primary={`${post.author} - ${post.date}`} secondary={post.content}/>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <form onSubmit={handleSubmit}>
        <TextField label="Your Reply" name="reply" multiline rows={4} fullWidth margin="normal" required/>
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>Post Reply</Button>
      </form>
    </Container>
  )
}

export default ForumTopic