import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
     return (
          <>
               <section className='w-full bg-[#393E46] sm:px-16 py-14 px-5'>
                    <div className='md:grid md:grid-cols-12 max-w gap-8 w-full text-white flex flex-col'>
                         <div className=' md:col-span-5 flex flex-col gap-5'>
                              <NavLink to='/' className='flex gap-1 items-center font-bold cursor-pointer'>
                                   <div>
                                        <img src="Images/Logo.png" alt="logo" />
                                   </div>
                                   <div className='text-white text-xs hover:text-gray-100'>Online Mobile Store</div>
                              </NavLink>
                              <div className='text-white text-xs font-thin text-justify '>
                                   In the following tutorial you will learn to create a gummy text effect. Perfect for illustrative designs, you will create a cute and fun lettering effect using the Offset Path function and various other coloring techniques.
                              </div>

                              <div>
                                   <button className='bg-white hover:bg-blue-600 px-4 py-2 text-blue-600 hover:text-white text-sm font-semibold rounded-md shadow-sm shadow-black hover:shadow-md'><NavLink to="/login">Login Now</NavLink></button>
                              </div>
                         </div>
                         <div className=' md:col-span-7 lg:grid w-full lg:grid-cols-12 flex flex-col gap-5 text-xs font-thin '>
                              <div className='lg:col-span-8 grid grid-cols-3'>
                                   <div className='flex flex-col gap-3'>
                                        <h1 className='text-sm font-bold'>Home</h1>
                                        <div className='flex flex-col gap-1'>
                                             <p>Product</p>
                                             <p>category</p>
                                             <p>Shop</p>
                                             <p>Log in</p>
                                        </div>
                                   </div>
                                   <div className='flex flex-col gap-3'>
                                        <h1 className='text-sm font-bold'>Shop</h1>
                                        <div className='flex flex-col gap-1'>
                                             <p>Product</p>
                                             <p>category</p>
                                             <p>Shop</p>
                                             <p>Log in</p>
                                        </div>
                                   </div>
                                   <div className='flex flex-col gap-3'>
                                        <h1 className='text-sm font-bold'>Categories</h1>
                                        <div className='flex flex-col gap-1'>
                                             <p>Product</p>
                                             <p>category</p>
                                             <p>Shop</p>
                                             <p>Log in</p>
                                        </div>
                                   </div>
                              </div>

                              <div className='lg:col-span-4 w-full flex flex-col gap-3'>
                                   <h1 className='text-sm font-bold'>Contact</h1>
                                   <div className='flex flex-col gap-3'>
                                        <p><a>mangcoding@gmail.com</a></p>
                                        <ul className='flex gap-5'>
                                             <li>
                                                  <a>
                                                       <img src='Images/facebook.png' />
                                                  </a>
                                             </li>
                                             <li>
                                                  <a>
                                                       <img src='Images/twetter.png' />
                                                  </a>
                                             </li>
                                             <li>
                                                  <a>
                                                       <img src='Images/linkedin.png' />
                                                  </a>
                                             </li>
                                             <li>
                                                  <a>
                                                       <img src='Images/instagram.png' />
                                                  </a>
                                             </li>

                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default Footer
