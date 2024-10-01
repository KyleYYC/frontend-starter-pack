import { Navigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import { PrivateRouteProps } from '../../../types/components/PrivateRoute'

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { isAuthenticated } = useAuth()
    return isAuthenticated ? children : <Navigate to="/signin" />
}

export default PrivateRoute