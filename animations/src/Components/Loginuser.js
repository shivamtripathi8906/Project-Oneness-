import React from 'react';
import { useState, useEffect } from 'react';
import "../CSS/Login.css";
import { Redirect } from 'react-router-dom';

function Loginuser() {

    const [data, setData] = useState("");
    const [name, setname] = useState(null);
    const [password, setpassword] = useState("");
    const [present, setPresent] = useState(false);
    const [sucess, setSucess] = useState(false);
    const [sucessMessage, setSucessMessage] = useState(false);

    useEffect(() => {
        
        fetch("http://localhost:3000/user")
          .then(res => res.json())
          .then(result =>
               setData(result)
          )
          .catch(console.log);
      
  }, []);
  console.log(data) 

const loginAPI=()=>{
    if(name!=="" && password!==""){
    let flag=0;

    for(let i=0;i<data.length;i++)
    {
        if(data[i].name===name){
          flag=flag+1;
        }
    }
    if(flag===1)
    {
        let id=0;
        for(let k=0;k<data.length;k++)
        {
            if(name===data[k].name)
              id=k;
        }
        if(name===data[id].name && password===data[id].password)
        {
         setSucess(true);
         
        }
        else{
            setSucessMessage(true);
        }
    }
    else{
        setPresent(true);
    }
    console.log(flag);
}
}
console.log(sucess);
  return (
    <div className='create'>
         {(sucess) && <Redirect to="/home" props={name}  />}
     <p>Log In</p>
     <input type="text" placeholder='Username' className='name-holder'  onChange={(e) => setname(e.target.value)} />
     <input type="password" placeholder='Password' className='password-create' onChange={(e) => setpassword(e.target.value)}/>

     <button className='create-button' onClick={()=>{loginAPI()}}>Log In</button>
     {(present) && <p className='exists'>User does not exists</p>}
     {(sucessMessage) && <p className='exists'>Wrong Password</p>}
    </div>
  )
}

export default Loginuser