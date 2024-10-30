import Nav from '../components/layout/Nav'
import HeroSection from '../components/layout/Hero'
import Features from '../components/layout/Features'
import Services from '../components/layout/Services'
import Footer from '../components/layout/Footer'


const HomePage = () => {

    return <section className='body'>
        <Nav />
        <HeroSection />
        <Features />
        <Services />
        <Footer />
    </section>

}

export default HomePage
