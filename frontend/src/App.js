import "./App.css";
import { LenisScroll } from './components/LenisScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DesignProcess } from './components/DesignProcess';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <LenisScroll>
      <div className="App">
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Portfolio />
        <Services />
        <WhyChooseUs />
        <DesignProcess />
        <FAQ />
        <Contact />
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </LenisScroll>
  );
}

export default App;
