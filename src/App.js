import './App.css';
import Navbar from './components/navbar';
import LandingPage from './components/LandingPage';
import OurProcess from './components/OurProcess';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className="">
      <ParallaxProvider>
        <Navbar />
        <LandingPage />
        <OurProcess />
      </ParallaxProvider>
    </div>
  );
}

export default App;
