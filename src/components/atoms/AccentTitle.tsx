import { Typography } from '@mui/material'

interface AccentTitleProps {
  children: React.ReactNode
  sx?: object
}

const AccentTitle = ({ children, sx }: AccentTitleProps) => (
  <Typography
    fontWeight={600}
    color={'#00FF00'}
    letterSpacing={3}
    sx={sx}
    mb={1}
  >
    {children}
  </Typography>
)

export default AccentTitle
