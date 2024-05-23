import { Outlet } from "react-router-dom"
import Header from "./Header"
export default function Layout(){
    return (
    <>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <footer>footer</footer>
    </body>
    </html>
    
    </>
    )
}