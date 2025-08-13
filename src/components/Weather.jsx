import React from 'react'
import search_icon from '../assets/search.png'


const Weather = () => {
  return (
    <div className='weather place-self-center p-[40px] rounded-lg bg-[linear-gradient(45deg,#2f4680,#500ae4)] flex flex-col items-center'>
        <div className='search-bar flex gap-5 items-center '>
            <input className='h-[50px] border-none outline-none rounded-[40px] px-4 text-[#626262] bg-[#ebfffc] text-[18px]' type="text" placeholder='Search'/>
            <img className='w-[50px] p-[15px] rounded-[50%] bg-[#ebfffc] cursor-pointer' src={search_icon} alt="" />
        </div>
    </div>
  )
}

export default Weather