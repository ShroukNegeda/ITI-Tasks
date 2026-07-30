import { Routes, Route } from 'react-router-dom'
import AppContextProvider from './context/AppContext'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Gallery from './components/Gallery/Gallery'
import Register from './components/Register/Register'
import Pizza from './components/Pizza/Pizza'
import NotFound from './components/NotFound/NotFound'

export default function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="hero" element={<Hero />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="register" element={<Register />} />
          <Route path="send" element={<Pizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppContextProvider>
  )
}