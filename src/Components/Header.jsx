import React from 'react';
import { Link } from "react-router-dom";
import '../index.css'


let baseURL= 'http://localhost:8000/api/v1/'
let user = undefined //Necesito la variable user para usarla en este componente y poder pasarla a otros donde tambiên será necesaria, según los permisos que tenga el usuario.

export default class Header extends React.Component {

  logout = (e) => {
    e.preventDefault()
    fetch('http://localhost:8000/api/v1/user/logout')
    //;
  }

  render(){
    return (
        <div className="header">
        <Link className="linktitle"><div className="logo-and-name">
          <img className="logo" src="/adogtame.png" alt="logo"/>
          <h1><span>aDOGtame</span></h1>
        </div></Link>
        <div className="navbar">
          <div className="content-bar">
            <ul>
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
          {user === undefined ?
          <div className="user-bar">
            <ul>
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
                {`Hi, ${user}!`}
              </li>
              <li>
                <button className="linkstyle-last" onClick={this.props.logout}
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