import React, { Component } from 'react'
import { connect } from 'react-redux';
 
class CreateTodo extends Component {
	state = {
		todoText: ""
	}
	handleChange = event => {
		this.setState({
			todoText: event.target.value
		})
	}
	// handleSubmit = event => {
	// 	event.preventDefault()
	// 	this.props.addTodo(this.state.todoText)
	// }
	handleSubmit = event => {
		event.preventDefault()
		if(this.state.todoText === "") return;
		this.props.dispatch({ type: "ADD_TODO", payload: this.state.todoText })
		this.setState({ todoText: "" })
	}
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" value={this.state.todoText} onChange={this.handleChange} />
          </p>
          <input type="submit" />
        </form>
	      <p>{this.state.todoText}</p>
      </div>
    );
  }
};

// const mapDispatchToProps = (dispatch) => ({ addTodo: data => dispatch({ name: "ADD_TODO", payload: data }) })
 
// export default connect(null, mapDispatchToProps)(CreateTodo);
export default connect()(CreateTodo)