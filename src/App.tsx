import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <div className="container">
        <Services />
      </div>
       <Gallery />
      
      <Contact />
    </>
  );
}

export default App;
