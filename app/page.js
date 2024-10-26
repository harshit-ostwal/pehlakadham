import Image from 'next/image'
import React from 'react'
import Logo from "@/public/Pehla Kadham.PNG"
import Link from 'next/link'
import { ArrowRight, Instagram } from 'lucide-react'

function page() {
  return (
    <div className="flex flex-col gap-20 items-center justify-center w-full min-h-screen bg-gray-900">
      <Image src={Logo} quality={100} width={200} fetchPriority="high" loading="eager" alt="Pehla Kadham" />
      <div className="flex flex-col gap-10 items-center justify-center w-full text-white">
        <div className="flex flex-col leading-none items-center">
          <h1 className="font-medium text-[3vw]">Pehla Kadham</h1>
          <p>Aapke Sewa Mein</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="capitalize text-xl">We're working hard to bring you something amazing.</p>
          <p className="capitalize text-xl">Exciting things are on the way! Stay Tuned.</p>
        </div>
        <Link target="_blank" href="https://www.instagram.com/pehlakadham" className="outline w-fit outline-1 group outline-white/40 hover:outline-white after:outline-white/40 hover:after:outline-white relative hover:text-black transition-all overflow-hidden after:transition-all after:duration-300 ease-in-out after:ease-in-out py-2 px-5 rounded-full font-medium text-lg after:bottom-[-100%] after:left-0 after:absolute after:bg-white after:h-full after:w-full after:rounded-[50%] hover:after:rounded-none hover:after:bottom-0">
          <div className="relative z-10 flex items-center gap-2 text-xl"><Instagram /> Instagram</div>
        </Link>
      </div>
    </div>
  )
}

export default page