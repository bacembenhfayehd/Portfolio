
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
                    <h3 className='qualification__title'>ICT management</h3>
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
                    <h3 className='qualification__title'>Master's degree in E-commerce</h3>
                    <span className='qualification__subtitle'>Tunisia - Isg Gabès</span>
                    <div className='qualification__calender'>
                      <i className='bx bx-calendar-event'></i> 2023 - 2025
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
                    <h3 className='qualification__title'>Web developer</h3>
                    <span className='qualification__subtitle'>Hexagrow , Algeria</span>
                    <div className='qualification__calender'>
                      <i className='bx bx-calendar-event'></i> December 2024 - Present
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
                    <h3 className='qualification__title'>Software Development Instructor
                    </h3>
                    <span className='qualification__subtitle'>GOMYCODE , Tunisia</span>
                    <div className='qualification__calender'>
                      <i className='bx bx-calendar-event'></i> July 2024 - Present
                    </div>
                  </div>
                
              </div>
              <div className='qualification__data'>
                  <div>
                    <h3 className='qualification__title'>Backend developer intern</h3>
                    <span className='qualification__subtitle'>Branding Routes- London area UK</span>
                    <div className='qualification__calender'>
                      <i className='bx bx-calendar-event'></i> October 2024 - December 2024
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
                    <h3 className='qualification__title'>Freelance web developer
                    </h3>
                    <span className='qualification__subtitle'>Working remotley</span>
                    <div className='qualification__calender'>
                      <i className='bx bx-calendar-event'></i> November 2022 - Present
                    </div>
                  </div>
                
              </div>

              

              
            </div>
            </div>
        </div>
    </section>
  );
}

export default Qualification;
