import React from 'react';
import '../index.css'
import DogsApp from '../Components/DogsApp.jsx'
import ArticlesApp from '../Components/ArticlesApp.jsx'

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <DogsApp />
        <ArticlesApp />
      </div>
    )
  }
}
