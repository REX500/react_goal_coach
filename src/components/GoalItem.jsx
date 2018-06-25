import React, { Component } from 'react';
import './style.css';
import { completeGoalRef, goalRef } from '../firebase';
import { connect } from 'react-redux';

class GoalItem extends Component {
  completeGoal() {
    const {email} = this.props.user;
    const {title, goalId} = this.props.goal;
    // add goal to completed list
    completeGoalRef.push({
      email, title
    });
    // remove goal from goals table
    goalRef.child(goalId).remove();
  }

  render() {
    const {email, title} = this.props.goal;
    return(
      <div className='goal-item'>
        <strong>{title}</strong>
        <span className='goal-item-span'> submitted by <em>{email}</em></span>
        <button
          className='btn btn-sm btn-primary'
          onClick={() => this.completeGoal()}
          >
          Complete
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {user} = state;
  return {
    user
  };
}

export default connect(mapStateToProps, null)(GoalItem);
