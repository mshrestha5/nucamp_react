import React from "react";
import "./App.css";
import CampsitesList from "./features/campsites/CampsitesList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <CampsitesList campsite={CAMPSITES[0]} /> */}
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
