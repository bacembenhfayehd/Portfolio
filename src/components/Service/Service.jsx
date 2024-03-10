import React from 'react'
import './Service.css'
import { useState } from 'react'

const Service = () => {

    const[toggleState, SetToggleState] = useState(0);

    const toggle = (index) => {
        SetToggleState(index);
    }
  return (
    <section className='skills section' id='services'>
        <h2 className='section__title'>Services</h2>
        <span className='section__subtitle'>What i offer</span>



        <div className='services__container container grid'>
            <div className="services__content">
                <div>

                    <i class='bx bx-code-alt services__icon' ></i>
                    <h3 className="services__title">Web <br /> Developer</h3>

                </div>
                <span className='services__button ' onClick={() => toggle(1)}>View More
                <i class='bx bx-right-arrow-alt services__button-icon' ></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i class='bx bx-x services__modal-close' onClick={() =>toggle(0)}></i> 
                        <h3 className='services__modal-title'>Web developer</h3>
                        <p className='services__modal-description'>Services with more than 1 year of 
                        experience.Providing quality work to clients and companies</p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I develop full-stack web applications, handling both frontend and backend components, utilizing various programming languages, frameworks, and libraries.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I design and implement database schemas, models, and efficient SQL queries to manage application data.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I implement backend server logic and API endpoints using frameworks such as Node.js handling authentication, authorization, and business logic.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I monitor and optimize application performance to enhance user satisfaction.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I continuously learn and adapt to new technologies in full stack development to deliver high-quality solutions.</p>

                            </li>

                        </ul>
                    </div>

                </div>
            </div>

            <div className="services__content">
                <div>

                    <i class='bx bx-color services__icon' ></i>
                    <h3 className="services__title">UI/UX <br/> Designer</h3>

                </div>
                <span className='services__button' onClick={() => toggle(2)}>View More
                <i class='bx bx-right-arrow-alt services__button-icon' ></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i class='bx bx-x services__modal-close' onClick={() =>toggle(0)}></i>
                        <h3 className='services__modal-title'>UI/UX Designer</h3>
                        <p className='services__modal-description'>Services with more than 1 year of 
                        experience.Providing quality work to clients and companies</p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I develop the user interface.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I use graphic design software and tools to develop wireframes, mockups, and prototypes for websites and web applications.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I create UX element interactions.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I position your company brand.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Design and mockups of products for companies.</p>

                            </li>

                        </ul>
                    </div>

                </div>
            </div>

            <div className="services__content">
                <div>

                    <i class='bx bx-tachometer services__icon' ></i>
                    <h3 className="services__title">Performance  <br /> and optimization</h3>

                </div>
                <span className='services__button' onClick={() => toggle(3)}>View More
                <i class='bx bx-right-arrow-alt services__button-icon' ></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i class='bx bx-x services__modal-close' onClick={() =>toggle(0)}></i>
                        <h3 className='services__modal-title'>Performance and optimization</h3>
                        <p className='services__modal-description'>Services with more than 1 year of 
                        experience.Providing quality work to clients and companies</p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I analyze the performance of applications and websites.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I implement technical solutions to optimize loading times, responsiveness, and scalability of web applications.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I monitor key performance indicators (KPIs) and generate reports to track the effectiveness of implemented improvements.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I propose and implement continuous improvements to ensure optimal user experience and efficient resource utilization.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I stay abreast of the latest trends and technologies in optimization to keep  applications competitive in the market.</p>

                            </li>

                        </ul>
                    </div>

                </div>
            </div>


        </div>

        

    </section>
  )
}

export default Service