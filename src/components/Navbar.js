import React from 'react';
// navbar

const navBar = ()=>{

    return ( 
    <nav className="nav-wraper blue">
        <div className="container logo">
            <a href="#" className="brand-logo">GLT-TODO App</a>
            <a href="#" className="sidebar-trigger">
            <i className="material-icons">menu</i>
            </a>
                <ul className="right hide-on-med-and-sm">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
        </div>
    </nav>    
    )

}
    

export default navBar