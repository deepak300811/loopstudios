import "./App.css";
import React from "react";
import Hero from "./components/hero-section/Hero";
import Overview from "./components/overview-section/Overview";
import Creations from "./components/creations";
import Footer from "./components/Footer";
import Backdrop from "./components/Backdrop";
import VerticalMenu from "./components/VerticalMenu";

function App() {
  const [showBackdrop, setShowBackdrop] = React.useState(false);
  return (
    <div className="App">
      <Hero setShowBackdrop={setShowBackdrop} showBackdrop={showBackdrop} />
      <Overview />
      <Creations />
      <Footer />
      {showBackdrop && (
        <Backdrop>
          <VerticalMenu />
        </Backdrop>
      )}
    </div>
  );
}

export default App;
