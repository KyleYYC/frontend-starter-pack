import { useState } from 'react'
import { Container, TextField, Button, Typography } from '@mui/material'
import { useAuth } from '../contexts/AuthContext'

function SignIn() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await signIn(email, password)
  }

  return (
    <Container maxWidth="sm" sx={{marginY: '15%'}}>
      <Typography variant="h4" component="h1">Sign In</Typography>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField label="Email" fullWidth margin="normal" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <TextField label="Password" type="password" fullWidth margin="normal" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button type="submit" variant="contained" color="primary" fullWidth>Sign In</Button>
      </form>
    </Container>
  )
}

export default SignIn