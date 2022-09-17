import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { IoNotifications } from 'react-icons/io5';
import { HiOutlineChevronDown } from 'react-icons/hi';
import avater from '../Assests/images/avater.png'
const Header = () => {
  return (
    <div className=' flex items-center justify-between'>
        <div >
            <h1 className=' text-lg text-blue-700'> <span className=' mx-3 bg-blue-700 py-1 px-3 rounded-full text-white's>L</span> LOOGO</h1>
        </div>
        <div className='flex bg-[#F1F3F8] items-center px-2 rounded text-base'>
            <input className=' h-8 w-[350px] border-none outline-none bg-transparent p-2 ' type="text" placeholder='Search' />
            <BiSearch/>
        </div>
        <div className='flex items-center  gap-6'>
           <IoNotifications className='notify__alert text-lg text-[#959292] '/>
            <img src={avater} alt="avater" />
            <p>Riandra</p>
            <HiOutlineChevronDown className=' mb-3 '/>
            

        </div>
    </div>
  )
}

export default Header