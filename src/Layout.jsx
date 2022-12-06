import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

export default class Layout extends React.Component {
  logout = (e) => {
    e.preventDefault()
    fetch('http://localhost:8000/api/v1/user/logout', {
      method: 'GET',
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }})
    .then (res => {
      if(res.ok) {
        res.clone().json().then(_json => {
          window.localStorage.removeItem("loggedUser");
        })
        return res.json()
      }
      throw new Error(res)
    })
    .catch(e => {
      console.log("e::> ",e);
    })
  }



  render() {
    return (
        <div className='adogtame-container'>
          <div className="apps-container">
            <Header logout={this.logout}/>
            <Outlet />
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </div>
    )
  }
}