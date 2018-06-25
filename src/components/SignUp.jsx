import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
// styles
import './style.css'
// routes
import { Link } from 'react-router';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signUp() {
    console.log('state', this.state);
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
          this.setState({error})
      });
  }

  render() {
    return (
      <div className='form-inline'>
        <h2>Sign Up</h2>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            placeholder='email'
            onChange={event => this.setState({email: event.target.value})}
            onKeyPress={event => { if (event.key === 'Enter') this.signUp(); }}
            />
          <input
            className='form-control'
            type='password'
            placeholder='password'
            onChange={event => this.setState({password: event.target.value})}
            onKeyPress={event => { if (event.key === 'Enter') this.signIn(); }}
            />
          <button className='btn btn-primary' type='button' onClick={() => this.signUp()}>Sign Up</button>
        </div>
        <div className='signUp-error'>{this.state.error.message}</div>
        <div><Link to='/signin'>Already a user? Sign in!</Link></div>
      </div>
    )
  }
}

export default SignUp;
