import React from 'react'
import Image from "next/image";
const HeroSection = () => {
  return (
		<main className="h-[596px] bg-primary rounded-3xl flex ">
		  <div></div>
		  <div className="flex">
			<Image
			  src="/assets/portgig.svg"
			  alt="Portgig Logo"
			  width={120} // Fixed width
			  height={120} // Fixed height
			  className="max-md:w-[80px] max-md:h-[80px]"
			/>
		  </div>
		</main>
  )
}

export default HeroSection

