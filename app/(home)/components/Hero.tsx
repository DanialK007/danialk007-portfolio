import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="h-[740px] lg:h-[850px] lg:pb-[50px] flex items-center justify-center relative">
        <div className="w-[500px] brightness-95">
        <Image
            src="/images/profile.png"
            alt="Picture of the author"
            layout="responsive" 
            width={1600} // Intrinsic width of the image
            height={900} // Intrinsic height of the image
            />
        </div>
        <div className="absolute bottom-0 text-center px-5">
            <div className="text-3xl lg:text-[6.5rem] lg:leading-[7.5rem] font-thin">Frontend Developer</div>
            <div className="text-light/80 pt-2 lg:text-xl">Where every line of code is a stroke of creativity, and every interface is a canvas.</div>
        </div>
    </div>
  )
}

export default Hero
