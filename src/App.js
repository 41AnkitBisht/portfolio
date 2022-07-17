import './App.css';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hobbies from './components/Hobbies';
import Intro from './components/Intro';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <TechStack />
      <Experience />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
