import React, {Component} from "react";
import '../index.css'


export default class DogList extends Component {

    render() {
        return (
            <div>
                <div className="dog">
                    <h3>Name: <span>{this.props.name}</span></h3>
                    <img src={this.props.image1} alt={this.props.name} className="image1"/>
                    <h3>Age: <span>{this.props.age} year(s) old</span> </h3>
                    <h3>Breed: <span>{this.props.breed}</span></h3>
                    <h3>City: <span>{this.props.city}</span></h3>
                    <button className="edit-button" onClick={()=> {
                        this.props.editDog(this.props.id);
                        this.props.updateIdOfDogToEdit(this.props.id);
                        //window.location.href=`/dogs/edit?id=${this.props.id}`
                    }}>Edit</button>
                    <button className='delete-button' onClick={() => {
                        this.props.handleDeleteDog(this.props.id);
                    }}>Delete</button>
                </div>
            </div>
        )
    }
} 