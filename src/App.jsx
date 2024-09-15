import './App.css'
import Footer from './Components/Footer/Footer'
import Avatars from './Components/LandingComponents/Avatars/Avatars'
import CharactersGrid from './Components/LandingComponents/CharactersGrid/CharactersGrid'
import IntroLanding from './Components/LandingComponents/IntroLanding/IntroLanding'

function App() {

  return (
    <>
      <IntroLanding />
      <CharactersGrid />
      <Avatars />
      <Footer />
    </>
  )
}

export default App
