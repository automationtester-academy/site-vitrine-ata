import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import FooterComponent from "../components/footer/FooterComponent"
export default function Layout(){
    return (
    <>
    <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <FooterComponent />
    </div>    
    </>
    )
}