import React from 'react';
import { Link } from "react-router-dom";



const Header = () => {
    return ( 

        <>
        <ul>
        <li>
        <Link to="/aboutme">About Me</Link>
        </li>
        
        <li>
        <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
        <Link to="/contact">Contact Me</Link>
        </li>
        </ul>

        </>


        
     );
}
 
export default Header;