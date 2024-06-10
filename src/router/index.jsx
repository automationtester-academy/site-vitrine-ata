import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Layouts/Layout'
import Home from '../pages/Home'
import Financement from '../pages/FinancementPage'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Ecole from '../pages/Ecole'

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },    
            {
                path:'/Financement',
                element: <Financement/>
            },
            {
                path:'/Contact',
                element: <Contact/>
            },
            {
                path:'/Ecole',
                element: <Ecole />

            },
            {
                path:'*',
                element: <NotFound/>
            }


        ]
    },


])