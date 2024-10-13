import { Container, Typography, Box, TextField, Button } from '@mui/material'

const SearchTemplate = () => (
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Search
      </Typography>
      <Box component="form" noValidate>
        <TextField
          fullWidth
          label="Search"
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Search
        </Button>
      </Box>
    </Box>
  </Container>
)

export default SearchTemplate