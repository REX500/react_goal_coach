import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
// styles
import './style.css';
// routes
import { Link } from 'react-router';

class SingIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    };
  }

  signIn() {
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email,password)
      .catch(error => {
        this.setState({error});
      });
  }

  render() {
    return (
      <div className='form-inline'>
        <h2>Sign In</h2>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            placeholder='email'
            onChange={event => {this.setState({email: event.target.value})}}
            onKeyPress={event => { if (event.key === 'Enter') this.signIn(); }}
            />
          <input
            className='form-control'
            type='password'
            placeholder='password'
            onChange={event => {this.setState({password: event.target.value})}}
            onKeyPress={event => { if (event.key === 'Enter') this.signIn(); }}
            />
          <button
            className='btn btn-primary'
            type='button'
            onClick={() => this.signIn()}
            > Sign In</button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to='/signup'>Sign Up</Link></div>
      </div>
    )
  }
}

export default SingIn;
