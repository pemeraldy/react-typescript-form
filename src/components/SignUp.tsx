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
              <form autoComplete="false" onSubmit = { handleSubmit(onSubmit) } >
                <div className="flex relative flex-col bg-gray-100 w-full rounded-3xl text-blue-900 p-3 pl-7">
                  <label className="text-left mt-2 text-sm  font-semibold opacity-50 text-blue-900" htmlFor="username">Username</label>
                  <input autoComplete="off" className="inline-block h-full p-3 bg-transparent font-bold text-xl pl-0 pt-0 focus:outline-none"  {...register('username', { required: true , minLength:3, maxLength:10 } ) } type="text" placeholder="username"/>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 absolute top-1/3 right-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </div>
                  { errors.username && <span className="text-left text-red-300 inline-block w-full mt-3">Username is required</span> }
                <div className="flex relative mt-6 flex-col bg-gray-100 w-full rounded-3xl text-blue-900 p-3 pl-7">
                  <label className="text-left mt-2 text-sm  font-semibold opacity-50 text-blue-900" htmlFor="email">Email</label>
                  <input autoComplete="off" className="inline-block h-full p-3 bg-transparent font-bold text-xl pl-0 pt-0 focus:outline-none" { ...register('email', { required: true, pattern:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/}) } name="email"  type="email" placeholder="email"/>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 absolute top-1/3 right-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clipRule="evenodd" />
                  </svg>
                </div>
                  { errors.email && <span className="text-left text-red-300 inline-block w-full mt-3">Email must be valid</span> }
                <div className="flex  space-x-4 flex-grow-0">
                  <div className="flex relative mt-6 flex-col bg-gray-100 w-1/2 rounded-3xl text-blue-900 p-3 pl-7">
                    <label className="text-left mt-2 text-sm  font-semibold opacity-50 text-blue-900" htmlFor="password">Password</label>
                    <input className="inline-block h-full p-3 bg-transparent font-bold text-xl pl-0 pt-0 focus:outline-none" {...register('password', { required:true, minLength:6})} name="password" type="text" placeholder="password"/>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 absolute top-1/3 right-6" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex relative mt-6 flex-col bg-gray-100 w-1/2 rounded-3xl text-blue-900 p-3 pl-7">
                    <label className="text-left mt-2 text-sm  font-semibold opacity-50 text-blue-900" htmlFor="Repeat password">Confirm Password</label>
                    <input className="inline-block h-full p-3 bg-transparent font-bold text-xl pl-0 pt-0 focus:outline-none" {...register('repeatPassword', { required:true, minLength:6})} name="password" type="text" placeholder="password"/>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 absolute top-1/3 right-6" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                  { errors.password && <span className="text-left text-red-300 inline-block w-full mt-3">Password is required</span> }
                <button className="text-center hover:bg-lime-500 font-semibold text-2xl bg-lime-400 w-full mt-16 rounded-3xl text-blue-900 p-7" type="submit">Sign up</button>
                <div className="flex justify-between mt-12 text-lg font-semibold text-blue-800 px-8">
                  <span><a href="#">Forgot password ?</a></span>
                  <span><a href="#">Login</a></span>
                </div>
              </form>
            </div>
          </div>
      </div>
      
      
      <div className=" bg-blue-900 w-full flex-shrink-0 " >
        <h1>
          {/* Right side Image Here */}
        </h1>
        
      </div>
        
    </div>
  )
}

export default SignUp
