import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Financement from '../pages/Financement'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Layout from '../Layouts/Layout'

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
                path:'*',
                element: <NotFound/>
            }

        ]
    },


])