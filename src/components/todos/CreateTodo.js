import React, { Component } from 'react';
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state ={
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
  // };

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>Add Todo</label>
            {/* every time the user changes the input field we should call handleChange function */}
            <input type="text" onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData})
  }
}
//this.props.addTodo(this.state), since this.state is an oject with only one property

export default connect(null, mapDispatchToProps)(CreateTodo);
//export default connect()(CreateTodo);

