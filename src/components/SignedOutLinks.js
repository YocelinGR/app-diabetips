import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
    return(
        <ul className= "right">
            <li><NavLink to ='/'>Conocenos</NavLink></li>
            <li><NavLink to ='/'>Ingresar</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;