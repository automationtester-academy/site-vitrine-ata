import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Layouts/Layout'
import Home from '../Pages/Home'
import Financement from '../Pages/Financement'
import Contact from '../Pages/Contact'
import NotFound from '../Pages/NotFound'


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