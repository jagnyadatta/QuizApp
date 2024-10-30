import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path:"/login",
    element: <Login/>
  },
])

function App() {

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default App
