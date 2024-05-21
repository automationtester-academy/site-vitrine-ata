import { useState } from 'react'
import { router } from './router/index'
import {RouterProvider} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <RouterProvider router={router}/>
      {/* <h1 className="text-3xl font-bold underline text-center bg-red-200">Hello world!</h1> */}
    </>
  )
}

export default App
