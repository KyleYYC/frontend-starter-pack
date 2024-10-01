import React from 'react'
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

interface ForumTopic {
  id: number
  title: string
  posts: number
  lastPostDate: string
}

const forumTopics: ForumTopic[] = [
  {
    id: 1,
    title: 'General Discussion',
    posts: 150,
    lastPostDate: 'April 10, 2023',
  },
  {
    id: 2,
    title: 'Feature Requests',
    posts: 75,
    lastPostDate: 'April 12, 2023',
  },
  {
    id: 3,
    title: 'Support',
    posts: 200,
    lastPostDate: 'April 11, 2023',
  }
]

const Forums = () => (
  <Container sx={{ mt: 15, mb: 10}}>
    <Typography variant="h3" align="center">Forums</Typography>
    <List sx={{ mt: 2 }}>
      {forumTopics.map((topic) => (
        <React.Fragment key={topic.id}>
          <ListItem component={RouterLink} to={`/forums/${topic.id}`}>
            <ListItemText primary={topic.title} secondary={`Posts: ${topic.posts} | Last Post: ${topic.lastPostDate}`}/>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  </Container>
)

export default Forums