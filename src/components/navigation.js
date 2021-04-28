import React  from 'react';
import Button from './button.js';

function Navigator(props) {
    return (
    <div className="Navigator">
        <nav className="navbar navbar-white bg-white" >
                <a href="#" className="text-dark">
                    {props.Titulo}
                    <span className="badge badge-pill badge-dark ml-2">{props.ntareas}</span>

                </a>
                <Button className="my-2 my-sm-0" cont="aceptar"/>
          </nav> 
    </div>
    );
  }
  
  export default Navigator;

  