import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigator from './components/navigation.js'
import {Todos} from './todos.json';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      title: 'aplicacion de tareas',
      ntareas: '10',
      Todos
    }
  }

  render(){
    const _todos= this.state.Todos.map((Todo, i) => {
      return(
        <div className="col-md-4">
          <div className="card">
          <div className="card-header">
            <h3>{Todo.title}</h3>
          </div>
          <div className="card-body">
            <p>{Todo.descripcion}</p>
          </div>
        </div>
      
        </div>
      )  
    })
      return(
        <div className="App">
        <Navigator Titulo={this.state.title + " - " + this.state.ntareas }/>
        <div className="container">
          <div className="row mt-4">
          {_todos}
          </div>
        </div>
      
          <img src={logo} className="App-logo" alt="logo" />
        
        
      </div>
      );
  }
  
}

export default App;
