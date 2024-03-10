import React from 'react';
import './Qualification.css';
import { useState } from 'react';

const Qualification = () => {


  const[toggleState, SetToggleState] = useState(0);

    const toggle = (index) => {
        SetToggleState(index);

    }
  


  return (
    <section className='qualification section' id='portfolio'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My personal journey</span>

        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"}
                onClick={()=> toggle(1)}>
                  <i className='bx bxs-graduation qualification__icon'></i>Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"}
                onClick={()=> toggle(2)}>
                <i class='bx bxs-briefcase-alt-2 qualification__icon' ></i>Experience  
                </div>
            </div>

            <div className='qualification__sections'>
              <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                <div className='qualification__data'>
                  <div>
                    <h3 className='qualification__title'>ICT management student</h3>
                    <span className='qualification__subtitle'>Tunisia - Iset'Com Tunis</span>
                    <div className='qualification__calender'>
                      <i className='bx bx-calendar-event'></i> 2021 - 2023
                    </div>
                  </div>
                
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>

              <div className='qualification__data'>

                <div></div>

                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
                  <div>
                    <h3 className='qualification__title'>Master's student in E-commerce</h3>
                    <span className='qualification__subtitle'>Tunisia - Isg Gabès</span>
                    <div className='qualification__calender'>
                      <i className='bx bx-calendar-event'></i> 2023 - Present
                    </div>
                  </div>
                
              </div>
            {/* <div className='qualification__data'>
                  <div>
                    <h3 className='qualification__title'>UX Expert</h3>
                    <span className='qualification__subtitle'>Tunisia - Institu</span>
                    <div className='qualification__calender'>
                      <i className='bx bx-calendar-event'></i> 2021 - Present
                    </div>
                  </div>
                
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>

              <div className='qualification__data'>

                <div></div>

                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
                  <div>
                    <h3 className='qualification__title'>Web Developer</h3>
                    <span className='qualification__subtitle'>Tunisia - Institu</span>
                    <div className='qualification__calender'>
                      <i className='bx bx-calendar-event'></i> 2021 - Present
                    </div>
                  </div>
                
  </div>*/}
            </div>

            <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                <div className='qualification__data'>
                  <div>
                    <h3 className='qualification__title'>Web developer volunteering</h3>
                    <span className='qualification__subtitle'>Tunisia - Arab ICT organization</span>
                    <div className='qualification__calender'>
                      <i className='bx bx-calendar-event'></i> February 2023 - Present
                    </div>
                  </div>
                
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>

              <div className='qualification__data'>

                <div></div>

                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
                  <div>
                    <h3 className='qualification__title'>Intern as a video game developer</h3>
                    <span className='qualification__subtitle'>Tunisia - CGI Studio</span>
                    <div className='qualification__calender'>
                      <i className='bx bx-calendar-event'></i> July 2022 - September 2022
                    </div>
                  </div>
                
              </div>
              <div className='qualification__data'>
                  <div>
                    <h3 className='qualification__title'>Intern at the Tunisian Post Office</h3>
                    <span className='qualification__subtitle'>Tunisia - Tunisian Post Office</span>
                    <div className='qualification__calender'>
                      <i className='bx bx-calendar-event'></i> Januray 2022 - Mars 2022
                    </div>
                  </div>
                
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>

              
            </div>
            </div>
        </div>
    </section>
  );
}

export default Qualification;
