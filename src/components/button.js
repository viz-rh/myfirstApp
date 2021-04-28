import React from 'react';

class Button extends React.Component{

    render(){
        return(
        <button type="button" className="btn btn-outline-dark">{this.props.cont}</button>
        );
    }
    
}
export default Button