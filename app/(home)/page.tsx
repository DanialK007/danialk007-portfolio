import React from 'react'
import Navbar from './components/Navbar'
import Image from 'next/image'
import Hero from './components/Hero'
import Service from './components/Service'
import { FaArrowRight } from 'react-icons/fa'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />

      <div className="p-8">
        <div className="flex justify-between items-center px-8">
          <div className="text-3xl">Selected Work</div>
          <a href='' className="group flex gap-2 items-center justify-center">
              <div className="p-2 bg-light/40 rounded-full -rotate-45 group-hover:rotate-0 duration-100">
                  <FaArrowRight size={10} />
              </div>
              <div className="text-light/80 uppercase">See All</div>
          </a>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 py-10 lg:px-8">
          <a href='#' className="relative border border-light/20 h-[460px]">
            <Image src='/images/santonio.png' alt='' layout='fill' objectFit='cover' />
            <div className="absolute group top-0 left-0 w-full h-full flex items-center justify-center z-10 opacity-0 hover:opacity-100 duration-300">
              <div className="p-3 bg-light/20 rounded-full group-hover:-rotate-45 duration-300">
                  <FaArrowRight size={15} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 lg:p-8 z-20">
              <div className="bg-dark/40 border border-light/20 flex justify-between items-center p-4 backdrop-blur-md">
                <div className="text-2xl">Santonio</div>
                <div className="uppercase">Web Design</div>
              </div>
            </div>
          </a>
          <a href='#' className="relative border border-light/20 h-[460px]">
            <Image src='/images/santonio.png' alt='' layout='fill' objectFit='cover' />
            <div className="absolute group top-0 left-0 w-full h-full flex items-center justify-center z-10 opacity-0 hover:opacity-100 duration-300">
              <div className="p-3 bg-light/20 rounded-full group-hover:-rotate-45 duration-300">
                  <FaArrowRight size={15} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 lg:p-8 z-20">
              <div className="bg-dark/40 border border-light/20 flex justify-between items-center p-4 backdrop-blur-md">
                <div className="text-2xl">Space</div>
                <div className="uppercase">Web Design</div>
              </div>
            </div>
          </a>
          <a href='#' className="relative border border-light/20 h-[460px]">
            <Image src='/images/santonio.png' alt='' layout='fill' objectFit='cover' />
            <div className="absolute group top-0 left-0 w-full h-full flex items-center justify-center z-10 opacity-0 hover:opacity-100 duration-300">
              <div className="p-3 bg-light/20 rounded-full group-hover:-rotate-45 duration-300">
                  <FaArrowRight size={15} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 lg:p-8 z-20">
              <div className="bg-dark/40 border border-light/20 flex justify-between items-center p-4 backdrop-blur-md">
                <div className="text-2xl">Space</div>
                <div className="uppercase">Web Design</div>
              </div>
            </div>
          </a>
          <a href='#' className="relative border border-light/20 h-[460px]">
            <Image src='/images/santonio.png' alt='' layout='fill' objectFit='cover' />
            <div className="absolute group top-0 left-0 w-full h-full flex items-center justify-center z-10 opacity-0 hover:opacity-100 duration-300">
              <div className="p-3 bg-light/20 rounded-full group-hover:-rotate-45 duration-300">
                  <FaArrowRight size={15} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 lg:p-8 z-20">
              <div className="bg-dark/40 border border-light/20 flex justify-between items-center p-4 backdrop-blur-md">
                <div className="text-2xl">Space</div>
                <div className="uppercase">Web Design</div>
              </div>
            </div>
          </a>

          
        </div>
      </div>

    </div>
  )
}

export default page
