import '../index.css'
import { useReveal } from '../hooks/useReveal'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Incluye from './components/Incluye'
import Precio from './components/Precio'
import ComoFunciona from './components/ComoFunciona'
import FAQ from './components/FAQ'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <Hero />
      <Incluye />
      <Precio />
      <ComoFunciona />
      <FAQ />
      <Contacto />
      <Footer />
    </>
  )
}
