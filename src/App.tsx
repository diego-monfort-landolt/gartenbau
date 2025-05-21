import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import GartenpflegeGartenbau from "./components/GartenpflegeGartenbau";
import Gartenpflege from "./components/Gartenpflege";
import Natursteinarbeiten from "./components/Natursteinarbeiten";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <div className="container">
        <Services />
      </div>
      <GartenpflegeGartenbau />
      <Gartenpflege />
      <Natursteinarbeiten />
       <Gallery />
      <Contact />
    </>
  );
}
export default App;
