import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center px-4'>
      <div className='border-2 rounded-xl border-blue-600 p-8 sm:p-20 w-full max-w-md'>
        <form 
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
            <input
            value={email} 
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            required 
            className='outline-none bg-transparent border-2 border-blue-600 text-lg sm:text-xl py-3 px-5 rounded-full placeholder:text-gray-400 w-full' type="email" placeholder='Enter your email' 
            />
            <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required 
            className='outline-none bg-transparent border-2 border-blue-600 text-lg sm:text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400 w-full' 
            type="Password" placeholder='Enter Password' />
            <button className='mt-5 text-white border-none outline-none bg-green-600 text-lg sm:text-xl py-3 px-5 rounded-full placeholder:text-white w-full'>
              Log in
            </button>
        </form>
      </div>
    </div>
  )
}

export default Login