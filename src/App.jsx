import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import PlanetsSection from './components/PlanetsSection'
import PlanetaryTable from './components/PlanetaryTable'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <PlanetsSection />
        <PlanetaryTable />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
