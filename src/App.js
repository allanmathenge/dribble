import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Hello from "./components/Hello"
import Home from "./components/Home"
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-w-[100%] font-sans text-[10px] flex flex-col justify-center items-center">
      <Navbar />
      <Hero />
      <Hello />
      <Home />
      <Services />
      <Footer />
    </main>
  );
}

export default App;
