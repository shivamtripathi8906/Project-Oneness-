import React, { useEffect } from 'react';
import "../CSS/Login.css";
// import data from "../db.json";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


function Login() {

    const [name, setname] = useState(null);
    const [password, setpassword] = useState("");
    const [sucess, setSucess] = useState(false);
    const[present, setPresent] = useState(false)
    
    const [data, setData] = useState("")
    // 

    useEffect(() => {
        
            fetch("http://localhost:3000/user")
              .then(res => res.json())
              .then(result =>
                   setData(result)
              )
              .catch(console.log);
          
      }, []);
    
    const setuser=()=>{
        if(name!=="" && password!==""){
        let flag=0;

      for(let i=0;i<data.length;i++)
      {
          if(data[i].name===name){
                  flag=flag+1;              
          }        
      }
      if(flag===0)
          {
            fetch("http://localhost:3000/user", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify
              ({
                  name: name,
                  password: password,
                })
            }
            
              );
              setSucess(true);
          }
          else
          setPresent(true);



        } 
    }
    console.log(present)

  return (
    <div className='header'>
        {/* {(sucess) && <Redirect to="/home" props={name}  />} */}
        {(sucess) && <Redirect to={{
            pathname: '/home',
            state: { id: name }
        }}
/>}
        <div className="create">
            <p>Create User</p>
            <input type="text" placeholder='Name' className='name-holder' onChange={(e) => setname(e.target.value)}/>
            <input type="password" placeholder='Password' className='password-create' onChange={(e) => setpassword(e.target.value)} />
            <button className='create-button' onClick={()=>setuser()}>Create account</button>
            <Link to="/login" className='login-button' >Have an account? Log In insted</Link>
            {(present) && <p className='exists'>Account exists</p>}
        </div>
    </div>
  )
}



  export default Login;