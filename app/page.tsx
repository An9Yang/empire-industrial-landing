import { Navbar, Footer } from '@/components/layout'
import {
  Hero,
  ValueBar,
  About,
  Industries,
  Products,
  Services,
  Sustainability,
  Contact,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueBar />
        <About />
        <Industries />
        <Products />
        <Services />
        <Sustainability />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
