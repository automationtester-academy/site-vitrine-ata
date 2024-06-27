import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Layouts/Layout'
import Home from '../pages/Home'
import Financement from '../pages/FinancementPage'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Formation from '../pages/Formation'
import Ecole from '../pages/Ecole'
import MixLearning from '../pages/MixLearning'

import Ecole from '../pages/Ecole';
import FormationCourte from '../pages/FormationCourte';

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
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/Ecole',
                element: <Ecole />

            },
            {
                path:'/formation-courte',
                element: <FormationCourte/>
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
                path:'/mixlearning',
                element: <MixLearning/>
            },{
                path:'/reconversion',
                element: <ReconversionPro />
            }


        ]
    },


])