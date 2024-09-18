import { Button, Typography, Container } from '@mui/material';
import Header from './components/organisms/Header';

function App() {
  return (
    <>
      <Header title="My Application" />
      <Container>
        <Typography variant='h1' color='primary'>
          Welcome to My MUI App
        </Typography>
        <Button variant='contained' color='secondary'>
          Click Me
        </Button>
      </Container>
    </>
  );
}

export default App
