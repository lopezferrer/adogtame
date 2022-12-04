import React, {Component} from "react";
import { Link } from 'react-router-dom';
import '../index.css'

export default class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <p><strong>Organización de Ayuda Animal Los Teques - Las Tejerías</strong><br/>
                Calle 5 con Carrera 24,<br/>
                Las Tejerías, Estado Aragua,<br/>
                Venezuela<br/>
                Contactos: (0424)555-5555 | contacto@adogtame.com
                </p>
            </div>
        )
    }
}