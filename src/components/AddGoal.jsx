import React, { Component } from 'react';
// styles
import './style.css';
// firebase
import { goalRef } from '../firebase';
// redux
import { connect } from 'react-redux';

class AddGoal extends Component{
  constructor(props) {
      super(props);

      this.state = {
        title: ''
      }
  }

  addGoal() {
    const {title} = this.state;
    const {email} = this.props;
    goalRef.push({
      email,
      title
    });
  }

    render() {
      return (
        <div className='form-inline'>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Enter a goal...'
              className='form-control'
              onChange={event => this.setState({title: event.target.value})}
              onKeyPress={event => {if (event.key === 'Enter') this.addGoal();}}
              />
            <button
              className='btn btn-success'
              type='button'
              onClick={() => this.addGoal()}
              >
              Submit
            </button>
          </div>
        </div>
      )
    }
}

function mapStateToProps(state) {
  const {email} = state.user;
  return {
    email
  }
}

export default connect(mapStateToProps, null)(AddGoal);
