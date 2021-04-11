import * as  React from 'react';
import { useForm } from "react-hook-form";
interface IFormInput {
  username : string;
  email: string;
  password: string;
  repeatPassword: string
}


const  SignUp:React.FC = () => {
  const { register, formState: { errors }, handleSubmit } = useForm <IFormInput>();
  const onSubmit = (data: IFormInput) => console.log(data);
  
  return (
    <div className=" flex h-screen font-poppins ">
      
      {/* left side */}
      <div className=" flex flex-col align-center p-10  bg-white w-4/5  ">
          <div className="flex justify-between ">
            <div className="font-bold text-2xl cursor-pointer text-blue-900">Shopapp</div>
            <div className=" flex cursor-pointer items-center justify-center rounded-full bg-blue-900 w-12 h-12">
              <span className="mb-1 text-white font-bold text-2xl ">a</span>
            </div>
          </div>

          <div className="h-28 mt-5 "></div>
          <div className="px-10">
            <div className="w-full">
              <div className=" font-semibold text-7xl text-blue-900 text-left">Sign Up</div>
              <div className=" font-semibold text-3xl text-blue-900 opacity-80 text-left mt-9">Let's create your account</div>
            </div>

            <div className="mt-10 flex-grow-0">
              <form onSubmit = { handleSubmit(onSubmit) } >
                <div className="flex flex-col bg-gray-100 w-full rounded-3xl text-blue-900 p-3 pl-7">
                  <label className="text-left mt-2 text-sm  font-semibold opacity-50 text-blue-900" htmlFor="username">Username</label>
                  <input autoComplete="off" className="inline-block h-full p-3 bg-transparent font-bold text-xl pl-0 pt-0 focus:outline-none"  {...register('username', { required: true , minLength:3, maxLength:10 } ) } type="text" placeholder="username"/>
                </div>
                  { errors.username && <span className="text-left text-red-300 inline-block w-full mt-3">Username is required</span> }
                <div className="flex mt-6 flex-col bg-gray-100 w-full rounded-3xl text-blue-900 p-3 pl-7">
                  <label className="text-left mt-2 text-sm  font-semibold opacity-50 text-blue-900" htmlFor="email">Email</label>
                  <input autoComplete="off" className="inline-block h-full p-3 bg-transparent font-bold text-xl pl-0 pt-0 focus:outline-none" { ...register('email', { required: true, pattern:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/}) } name="email"  type="email" placeholder="email"/>
                </div>
                  { errors.email && <span className="text-left text-red-300 inline-block w-full mt-3">Email must be valid</span> }
                <div className="flex space-x-4 flex-grow-0">
                  <div className="flex mt-6 flex-col bg-gray-100 w-1/2 rounded-3xl text-blue-900 p-3 pl-7">
                    <label className="text-left mt-2 text-sm  font-semibold opacity-50 text-blue-900" htmlFor="password">Password</label>
                    <input className="inline-block h-full p-3 bg-transparent font-bold text-xl pl-0 pt-0 focus:outline-none" {...register('password', { required:true, minLength:6})} name="password" type="text" placeholder="password"/>
                  </div>
                  <div className="flex mt-6 flex-col bg-gray-100 w-1/2 rounded-3xl text-blue-900 p-3 pl-7">
                    <label className="text-left mt-2 text-sm  font-semibold opacity-50 text-blue-900" htmlFor="Repeat password">Confirm Password</label>
                    <input className="inline-block h-full p-3 bg-transparent font-bold text-xl pl-0 pt-0 focus:outline-none" {...register('repeatPassword', { required:true, minLength:6})} name="password" type="text" placeholder="password"/>
                  </div>
                </div>
                  { errors.password && <span className="text-left text-red-300 inline-block w-full mt-3">Password is required</span> }
                <button className="text-center font-semibold text-2xl bg-lime-400 w-full mt-16 rounded-3xl text-blue-900 p-7" type="submit">Sign up</button>
                <div className="flex justify-between mt-12 text-lg font-semibold text-blue-800 px-8">
                  <span><a href="#">Forgot password ?</a></span>
                  <span><a href="#">Login</a></span>
                </div>
              </form>
            </div>
          </div>
      </div>
      
      
      <div className=" bg-green-400 w-full flex-shrink-0 " >
        <h1>
          {/* Right side Image Here */}
        </h1>
        
      </div>
        
    </div>
  )
}

export default SignUp
