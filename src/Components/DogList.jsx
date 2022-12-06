import React, {Component} from "react";
import '../index.css'

let user = JSON.parse(window.localStorage.getItem('loggedUser'));
export default class DogList extends Component {

    render() {
        return (
            <div>
                <div className="dog">
                    <h3>{this.props.name}</h3>
                    <img src={this.props.image1} alt={this.props.name} className="image1"/>
                    <h4>Age: <span>{this.props.age} year(s) old</span> </h4>
                    <h4>Breed: <span>{this.props.breed}</span></h4>
                    <h4>City: <span>{this.props.city}</span></h4>
                    { (user != null && user.username === this.props.username) || (user != null && user.admin === true)?
                    <div>
                        <button className="edit-button" onClick={()=> {
                            this.props.editDog(this.props.id);
                            this.props.updateIdOfDogToEdit(this.props.id);
                            //window.location.href=`/dogs/edit?id=${this.props.id}`
                        }}>Edit</button>
                        <button className='delete-button' onClick={() => {
                            this.props.handleDeleteDog(this.props.id);
                        }}>Delete</button>
                    </div>
                    :
                    <></>
                    }
                </div>
            </div>
        )
    }
} 