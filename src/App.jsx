import Gallery from "./Pages/Gallery";
import GetService from "./Pages/GetService";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Services from "./components/Services";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
       
            <Header />
          <Routes>

            <Route
              path="/"
              element={
                <div>
                  <Hero />
                  <Benefits />
                
                  <Services />
               
                </div>
              }
            />

            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/getservice" element={<GetService/>} />

          </Routes>
        

            <Footer />
      
      
      </div>



      <ButtonGradient />
    </>
  );
};

export default App;
