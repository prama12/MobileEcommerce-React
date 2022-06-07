import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
     return (
          <>
               <nav className='w-full bg-white border-b border-gray-50 px-16 py-5 shadow-sm sticky top-0  '>
                    <div className='w-full max-w flex items-center justify-between'>
                         <NavLink to='/' className='flex gap-1 items-center text-sm font-bold hover:text-black text-gray-600 cursor-pointer'>
                              <div>
                                   <img src="Images/Logo.png" alt="logo" />
                              </div>
                              <div>Online Mobile Store</div>
                         </NavLink>
                         <div className='flex gap-6 items-center text-xs font-semibold'>
                              <ul className='hidden lg:flex items-center gap-6 text-gray-800 '>
                                   <li >
                                        <NavLink className='linklist' to='/'>Home</NavLink>
                                   </li>
                                   <li >
                                        <NavLink className='linklist' to='/shop'>Shop</NavLink>

                                   </li>
                                   <li >
                                        <NavLink className='linklist' to='/aboutUs'>About Us</NavLink>
                                   </li>
                                   <li >
                                        <NavLink className='linklist' to='/contact'>Contact</NavLink>
                                   </li>
                              </ul>
                              <ul className='flex items-center gap-4'>
                                   <li>
                                        <NavLink to="/addtocard" className='linklist'>
                                             <svg
                                                  className='w-5'
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  ariaHidden="true" role="img"
                                                  preserveAspectRatio="xMidYMid meet"
                                                  viewBox="0 0 24 24">
                                                  <path
                                                       fill="none" stroke="currentColor"
                                                       strokeLinecap="round" strokeLinejoin="round"
                                                       strokeWidth="1.5"
                                                       d="M3 6h19l-3 10H6L3 6Zm0 0l-.75-2.5M9.992 11h2m2 0h-2m0 0V9m0 2v2M11 19.5a1.5 1.5 0 0 1-3 0m9 0a1.5 1.5 0 0 1-3 0"
                                                  />
                                             </svg>
                                        </NavLink>
                                   </li>
                                   <li>
                                        <NavLink to="/wishlist" className='linklist'>
                                             <svg
                                                  className='w-5'
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  ariaHidden="true"
                                                  role="img"
                                                  preserveAspectRatio="xMidYMid meet"
                                                  viewBox="0 0 24 24">
                                                  <path
                                                       fill="none" stroke="currentColor"
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       stroke-width="2"
                                                       d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"
                                                  />
                                             </svg>
                                        </NavLink>
                                   </li>
                                   <li>
                                        <NavLink to="/myAccount" className='linklist'>
                                             <svg
                                                  className='w-5'
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  ariaHidden="true" role="img"
                                                  preserveAspectRatio="xMidYMid meet"
                                                  viewBox="0 0 24 24">
                                                  <path
                                                       fill="currentColor"
                                                       d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10s10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"
                                                  />
                                             </svg>
                                        </NavLink>
                                   </li>
                              </ul>
                              <div className="font-sans text-black bg-white flex items-center justify-center">
                                   <div className="border rounded overflow-hidden flex">
                                        <input type="text" className="px-4 py-2" placeholder="Search..." />
                                        <button className="flex items-center justify-center px-4 border-l">
                                             <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                  <path
                                                       d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                                                  />
                                             </svg>
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </nav>
          </>
     )
}

export default Navbar
