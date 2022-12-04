import React from 'react'
import '../index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DogContainer from '../Components/DogContainer.jsx'


let baseURL = 'http://localhost:8000/api/v1/dogs/'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        dogs: [{
          name: '',
          age: parseInt(''),
          breed: '',
          personality: '',
          city: '',
          contact_number: '',
          vaccines: '',
          image1: '',
          image2: ''
        }],
      baseURL: 'http://localhost:8000/api/v1/dogs/'
    }
  }
  getDogs = () => {
    fetch(baseURL)
    .then ((res) => {
      if (res.status === 200) {
        return res.json();
      }else{
        return [];
      }
    })
    .then((data) => {
      this.setState({
        dogs:data.data
      })
    });
  }

  handleDeleteDog = (id) => {
    fetch(`${baseURL}${id}`, {
      method:'DELETE',
      credentials: "include"
    })
    .then(res => {
      if (res.ok) {
          return res.json()
      } throw new Error(res)
    })
    .then(window.location.href='http://localhost:3000/');
  }

  editDog = (id) => {
    console.log('editDog is:' + id)
  }

  componentDidMount(){
    this.getDogs();
  }

  render(){
    return (
      <div className="dogs-app-container">  
          <DogContainer dogs={this.state.dogs} editDog={this.editDog} dogToEdit={this.state.dogToEdit} handleDeleteDog={this.handleDeleteDog} baseURL={this.state.baseURL}/>
      </div>
    )
  }
}