import styles from './landingPage.module.css'
import HeroSection from '../../components/hero-section/heroSection'
import TheBrand from '../../components/theBrand/theBrand'
import CanBeCrazy from '../../components/can-be-crazy/canBeCrazy'
import TheClassic from '../../components/theClassic/theClassic'
import Footer from '../../components/footer/footer'

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <TheBrand />
      <CanBeCrazy />
      <TheClassic />
      <Footer />
    </main>
  )
}

export default LandingPage
