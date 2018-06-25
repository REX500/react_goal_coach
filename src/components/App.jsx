import React, { Component } from 'react';
// firebase
import { firebaseApp } from '../firebase';
// redux
import { connect } from 'react-redux';
// components
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {

  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className='App'>
        <h3>Goal Coach</h3>
        <AddGoal />
        <hr />
        <h4>Goals</h4>
        <GoalList />
        <hr />
        <h4>Complete Goals</h4>
        <CompleteGoalList />
        <hr />
        <button
          className='btn btn-danger'
          type='button'
          onClick={() => this.signOut()}
          >Sign Out</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, null)(App);
