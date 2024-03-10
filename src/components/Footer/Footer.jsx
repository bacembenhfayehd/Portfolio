import React from 'react'
import './Footer.css'


import { FaInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Benhfayedh</h1>

        <ul className='footer__list'>
          <li>
            <a href="#about" className='footer__link'>About</a>
          </li>

          <li>
            <a href="#portfolio" className='footer__link'>Projects</a>
          </li>

          <li>
            <a href="#testimonials" className='footer__link'>Testimonials</a>
          </li>

        </ul>

      

        <div className='footer__social'>

        <a href='' className='footer__social-link' target='blank'>
            <FaFacebook/>
        </a>

        <a href='' className='footer__social-link' target='blank'>
            <FaInstagram/>
        </a>

        <a href='' className='footer__social-link' target='blank'>
            <FaSquareGithub/>
        </a>

        

      </div>

      <span className='footer__copy'>
        &#169; Benhfayedh. All rights reserved

      </span>

      </div>

    </footer>
  )
}

export default Footer