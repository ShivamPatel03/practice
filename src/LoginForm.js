import React from 'react'
import"./LoginForm.css";
const form = () => {
  return (
    <div className='container'>
 
      <div className='container1'><h1>sign up</h1>
     <div><input type ="text" name="fname" value="your name"></input></div>
     <div><input type ="text" name="fname" value="your email"></input></div>
     <div><input type ="text" name="fname" value="password"></input></div>
     <div><input type ="text" name="fname" value="repeat your password"></input></div>
     <button type="button">register</button>
      </div>
      <div className='container2'></div>

    </div>
  )
}

export default form