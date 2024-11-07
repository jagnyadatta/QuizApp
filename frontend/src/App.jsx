import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/Profile'
import QuizePage from './components/QuizePage'

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
  {
    path:"/profile",
    element: <Profile/>
  },
  {
    path:"/playground",
    element: <QuizePage/>
  },
])

function App() {

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default App
