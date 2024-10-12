import React from 'react'
import './ChooseUser.css'

const ChooseUser = () => {
  return (
    <div className='userContainer'>
      <div className='chooseUser'>
        <div className="user">
          <h4>Login in as Admin</h4>
          <button>Login</button>
        </div>
        <div className="user">
          <h4>Login in as Teacher</h4>
          <button>Login</button>
        </div>
        <div className="user">
          <h4>Login in as Teacher</h4>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default ChooseUser