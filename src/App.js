import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./services/routes";
import "./App.scss";
// import LogRocket from 'logrocket';


import Header from "./ui/static/header/Header"
import Footer from "./ui/static/footer/Footer";

function App() {
  // LogRocket.init('syzobk/catering-kitchen');
  
  return (
    <>
      <BrowserRouter forceRefresh>
        <Header />
        <Routes  />
        <Footer />
      </BrowserRouter>   
    </>
  );
}

export default App;