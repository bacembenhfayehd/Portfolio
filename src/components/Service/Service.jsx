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
                        <p className='services__modal-description'>Services with more than 2 years of 
                        experience.Providing quality work to clients and companies</p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I develop full-stack web applications, handling both frontend and backend components, utilizing various programming languages, frameworks, and libraries.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I design and implement database schemas, models, and efficient SQL / NOSQL queries to manage application data.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I implement backend server logic and API endpoints using frameworks such as Node.js handling authentication, authorization, and business logic.</p>

                            </li>

                           

                        </ul>
                    </div>

                </div>
            </div>

            <div className="services__content">
                <div>

                    <i class='bx bx-color services__icon' ></i>
                    <h3 className="services__title">Scalability & Deployment Solutions</h3>

                </div>
                <span className='services__button' onClick={() => toggle(2)}>View More
                <i class='bx bx-right-arrow-alt services__button-icon' ></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i class='bx bx-x services__modal-close' onClick={() =>toggle(0)}></i>
                        <h3 className='services__modal-title'>DevOps & Cloud Deployment</h3>
                        <p className='services__modal-description'>I take care of deploying and hosting your applications using the best DevOps practices. No need to worry about servers—I handle everything for you!</p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I create isolated and reproducible environments with Docker, and I automate deployment, management, and scaling with Kubernetes for better resilience and flexibility.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I implement CI/CD pipelines to automate testing, builds, and deployments, ensuring fast, reliable, and seamless updates.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I deploy and optimize your applications on the right cloud platforms (AWS, GCP, Vercel, DigitalOcean), ensuring scalability, high availability, and cost efficiency.</p>

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
                        <p className='services__modal-description'>I implement advanced caching strategies and server-side rendering to reduce load times, improve SEO, and enhance user experience by delivering optimized content instantly.</p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I optimize database queries and API responses to ensure fast data retrieval, reducing latency and improving scalability for high-traffic applications.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I configure load balancers and optimize server resources to distribute traffic efficiently, prevent bottlenecks, and ensure smooth performance even under heavy load.</p>

                            </li>

                            <li className='services__modal-service'>
                                <i class='bx bx-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I implement unit, integration, and performance tests to detect bottlenecks early, ensuring robust and efficient applications with optimized code execution.</p>

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