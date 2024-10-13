import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material'

const pricingPlans = [
  {
    title: 'Basic',
    price: '$0',
    features: ['Feature A', 'Feature B'],
    buttonText: 'Get Started',
  },
  {
    title: 'Pro',
    price: '$49',
    features: ['Feature A', 'Feature B', 'Feature C'],
    buttonText: 'Upgrade Now',
  },
  {
    title: 'Enterprise',
    price: '$99',
    features: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
    buttonText: 'Contact Us',
  },
]

const PricingTemplate = () => (
  <Container sx={{ mt: 15, mb: 10 }}>
    <Typography variant='h3' align='center'>
      Pricing Plans
    </Typography>
    <Grid container spacing={4}>
      {pricingPlans.map((plan, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant='h5'>{plan.title}</Typography>
              <Typography variant='h4' color='primary'>
                {plan.price}
              </Typography>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <Typography variant='body1'>{feature}</Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardActions>
              <Button fullWidth variant='contained' color='primary'>
                {plan.buttonText}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
)

export default PricingTemplate
