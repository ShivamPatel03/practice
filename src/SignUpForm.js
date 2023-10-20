// import {useState, userState} from "react"
// export default function SignUpForm(){

//     const [errorMessages, setErrorMessages] = useState({});
//     const [isSubmitted, setIsSubmitted] = useState(false);
// }
import React, { useState } from "react";
import "./SignUpForm.css";


//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Here, you can add your form validation logic
//     // For example, check if the fields are empty, if the email is valid, etc.
//     // Update the errorMessages state accordingly.

//     // If the form is valid, you can set setIsSubmitted to true to indicate a successful submission.
//   };

//   return (
//     <div className="signup-form">
//   <h2>Sign Up</h2>
//   <form onSubmit={handleSubmit}>
//     <div>
//       <label htmlFor="username">Username</label>
//       <input
//         type="text"
//         id="username"
//         name="username"
//         value={formData.username}
//         onChange={handleChange}
//       />
//       {errorMessages.username && <p>{errorMessages.username}</p>}
//     </div>
//     <div>
//       <label htmlFor="email">Email</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       {errorMessages.email && <p>{errorMessages.email}</p>}
//     </div>
//     <div>
//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         id="password"
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//       />
//       {errorMessages.password && <p>{errorMessages.password}</p>}
//     </div>
//     <button type="submit">Sign Up</button>
//   </form>
// </div>
//   );
// }
export default function SignUpForm() {
// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const getUserData=()=>{
//   console.log(name,email,password)
// const [user, setUserData] = useState({
  const [userData, setUserData] = useState({
       userName: "",
       userEmail: ""
       })

       const getUserData =()=>{
       console.log(userData)
      }
return (
  <>
   Name : <input type="text" onChange={(e)=>setUserData({userData,userName :e.target.value})}/>
   Email : <input type="text" onChange={(e)=>setUserData({userData,userEmail :e.target.value})}/>
  
  <h1>{userData.userName}</h1>

  <button onClick={getUserData}>Get data</button> 

  </>
)
}
