import React, {Component} from 'react';

class addItem extends Component {
    state = {
        content:""
    }
    handleChange = (e)=>{
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
        // console.log(this.props)
        this.props.addTodo(this.state);
        this.setState({
            content:'' 
        })
    }
    render(){
         return ( 
    <div>
        <form onSubmit={this.handleSubmit}>
        <label >Enter your todo item</label>
        <input type="text" onChange={this.handleChange} value={this.state.content}></input>
        </form>  
    </div>    
    )
    }
}
    

export default addItem