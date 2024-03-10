import React from 'react'

import { FaInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Social = () => {
  return (
    <div className='home__social'>
        <a href='' className='home__social-icon' target='blank'>
            <FaFacebook/>
        </a>

        <a href='' className='home__social-icon' target='blank'>
            <FaInstagram/>
        </a>

        <a href='' className='home__social-icon' target='blank'>
            <FaSquareGithub/>
        </a>

    </div>
  )
}

export default Social