import { Outlet } from 'react-router-dom'
import FooterComponent from './components/footer/FooterComponent'
import FooterPartenaires from './components/footer/FooterPartenaires.jsx'
import './assets/css/App.css'

function App() {

  return (
    <>
    <div className='user-page'>
      {/* Salima Here hoti Header dyalek */}
      <Outlet />
      <FooterPartenaires />
      <FooterComponent />
    </div>
      
    </>
  )
}

export default App