
import './App.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParaComp from './components/ParaComp';
import Notfound from './components/Notfound';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>

    },
    {
      path:"/about",
      element: 
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"/dashboard",
      element: 
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:'/Courses',
          element:<Courses/>
        },
        {
          path:'mock-tests',
          element:<MockTest/>
        },
        {
          path:'/reports',
          element:<Reports/>
            
        }
      ]
    },
    {
      path: "/student/:id",
      element: 
      <div>
        <Navbar/>
        <ParaComp />
      </div>
    },
    {
      Path: '*',
      element:<Notfound />
    }
  ]
);

function App() {

  return (
    
   <div>
   <RouterProvider router={router} />
   </div>
   // <Navbar/>
      
  )
}

export default App
