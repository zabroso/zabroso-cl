import './index.css'
import { useReveal } from './hooks/useReveal'
import Nav from './components/Nav'
import Hero from './components/Hero'
import SobrePablo from './components/SobrePablo'
import Galeria from './components/Galeria'
import ElTaller from './components/ElTaller'
import Bitacora from './components/Bitacora'
import Footer from './components/Footer'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <Hero />
      <SobrePablo />
      <Galeria />
      <Bitacora />
      <ElTaller />
      <Footer />
    </>
  )
}
