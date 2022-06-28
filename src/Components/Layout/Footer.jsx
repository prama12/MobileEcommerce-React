import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
     return (
          <>
               <section className='w-full bg-[#393E46] sm:px-16 py-14 px-5'>
                    <div className='md:grid md:grid-cols-12 max-w gap-6 md:gap-16 w-full text-white flex flex-col'>
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
                                   <NavLink to="/login"> <button className='bg-white hover:bg-blue-600 px-8 py-2 text-blue-600 hover:text-white text-sm font-semibold rounded-sm shadow-sm shadow-black hover:shadow-md animation'>Login Now</button></NavLink>
                              </div>
                         </div>
                         <div className=' md:col-span-7 lg:grid w-full lg:grid-cols-12 flex flex-col gap-5 text-xs font-thin'>
                              <div className='lg:col-span-8 grid grid-cols-3 w-full '>
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
                                        <ul className='flex gap-3'>
                                             <li>
                                                  <a href="https://facebook.com" target='_blank' className='border-2 px-2 py-1 rounded text-sm    text-white hover:bg-blue-600 hover:border-blue-600 animation' >
                                                       <i className="fa-brands fa-facebook-square"></i>
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="https://twitter.com" target='_blank' className='border-2 px-2 py-1 rounded text-sm text-white hover:bg-white hover:text-blue-600 hover:border-white animation   ' >
                                                       <i className="fa-brands fa-twitter"></i>
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="https://linkedin.com" target='_blank' className='border-2 px-2 py-1 rounded text-sm    text-white hover:bg-blue-600 hover:border-blue-600 animation' >
                                                       <i className="fa-brands fa-linkedin"></i>
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="https://instagram.com" target='_blank' className='border-2 px-2 py-1 rounded text-sm    text-white bg-gradient-to-r from-[#393E46] to-[#393E46]  transition-all duration-500 ease-in-out hover:from-pink-500 hover:to-yellow-200' >
                                                       <i className="fa-brands fa-instagram"></i>

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
