import './App.css';
import Header from './components/Header';
import Accueil from './components/Accueil';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Recommandations from './components/Recommandations';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header/>
      <Accueil/>
      <AboutMe/>
      <Portfolio/>
      <Recommandations/>
      <Contact/>
    </>
  );
}

export default App;
