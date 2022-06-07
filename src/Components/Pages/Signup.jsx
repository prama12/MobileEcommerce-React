import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
     return (
          <>
               <div className='bg-login px-5 sm:px-16 py-8'>
                    <div className='md:grid grid-cols-2 gap-5 w-full max-w'>
                         <div>
                              <h1 className='text-white text-2xl font-bold mb-8'>My Account</h1>
                              <h2 className='text-white text-lg font-bold mb-5'>Sign Up</h2>
                              <p className='font-thin text-white text-xs mb-3'>You have account? <span className='font-semibold cursor-pointer hover:text-gray-100'> <NavLink to="/login" >Login</NavLink></span></p>
                              <div className='mb-6 flex gap-7'>
                                   <button className='bg-white text-black text-xs font-semibold hover:bg-gray-100 px-5 py-2 flex items-center gap-5 rounded-sm '>
                                        <img src="Images/google.png" />
                                        Google
                                   </button>
                                   <button className='bg-white text-black text-xs font-semibold hover:bg-gray-100 px-5 py-2 flex items-center gap-5 rounded-sm'>
                                        <img src="Images/facebook-along.png" />
                                        Facebook
                                   </button>
                              </div>
                              <div className="flex flex-col">
                                   <div className="gap-4 mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                                        <div className="">
                                             <label className="block  text-sm font-bold mb-2 text-white" for="firstname">
                                                  First Name
                                             </label>
                                             <input className="shadow-sm  border rounded-sm w-full py-2 px-3 " id="firstname" type="text" placeholder="First Name" />
                                        </div>
                                        <div className="">
                                             <label className="block  text-sm font-bold mb-2 text-white" for="lastname">
                                                  Last Name
                                             </label>
                                             <input className="shadow-sm  border rounded-sm w-full py-2 px-3 " id="lastname" type="text" placeholder="Last Name" />
                                        </div>
                                   </div>
                                   <div className="mb-4">
                                        <label className="block  text-sm font-bold mb-2 text-white" for="email">
                                             Email
                                        </label>
                                        <input className="shadow-sm  border rounded-sm w-full py-2 px-3 " id="email" type="email" placeholder="Email" />
                                   </div>
                                   <div className="mb-4">
                                        <label className="block text-white text-sm font-bold mb-2" for="password">
                                             Password
                                        </label>
                                        <input className="shadow appearance-none border border-red rounded-sm w-full py-2 px-3  mb-3" id="password" type="password" placeholder="Password" />
                                   </div>
                                   <div className="">
                                        <label className="block text-white text-sm font-bold mb-2" for="password">
                                             Re-Password
                                        </label>
                                        <input className="shadow appearance-none border border-red rounded-sm w-full py-2 px-3  mb-3" id="password" type="password" placeholder="Password Again" />
                                   </div>
                                   <div className='flex items-center mb-6'>
                                        <div class="form-check text-xs flex items-center">
                                             <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200  bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                                             <label class="form-check-label inline-block text-white" for="flexCheckDefault">
                                                  Remember Me
                                             </label>
                                        </div>
                                   </div>
                                   <div className="flex items-center justify-end">
                                        <button className='bg-white hover:bg-gray-200 px-8 py-2 text-blue-600 text-sm font-semibold rounded-sm shadow-sm shadow-black hover:shadow-md'><NavLink to="/login">Sign Up</NavLink></button>

                                   </div>
                              </div>
                         </div>
                         {/* <div className=' rounded-md overflow-hidden hidden md:flex'>
                              <img src="Images/mobile.png" className='w-full h-full' />
                         </div> */}
                    </div>
               </div>
          </>
     )
}

export default Signup
