import { Outlet } from 'react-router-dom'
import FooterComponent from './components/footer/FooterComponent'
import FooterPartenaires from './components/footer/FooterPartenaires.jsx'


function App() {

  return (
    <>
      <Outlet />
      <FooterPartenaires />
      <FooterComponent />
    </>
  )
}

export default App