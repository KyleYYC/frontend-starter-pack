import CustomHeader from './components/organisms/Header/CustomHeader'
import CustomFooter from './components/organisms/Footer/CustomFooter'
import AppRoutes from './routes'
import { AuthProvider } from './contexts/AuthContext'

function App() {

  return (
    <AuthProvider>
      <AppRoutes />
      <CustomHeader />
      <CustomFooter />
    </AuthProvider>
  )
}

export default App