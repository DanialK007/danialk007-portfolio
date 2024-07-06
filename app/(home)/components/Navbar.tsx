import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Navbar() {
  return (
    // <div className='fixed top-0 left-0 z-50 w-full py-5'>
    //     <div className="max-w-screen-xl mx-auto flex items-center justify-between">
    //         <div className="">DanialK</div>  
    //         <div className="flex gap-8">
    //             <FaGithub />
    //             <FaLinkedin />
    //             <FaInstagram />
    //         </div>
    //     </div>
    // </div>
    <>
      <div className="fixed top-5 left-0 w-full z-[999]">
          <div className="flex items-center justify-center gap-8 bg-light/5 backdrop-blur-md border border-light/20 w-fit mx-auto p-2">
            <a href="" className='font-mono text-xl px-2'>Danial.K</a>
            <a href="" className='uppercase hidden lg:block'>Services</a>
            <a href="" className='uppercase hidden lg:block'>Projects</a>
            <a href="" className='uppercase hidden lg:block'>About</a>
            <a href="" className='uppercase hidden lg:block'>Blog</a>
            <a href="" className='uppercase text-dark py-2 px-3 bg-light rounded-sm'>Let's Talk</a>
          </div>
      </div>
    </>
  )
}

export default Navbar
