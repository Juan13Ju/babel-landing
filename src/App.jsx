import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import FeatureSection from './components/FeatureSection/FeatureSection'
import CTASection from './components/CTASection/CTASection'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className='fluid-container'>
        <section className='bg-gray-100'>
          <Hero />
        </section>
        <section className="bg-gray-50 py-20">
          <FeatureSection />
        </section>
        <section id='form-section'>
          <CTASection />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
