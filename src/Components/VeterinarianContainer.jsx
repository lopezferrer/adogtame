import React, {Component} from "react";
import { Link } from 'react-router-dom';
import '../index.css'
import VeterinarianList from './VeterinarianList.jsx'
import EditVeterinarianForm from './EditVeterinarianForm.jsx'

let userAdmin = false
export default class VeterinarianContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idOfVeterinarianToEdit: -1,
            veterinarianCurrentlyBeingEdited: null
        }
    }

    editVeterinarian = (id) => {
        console.log('editVeterinarian is: ',id)

        let veterinarianToEdit = this.props.veterinarians.find(veterinarian => veterinarian.id === id)

        this.setState({ 
            veterinarianCurrentlyBeingEdited: veterinarianToEdit
        })
      }

    updateIdOfVeterinarianToEdit = (id) => {
        this.setState({
            idOfVeterinarianToEdit: id
        })
    }

    handleEditChange = (e) => {
        this.setState({
            veterinarianCurrentlyBeingEdited: {
                ...this.state.veterinarianCurrentlyBeingEdited,
                [e.target.id]: e.target.value
            }
        })
    }

    updateVeterinarian = () => {
        fetch(`${this.props.baseURL}${this.state.idOfVeterinarianToEdit}`, {
            method: 'PUT',
            credentials: "include",
            body: JSON.stringify({
                name: this.state.veterinarianCurrentlyBeingEdited.name,
                address: this.state.veterinarianCurrentlyBeingEdited.address,
                city: this.state.veterinarianCurrentlyBeingEdited.city,
                phone: this.state.veterinarianCurrentlyBeingEdited.phone,
                email: this.state.veterinarianCurrentlyBeingEdited.email,
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
            window.location.href='http://localhost:3000/veterinarians';
        })
        .catch(err => (console.log(err))) 
    }

    render() {
        if(this.state.idOfVeterinarianToEdit === -1) {
            return (
                <div className="veterinarian-home-container">
                    <div className="veterinarian-container">
                        <div className="veterinarian-container-head">
                            <h2>Veterinarians</h2>
                            { userAdmin === true ?
                            <Link to="/veterinarians/new"><button className="new-button">Add New</button></Link>
                            :
                            <></>
                            }
                        </div>
                        <Link className="linktitle" to="/veterinarians">
                        <div className="veterinarian-card">
                            {this.props.veterinarians.map((veterinarian, index) => {
                                return(
                                    <VeterinarianList
                                    key={index}
                                    id={veterinarian.id}
                                    name={veterinarian.name}
                                    address={veterinarian.address}
                                    city={veterinarian.city}
                                    phone={veterinarian.phone}
                                    email={veterinarian.email}
                                    handleEditVeterinarian = {this.props.handleEditVeterinarian}
                                    handleChecked={this.props.handleChecked}
                                    editVeterinarian={this.editVeterinarian}
                                    veterinarianToEdit={this.props.veterinarianToEdit}
                                    handleDeleteVeterinarian = {this.props.handleDeleteVeterinarian}
                                    updateIdOfVeterinarianToEdit = {this.updateIdOfVeterinarianToEdit}
                                    />
                                )
                            })}
                        </div></Link>    
                    </div>
                </div>
            )

        }else{
            return(
                <EditVeterinarianForm
                idOfVeterinarianToEdit = {this.state.idOfVeterinarianToEdit}
                veterinarianCurrentlyBeingEdited = {this.state.veterinarianCurrentlyBeingEdited}
                handleEditChange = {this.handleEditChange}
                handleChecked={this.props.handleChecked}
                updateVeterinarian = {this.updateVeterinarian}/>
            )
        } 
    }
}