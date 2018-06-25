import React, { Component } from 'react';
import { completeGoalRef } from '../firebase';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';

class CompleteGoalList extends Component {
  componentDidMount() {
    // run through all completed goals
    completeGoalRef.on('value', completedGoal => {
      let completedGoalsArray = [];
      completedGoal.forEach(completeGoal => {
        const {email, title} = completeGoal.val();
        // add to array
        completedGoalsArray.push({email, title});
      });
      this.props.setCompleted(completedGoalsArray);
    });
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    return (
      <div>
        {
          this.props.completedGoals.map((completedGoal, index) => {
            const {title, email} = completedGoal;
            return (
              <div key={index}>
                <strong>{title}</strong> completed by <em>{email}</em>
              </div>
            );
          })
        }
        <button
          className='btn btn-primary'
          onClick={() => this.clearCompleted()}
          >Clear All</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {completedGoals} = state;
  return {
    completedGoals
  }
}

export default connect(mapStateToProps, {setCompleted})(CompleteGoalList);
