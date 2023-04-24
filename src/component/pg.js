import React,{useState} from 'react';
import { render } from 'react-dom';
import './style.css';
import axios from "axios"

const App = () => {
  const[email, setEmail]=useState('');
  const[password, setPassword]=useState('');
  const handleSubmit =async(event)=>{
    event.preventDefault();
    
try{
const response = await axios.post(' https://reqres.in/api/login',{
  email,
  password
})
console.log(response)
const token = response.data.token
localStorage.setItem("token",token);
}catch(error){

  console.log(error)

}
  }

  return (
    <div>
      <div>
        <div>
          <h3>Hello there, Sign in to continue</h3>

          <div>
            <form>
              <div>
                <label>Username/Email</label>
                <input type="text"  onChange={(event)=>setEmail(event.target.value)}/>
                <div></div>
              </div>
              <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                <div></div>
              </div>
              <button onClick={handleSubmit}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
