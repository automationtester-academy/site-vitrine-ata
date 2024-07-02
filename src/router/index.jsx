import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Layouts/Layout'
import Home from '../pages/Home'
import Financement from '../pages/FinancementPage'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Formation from '../pages/Formation'
import Ecole from '../pages/Ecole'
import MixLearning from '../pages/MixLearning'
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
                path:'/financement',
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
                path:'*',
                element: <NotFound/>
            },
            {
                path:'/Formation',
                element: <Formation/>
            },
            {
                path:'/FormationCourte',
                element: <FormationCourte/>
            },
            {
                path:'/Formation-courte',
                element: <FormationCourte/>
            },
            {
                path:'/mixlearning',
                element: <MixLearning/>
            },
            {
                path:'/reconversion',
                element: <ReconversionPro />
            }


        ]
    },


])