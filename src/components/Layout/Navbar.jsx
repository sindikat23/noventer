import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

const Navbar = () => {
    return (
       <div className='bg-[#0E041D] sticky top-0  z-100 py-4'>
         <div className='container mx-auto  px-2'>
            <div className='flex justify-between items-center text-[16px] text-white'>
                {/* Logatif */}
                <div className='flex items-center gap-1'>
                    <img src="src/assets/icons/Logo.png" alt="noventer" />
                </div>
                {/* Menu */}
                
                <div className='hidden lg:flex gap-6 font-medium'>
                    <Link className='relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'>Bosh sahifa</Link>
                    <Link className='relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'>Portfolio</Link>
                    <Link className='relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'>Xizmatlar</Link>
                    <Link className='relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full'>Aloqa</Link>
                </div>
                {/* Tillar and button */}
                <div className='hidden lg:flex gap-4'>
                    <select className='outline-0 hover:bg-[#261D33] rounded-lg px-1' id="">
                        <option className='bg-[#0E041D] py-1 rounded-lg outline-0' value="1">UZ</option>
                        <option className='bg-[#0E041D] py-1 rounded-lg' value="2">RU</option>
                        <option className='bg-[#0E041D] py-1 rounded-lg' value="3">EN</option>
                    </select>
                    <Button className='hidden' type='primary' color='geekblue' variant='solid'>Loyha bormi?</Button>
                    {/* <button className='bg-[#261D33] rounded-[8px] px-3 py-1.5 font-medium active:bg-gray-800'>Loyiha bormi?</button> */}
                </div>
            </div>
        </div>
       </div>
    )
}

export default Navbar