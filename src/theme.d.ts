import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    customColor?: string
  }
  interface PaletteOptions {
    customColor?: string
  }

  interface Theme {
    status: {
      danger: string
    }
  }
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}