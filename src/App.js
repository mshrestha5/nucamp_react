import React from "react";
import "./App.css";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      {/* <CampsitesList campsite={CAMPSITES[0]} /> */}
      <Header />
      {/* <CampsitesDirectoryPage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="directory" element={<CampsitesDirectoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
