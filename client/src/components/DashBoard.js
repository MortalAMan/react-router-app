import React from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth';

const DashBoard = () => {
  if (isAuthenticated()) {
    return (
      <div>
        <h3>You Are Logged In</h3>
      </div>
    )
  } else {
    return <Redirect to='/Login' />
  }
}

export default DashBoard;
