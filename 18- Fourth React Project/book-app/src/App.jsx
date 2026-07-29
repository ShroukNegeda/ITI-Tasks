import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Library from './components/Library/Library'
import About from './components/About/About'
import Featured from './components/Featured/Featured'
import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout/Layout'
import Catalog from './components/Catalog/Catalog'
import NotFound from './components/NotFound/NotFound'
import Genre from './components/Genre/Genre'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {path: '/', element: <Layout/>, children: [
      {index: true, element: <Home/>},
      {path: 'library', element: <Library/>, children:
        [{path: 'genre', element: <Genre/>}]},
      {path: 'about', element: <About/>},
      {path: 'featured', element: <Featured/>},
      {path: 'catalog', element: <Catalog/>},
      {path: '*', element: <NotFound/>},
    ]},
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App