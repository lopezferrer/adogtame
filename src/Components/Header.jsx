import React from 'react';
import { Link } from "react-router-dom";
import '../index.css'

let user = JSON.parse(window.localStorage.getItem('loggedUser'));

export default class Header extends React.Component {


  render(){
    return (
        <div className="header">
        <Link to="/" className="linktitle"><div className="logo-and-name">
          <img className="logo" src="/adogtame.png" alt="logo"/>
          <h1><span>aDOGtame</span></h1>
        </div></Link>
        <div className="navbar">
          <div>
            <ul className="content-bar">
              <li>
                <Link className="linkstyle" to="/">Home</Link>
              </li>
              <li>
                <Link className="linkstyle" to="/dogs">Adopt</Link>
              </li>
              <li>
                <Link className="linkstyle" to="/articles">Articles</Link>
              </li>
              <li>
                <Link className="linkstyle" to="/veterinarians">Veterinarians</Link>
              </li>
            </ul>
          </div>
          {user === null ?
          <div>
            <ul className="user-bar">
              <li>
                <Link className="linkstyle" to="/register">Register</Link>
              </li>
              <li>
                <Link className="linkstyle-last" to="/login">Login</Link>
              </li>
            </ul>
          </div>
            :
          <div className="user-bar">
            <ul>
              <li>
                <p>{`Hi, ${user.username}!`}</p>
              </li>
              <li>
                <button className="logout-button" onClick={this.props.logout}
                    >Logout</button>
              </li>
            </ul>
          </div>
          }
        </div>
      </div>
    )
  }
}