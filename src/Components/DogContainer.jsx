import React, {Component} from "react";
import { Link } from 'react-router-dom';
import '../index.css'
import DogList from './DogList.jsx'
import EditDogForm from './EditDogForm.jsx'


export default class DogContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idOfDogToEdit: -1,
            dogCurrentlyBeingEdited: null
        }
    }

    editDog = (id) => {
        console.log('editDog is: ',id)

        let dogToEdit = this.props.dogs.find(dog => dog.id === id)

        this.setState({ 
            dogCurrentlyBeingEdited: dogToEdit
        })
      }

    updateIdOfDogToEdit = (id) => {
        this.setState({
            idOfDogToEdit: id
        })
    }

    handleEditChange = (e) => {
        this.setState({
            dogCurrentlyBeingEdited: {
                ...this.state.dogCurrentlyBeingEdited,
                [e.target.id]: e.target.value
            }
        })
    }

    updateDog = () => {
        fetch(`${this.props.baseURL}${this.state.idOfDogToEdit}`, {
            method: 'PUT',
            credentials: "include",
            body: JSON.stringify({
                name: this.state.dogCurrentlyBeingEdited.name,
                age: this.state.dogCurrentlyBeingEdited.age,
                breed: this.state.dogCurrentlyBeingEdited.breed,
                personality: this.state.dogCurrentlyBeingEdited.personality,
                city: this.state.dogCurrentlyBeingEdited.city,
                contact_number: this.state.dogCurrentlyBeingEdited.contact_number,
                vaccines: this.state.dogCurrentlyBeingEdited.vaccines,
                image1: this.state.dogCurrentlyBeingEdited.image1,
                image2: this.state.dogCurrentlyBeingEdited.image2
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } throw new Error(res)
        })
        .then(resJson => {
            window.location.href='http://localhost:3000/dogs/adopt';
        })
        .catch(err => (console.log(err))) 
    }

    render() {
        if(this.state.idOfDogToEdit === -1) {
            return (
                <div className="home-container">
                    <div className="dog-container">
                        <div className="dog-container-head">
                            <h2>Adopt</h2>
                            <Link to="/dogs/new"><button className="new-button">Add New</button></Link>
                        </div>
                        <Link className="linktitle" to="/dogs">
                        <div className="dog-card">
                            {this.props.dogs.map((dog, index) => {
                                return(
                                    <DogList
                                    key={index}
                                    id={dog.id}
                                    name={dog.name}
                                    age={dog.age}
                                    breed={dog.breed}
                                    personality={dog.personality}
                                    city={dog.city}
                                    contact_number={dog.contact_number}
                                    vaccines={dog.vaccines}
                                    image1={dog.image1}
                                    image2={dog.image2}
                                    handleEditDog = {this.props.handleEditDog}
                                    handleChecked={this.props.handleChecked}
                                    editDog={this.editDog}
                                    dogToEdit={this.props.dogToEdit}
                                    handleDeleteDog = {this.props.handleDeleteDog}
                                    updateIdOfDogToEdit = {this.updateIdOfDogToEdit}
                                    />
                                )
                            })}
                        </div></Link>    
                    </div>
                </div>
            )

        }else{
            return(
                <EditDogForm
                idOfDogToEdit = {this.state.idOfDogToEdit}
                dogCurrentlyBeingEdited = {this.state.dogCurrentlyBeingEdited}
                handleEditChange = {this.handleEditChange}
                handleChecked={this.props.handleChecked}
                updateDog = {this.updateDog}/>
            )
        } 
    }
}  