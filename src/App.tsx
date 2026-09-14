import './index.css'
import { useReveal } from './hooks/useReveal'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ProofStats from './components/ProofStats'
import ValueProps from './components/ValueProps'
import Planes from './components/Planes'
import Incluido from './components/Incluido'
import Mantencion from './components/Mantencion'
import ComoFunciona from './components/ComoFunciona'
import Trabajos from './components/Trabajos'
import FAQ from './components/FAQ'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStats />
        <ValueProps />
        <Planes />
        <Incluido />
        <Mantencion />
        <ComoFunciona />
        <Trabajos />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
