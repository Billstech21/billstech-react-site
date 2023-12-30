import './App.css'
import { airbnb, amazon, calendar } from './assets/images'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ServicesCards from './components/ServicesCards'
import AboutUs from './components/AboutUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'

function App() {

  return (
    <>
    <Navbar />
    <Banner />
    <ServicesCards />
    <AboutUs />
    <ContactUs />
    <Footer />
    </>
  )
}

export default App
