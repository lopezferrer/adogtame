import React from 'react'
import '../index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import VeterinarianContainer from './VeterinarianContainer.jsx'


let baseURL = 'http://localhost:8000/api/v1/veterinarians/'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        veterinarians: [{
          name: '',
          address: '',
          city: '',
          phone: '',
          email: ''
        }],
      baseURL: 'http://localhost:8000/api/v1/veterinarians/'
    };
    this.handleChecked = this.handleChecked.bind(this);
  }
  getVeterinarians = () => {
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
        veterinarians:data.data
      })
    });
  }

  handleDeleteVeterinarian = (id) => {
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

  editVeterinarian = (id) => {
    console.log('editVeterinarian is:' + id)
  }

  handleChecked () {
    this.setState({vaccines: !this.state.veterinarians.vaccines});
  }

  componentDidMount(){
    this.getVeterinarians();
  }

  render(){
    return (
      <div className="veterinarians-app-container">  
          <VeterinarianContainer veterinarians={this.state.veterinarians} editVeterinarian={this.editVeterinarian} veterinarianToEdit={this.state.veterinarianToEdit} handleDeleteVeterinarian={this.handleDeleteVeterinarian} handleChecked={this.handleChecked} baseURL={this.state.baseURL}/>
      </div>
    )
  }
}