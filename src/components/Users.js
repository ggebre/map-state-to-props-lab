import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, index )=> <li key={index}>UserNamme: {user.username} HomeTown: {user.hometown}</li>)}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
