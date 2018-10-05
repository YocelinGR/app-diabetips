import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
    return(
        <ul className= "right">
            <li><NavLink to ='/'>Mis Post</NavLink></li>
            <li><NavLink to ='/LogUp'>Mis Perfil</NavLink></li>
            <li><NavLink to ='/' className = "btn btn-floating pink lighten-1">Salir</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;