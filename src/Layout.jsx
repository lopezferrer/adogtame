import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

export default class Layout extends React.Component {
  
  render() {
    return (
        <div className='adogtame-container'>
          <div className="apps-container">
            <Header />
            <Outlet />
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </div>
    )
  }
}