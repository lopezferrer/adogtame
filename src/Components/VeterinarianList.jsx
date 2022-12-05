import React, {Component} from "react";
import '../index.css'

let userAdmin = false
export default class VeterinarianList extends Component {

    render() {
        return (
            <div>
                <div className="veterinarian">
                    <div className="veterinarian-name">
                        <h3>{this.props.name}</h3>
                    </div>
                    <p><span>Address: </span>{this.props.address}</p>
                    <p><span>City: </span>{this.props.city}</p>
                    <p><span>Phone: </span>{this.props.phone}</p>
                    <p><span>e-mail: </span>{this.props.email}</p>
                    { userAdmin === true ?
                    <div>
                        <button className="edit-button" onClick={()=> {
                            this.props.editVeterinarian(this.props.id);
                            this.props.updateIdOfVeterinarianToEdit(this.props.id);
                            //window.location.href=`/veterinarians/edit?id=${this.props.id}`
                        }}>Edit</button>
                        <button className='delete-button' onClick={() => {
                            this.props.handleDeleteVeterinarian(this.props.id);
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