import React from 'react';

import logo from './logo.svg';
import './App.css';
import Navigator from './components/navigation.js'
import Forms from './components/Forms.js'
import {Todos} from './todos.json';
const Fs = require('fs')
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      title: 'aplicacion de tareas',
      Todos,
      ntareas: '10'
    }
    this.handleAddData = this.handleAddData.bind(this)
    this.Guardar = this.Guardar.bind(this)
  
  }
  
  Guardar(a){
    let  list= []
      
      a.map((Todo1, i) => {
        list.push(Todo1)
      })
      JSON.stringify(list)
      let jsontext =console.log(list) 
      Fs.writeFileSync('./todos.json',jsontext, 'utf-8')
    }
  
  handleAddData(data){
    let  Data2= [...this.state.Todos, data]
    this.setState({
      Todos: Data2
    })
this.Guardar(Data2)
  }

  handleDelete(index){
    if (window.confirm("esta seguro de eliminar esta tarea")){
      let data = this.state.Todos.filter((e,i)=>{
        return i !==index
      })
      this.setState({
      Todos: data
    })
    this.Guardar(data)
  
  }}


  render(){
    const _todos= this.state.Todos.map((Todo, i) => {
    
      return(
        <div key={i} className="col-md-4">
          <div className="card mt-5">
          <div className="card-header">
            <h3>{Todo.title}</h3>
            <span className="badge badge-pill badge-danger ml-2">{Todo.priority}</span>
          </div>
          <div className="card-body">
            <p><mark>{Todo.descripcion}</mark></p>
            <p>{Todo.responsable}</p>
          </div>
          <div className="card-foother">
            <button
            className="btn btn-danger"
            onClick= {this.handleDelete.bind(this,i)}
            >Delete</button>
          </div>
        </div>
      
        </div>
      )  
    })

      return(
        <div className="App">
        <Navigator Titulo={this.state.title} ntareas={this.state.Todos.length}/>
        <Navigator Titulo="hola" ntareas={this.state.Todos.length}/>
        <div className="container-md">
          <div className="row mt-4">
            <div className="col col-md-3">
              <div className="row justify-content-md-center">
               
                  <img src={logo} className="App-logo" alt="logo" />
                
               
                <Forms OnAddData={this.handleAddData}/>
              </div>
            </div>
            <div className="col col-md-9">
              <div className="row">
              {_todos}
              </div>
            </div>
          
          </div>
        </div>
      
         
        
        
      </div>
      );
  }
  
}

export default App;
