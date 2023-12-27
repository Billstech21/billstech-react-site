import './App.css'
import { airbnb, amazon, calendar } from './assets/images'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ServicesCards from './components/ServicesCards'
import AboutUs from './components/AboutUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Banner />
    <ServicesCards />
    <AboutUs />
    <Testimonials />
    <Footer />
    </>
  )
}

export default App
