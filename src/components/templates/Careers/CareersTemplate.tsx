import { Container, Typography, Box, List, ListItem, ListItemText, Button } from '@mui/material'

const jobListings = [
  { title: 'Frontend Developer', location: 'Remote' },
  { title: 'Backend Developer', location: 'New York, NY' },
  { title: 'UI/UX Designer', location: 'San Francisco, CA' },
]

const CareersTemplate = () => (
  <Container sx={{ mt: 15, mb: 10}}>
    <Typography variant="h3" align="center" >Careers</Typography>
    <Box sx={{ mt: 2 }}>
      <Typography variant="body1">
        Join our team and help us build amazing products!
      </Typography>
      <List>
        {jobListings.map((job, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={job.title} secondary={`Location: ${job.location}`}/>
            <Button variant="contained" color="primary">Apply</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  </Container>
)

export default CareersTemplate