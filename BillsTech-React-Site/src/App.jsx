import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ServicesCards from './components/ServicesCards'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
    {loading ? (
      // Content to be displayed while loading
        <Preloader />
    ) : (
      // Content to be displayed when not loading
      <div>
        <Navbar />
        <Banner />
        <ServicesCards />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    )}
  </>
  );
};

export default App
