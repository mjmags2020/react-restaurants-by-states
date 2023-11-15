import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { BiRestaurant } from 'react-icons/bi'
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai'
import { motion } from "framer-motion";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const handleChange = () => {
        setMenu(!menu);
    };
    const closeMenu = () => {
        setMenu(false);
    };
    const headerLinks = [
        {
            label: "Restaurants",
            link: "/"
        },
        {
            label: "About",
            link: "/"
        },
        {
            label: "Contact",
            link: "/"
        },
    ]
    return (
        <div className='fixed w-full !z-50'>
            <div>
                <div className='flex flex-ro justify-between p-5 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)] '>
                    <div className='flex flex-row items-center cursor-pointer'>
                        <span><BiRestaurant size={32} className='text-brightColor' /></span>
                        <h1 className='md:flex hidden text-xl font-semibold'>Resto</h1>
                    </div>
                    <nav className='hidden  md:flex flex-row items-center text-lg font-medium gap-10'>
                        {
                            headerLinks.map(header => <Link key={header.label} to={header.link} spy={true} smooth={true} duration={500} className='hover:text-brightColor traansition-all cursor-pointer'>{header.label}</Link>)
                        }
                    </nav>
                    <div className='md:hidden flex items-center'>
                        {
                            menu ?
                                <AiOutlineClose size={25} onClick={closeMenu} />
                                :
                                <AiOutlineMenuUnfold size={25} onClick={handleChange} />
                        }
                    </div>
                </div>
                <div className={`${menu ? 'translate-x-0' : 'translate-x-full'} lg:hidden  flex flex-col  absolute bg-orange-100 min-h-screen text-slate-700 ;ef-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 mt-[-5px]  border-t-slate-400`}>
                    {
                        headerLinks.map(header => <Link key={header.label} to={header.link} spy={true} smooth={true} duration={500} className='hover:text-brightColor traansition-all cursor-pointer'>{header.label}</Link>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar