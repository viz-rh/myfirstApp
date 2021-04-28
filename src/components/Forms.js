import React, {Component} from 'react';
class forms extends Component{
    constructor(){
        super();
        this.state = {
            title : '',
            responsable : '',
            description : '',
            priority : 'low'
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInput(e){
        const {value, name} =e.target
        this.setState({
            [name]: value
        })

    }
    handleSubmit(e){
        e.preventDefault()
this.props.OnAddData(this.state)
    }
    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                        type="text"
                        name="title"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="titulo"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="responsable"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="reponsable"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="descripcion"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="descripcion"
                        />
                    </div>
                    <div className="form-group">
                        <select
                        name="priority"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="prioridad"
                        >
                        <option>low</option>
                        <option>medium</option>
                        <option>higth</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-outline-primary" type="submit">guardar</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default forms