import Image from 'next/image'
import React from 'react'
import { FaArrowDown, FaArrowRight } from 'react-icons/fa'
import Marquee from './Marquee'

function Service() {
  return (
    <div className="p-8" id='services'>
        <a href='#services' className="group w-fit mx-auto p-5 flex gap-2 items-center justify-center">
            <div className="p-2 bg-light/40 rounded-full opacity-80 group-hover:opacity-100 duration-100">
                <FaArrowDown size={10} />
            </div>
            <div className="text-light/50 uppercase">My Services</div>
        </a>

        <div className="flex gap-5 lg:gap-24 py-5 items-center justify-center w-full overflow-hidden">
            <Image src="/images/company1.svg" alt="Company 1" width={100} height={100}/>
            <Image src="/images/company2.svg" alt="Company 2" width={100} height={100}/>
            <Image src="/images/company3.svg" alt="Company 1" width={100} height={100}/>
            <Image src="/images/company4.svg" alt="Company 2" width={100} height={100}/>
            <Image src="/images/company5.svg" alt="Company 1" width={100} height={100}/>
            <Image src="/images/company6.svg" alt="Company 2" width={100} height={100}/>
        </div>
        <Marquee />

        <div className="grid lg:grid-cols-3 gap-8 py-10 lg:px-8">
        <div className="p-8 bg-light/5 backdrop-blur-md border border-light/20">
            <div className="font-mono">01</div>
            <div className="text-2xl pb-1">Static Websites</div>
            <div className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident qui cum molestiae sit ipsum quasi optio aspernatur sint, ullam repellat eveniet delectus itaque, ex beatae maxime minus facilis nam saepe?</div>
            <a href='#' className="flex w-fit gap-2 py-4 group items-center">
            <div className="p-2 bg-light/40 rounded-full -rotate-45 group-hover:rotate-0 duration-100">
                <FaArrowRight size={10} />
            </div>
            <div className="text-light/70 font-semibold text-sm uppercase">About Static Websites</div>
            </a>
        </div>
        <div className="p-8 bg-light/5 backdrop-blur-md border border-light/20">
            <div className="font-mono">02</div>
            <div className="text-2xl pb-1">Dynamic Websites</div>
            <div className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident qui cum molestiae sit ipsum quasi optio aspernatur sint, ullam repellat eveniet delectus itaque, ex beatae maxime minus facilis nam saepe?</div>
            <a href='#' className="flex w-fit gap-2 py-4 group items-center">
            <div className="p-2 bg-light/40 rounded-full -rotate-45 group-hover:rotate-0 duration-100">
                <FaArrowRight size={10} />
            </div>
            <div className="text-light/70 font-semibold text-sm uppercase">About Dynamic Websites</div>
            </a>
        </div>
        <div className="p-8 bg-light/5 backdrop-blur-md border border-light/20">
            <div className="font-mono">03</div>
            <div className="text-2xl pb-1">Web Application</div>
            <div className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident qui cum molestiae sit ipsum quasi optio aspernatur sint, ullam repellat eveniet delectus itaque, ex beatae maxime minus facilis nam saepe?</div>
            <a href='#' className="flex w-fit gap-2 py-4 group items-center">
            <div className="p-2 bg-light/40 rounded-full -rotate-45 group-hover:rotate-0 duration-100">
                <FaArrowRight size={10} />
            </div>
            <div className="text-light/70 font-semibold text-sm uppercase">About Web Application</div>
            </a>
        </div>
        </div>

    </div>
  )
}

export default Service
