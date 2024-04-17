import Link from 'next/link'
import { FC } from 'react'
import Image from 'next/image'

const NavBar:FC = () => {
  return (
    <div className='flex justify-between items-center py-2'>
      <Link href="/" className='flex items-center space x-2'>
        <div className='relative w-[30px] h-[30px] '>
            <Image src="/img/football-image.png" alt= "logo" fill className='object-cover'/>
        </div>
        <span className='text-2xl font-bold none md:block ml-2'>Football Info</span>
      </Link>
      <p className='text-xs md:text-sm'>Created by Nguyen Tuan Nguyen An</p>
    </div>
  )
}

export default NavBar
