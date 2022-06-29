import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
     return (
          <>
               {/* hero section  */}
               <div className='hero-gradient w-full h-fit'>
                    <div className='w-full max-w px-14 py-10'>
                         <div className='grid grid-cols-12 gap-5 items-center'>
                              <div className=' w-full col-span-8'>
                                   <div className='w-full grid grid-cols-12 gap-3'>
                                        <div className='col-span-8 w-full flex flex-col gap-5 text-white'>
                                             <div className='text-5xl font-bold'> Get the Latest Dress Models From Us</div>
                                             <div className=' text-lg text-[#DDDDDD]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</div>
                                             <NavLink to="/myProfile"><button className='bg-white hover:bg-gray-200 px-10 py-2 text-blue-600 text-sm font-semibold rounded-sm shadow-sm shadow-gray-400 hover:shadow-md'>Login</button></NavLink>

                                        </div>
                                   </div>
                              </div>
                              <div className='w-full col-span-4 justify-center items-center'>
                                   <div className='border-4 border-white rounded-t-3xl rounded-r-3xl overflow-hidden'>
                                        <img src='Images/hero-img.png' alt='img' />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Home
