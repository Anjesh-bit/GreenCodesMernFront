import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from './utils/Auth';
const Guard = () => {

    return (
        isAuthenticated() && isAuthenticated().role === "admin" ? <Outlet /> : <Navigate to='/unauthorized' />
    )
}
export default Guard;