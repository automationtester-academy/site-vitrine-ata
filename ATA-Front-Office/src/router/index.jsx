import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../views/HomePage';
import FinancementPage from '../views/FinancementPage';
import App from '../App';
const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/financement',
                element: <FinancementPage />
            }
        ]
    },
    
])
export default router;