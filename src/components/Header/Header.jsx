import React from 'react'
import './Header.css'

import { IoHomeOutline } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { FaTrophy } from "react-icons/fa6";
import { IoMdBriefcase } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { GrAppsRounded } from "react-icons/gr";
import { useState } from 'react';

const Header = () => {

    /*----- change background color header ----*/

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add ("scroll-header");
        else 
        header.classList.remove('scroll-header')
    })

    /*---toggle <menu---></menu---*/ 
    const [Toggle, showMenu] = useState(false)

    const[activeNav, setActiveNav] = useState('#home')
  return (
    <div className='header'>
        <nav className='nav container'>
            <a href="#home" className='nav__logo'>Benhfayedh Bacem</a>
            <div className={Toggle ? "nav__menu show-Menu" : "nav__menu"}>
                 <ul className='nav__list grid'>
                    
                    <li className='nav__item'>
                        <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ?  "nav__link active-link" : "nav__link "} >
                           <IoHomeOutline className='nav__icon'/> Home
                        </a>

                    </li>

                    <li className='nav__item'>
                        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ?  "nav__link active-link" : "nav__link "}>
                            <IoIosInformationCircle className='nav__icon'/> About
                        </a>

                    </li>

                    <li className='nav__item'>
                        <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ?  "nav__link active-link" : "nav__link "}>
                            <FaTrophy className='nav__icon'/> Skills
                        </a>

                    </li>

                    <li className='nav__item'>
                        <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ?  "nav__link active-link" : "nav__link "}>
                            <IoMdBriefcase className='nav__icon'/> Services
                        </a>

                    </li>

                    <li className='nav__item'>
                        <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ?  "nav__link active-link" : "nav__link "}>
                            <FaFolderOpen className='nav__icon'/> Portfolio
                        </a>

                    </li>

                    <li className='nav__item'>
                        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ?  "nav__link active-link" : "nav__link "}>
                            <FaMessage className='nav__icon'/> Contact
                        </a>

                    </li>

                    

                </ul>
              <div    className='nav__close' onClick={() => showMenu (!Toggle)}>
              <LiaTimesSolid/>
              </div>
                

            </div>
            <div className='nav__toggle' onClick={() => showMenu (!Toggle)}>
            <GrAppsRounded  />
            </div>
            


            

        </nav>

    </div>
  )
}

export default Header