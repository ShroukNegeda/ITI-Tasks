import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Gallery from './Pages/Gallery/Gallery'
import GalleryOverview from './Pages/Gallery/GalleryOverview'
import Photos from './Pages/Gallery/Photos'
import Store from './Pages/Store/Store'
import NotFound from './Components/NotFound/NotFound'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />}>
            <Route index element={<GalleryOverview />} />
            <Route path="photos" element={<Photos />} />
          </Route>
          <Route path="store" element={<Store />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)