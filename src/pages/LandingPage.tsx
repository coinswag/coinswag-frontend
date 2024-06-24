import Description from "../components/landing-page/Description"
import Features from "../components/landing-page/Features"
import Hero from "../components/landing-page/Hero"
import NavBar from "../components/landing-page/NavBar"
import Templates from "../components/landing-page/Templates"

function LandingPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Description />
      <Templates />
    </div>
  )
}
export default LandingPage