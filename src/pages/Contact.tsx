import React from 'react'
import { Box, Typography, Container, TextField, Button } from '@mui/material'

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <Container sx={{ mt: 15, mb: 10}}>
      <Typography variant="h3" align="center">Contact Us</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto' }}>
        <TextField label="Name" name="name" fullWidth margin="normal" required/>
        <TextField label="Email" name="email" type="email" fullWidth margin="normal" required/>
        <TextField label="Message" name="message" multiline rows={4} fullWidth margin="normal" required/>
        <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>Send Message</Button>
      </Box>
    </Container>
  )
}

export default Contact