import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Layouts/Layout'
import Home from '../pages/Home'
import Financement from '../pages/FinancementPage'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Formation from '../pages/Formation'
import Ecole from '../pages/Ecole'
import ReconversionPro from '../pages/ReconversionPro'



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
            },
            {
                path:'/Formation',
                element: <Formation/>
            },
            {
                path:'/reconversion',
                element: <ReconversionPro />
            }


        ]
    },


])