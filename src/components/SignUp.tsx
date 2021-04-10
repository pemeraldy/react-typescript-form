import * as  React from 'react';
import { useForm } from 'react-hook-form';

interface IFormInput {
  username : string;
  email: string;
  password: string;
}

interface User {
  email: string
  password: string
}

const  SignUp:React.FC = () => {
  
  const [ email, setEmail ] = React.useState ()
  const [ password, setPassword ] = React.useState ()

  const handleChange = (e:any) => {
    const {name, value, id } = e.target;
    if (name === 'email'){
      console.log(`${name} is ${value} and id is ${id}`)
      setEmail(value);
      return
    }
    if(name === 'password'){
      console.log(`${name} is ${value}`);
      setPassword(value)
      return
    }
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log({
      email: email,
      password: password
    });
  }
  return (
    <div className=" flex h-screen ">
      <div className=" flex flex-col justify-center  bg-blue-100 w-4/5 ">
          <h1>Sign up page</h1>
          <div>
            <form onSubmit = { handleSubmit }>
              <div>
                <label htmlFor="email">Email</label>
                <input onChange={ handleChange } name="email" id="emil" type="text" placeholder="email"/>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input name="password" onChange = { handleChange } type="text" placeholder="password"/>
              </div>
              <button type="submit">Sign up</button>
              <div>
                <span>Forgot password ?</span>
                <span>Login</span>
              </div>
            </form>
          </div>
      </div>
      <div className=" bg-red-100 w-full " >
        <h1>
          Right side Image Here
        </h1>
        
      </div>
        
    </div>
  )
}

export default SignUp
