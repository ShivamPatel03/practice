import {useState, userState} from "react"

export default function Test(){
    const [userName,setUserName]= useState("Shivam");
    const [userAge,setUserAge]= useState(26);
    const [userActive,setUserActive]= useState(true);
    const [count,setCount]= useState(0)

    let name= "Patel";
    const changeName=()=>{
        name="Shivam Patel"
        console.log(name);
        setUserName("Hello Shivam Patel")

        
    }
    function increment(){
        setCount(count + 1)
    }
    function decrement(){
        setCount(count - 1)
    }
return(
    <div>
    <h1>Hey</h1>
    <h1>{userAge}</h1>
    <h1>{userName}</h1>
    <h1>{userActive}</h1>
    <button onClick={changeName}>  Change </button>
    <br>

    </br>
    <br>

    </br>
    <button onClick={increment}> Increment </button>
    <span> {count} </span>
    <button  onClick={decrement} > Decrement </button>

    </div>
)
}