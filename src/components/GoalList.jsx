import React, { Component } from 'react';
// components
import GoalItem from './GoalItem';
// firebase
import { goalRef } from '../firebase';
// redux
import { setGoals } from '../actions';
import { connect } from 'react-redux';

class GoalList extends Component{
  componentDidMount() {
    goalRef.on('value', goals => {
      let goalsArray = [];
      goals.forEach(goal => {
        const {email, title} = goal.val();
        const goalId = goal.key;
        goalsArray.push({email, title, goalId});
      });
      this.props.setGoals(goalsArray);
    });
  }

  render() {
    const {goals} = this.props;
    return (
      <div>{
          goals.map((goal, index) => {
            return (
              // <li key={index} className='goal-list-item'>
              //   {goal.title}  {goal.email}
              // </li>
              <GoalItem key={index} goal={goal}/>
            )
          })
        }</div>
    );
  }
}

function mapStateToProps(state) {
  const {goals} = state;
  return {
    goals
  };
}

// setGoals is from actions and will add a goal to the array
export default connect(mapStateToProps, { setGoals })(GoalList);
