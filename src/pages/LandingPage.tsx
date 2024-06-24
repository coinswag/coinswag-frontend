import Description from "../components/landing-page/Description"
import Features from "../components/landing-page/Features"
import Hero from "../components/landing-page/Hero"
import NavBar from "../components/landing-page/NavBar"
import Templates from "../components/landing-page/Templates"
import About from "../components/landing-page/About";
import Footer from "../components/landing-page/Footer"


function LandingPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Description />
      <Templates />
      <About />
      <Footer />
    </div>
  )
}
export default LandingPage