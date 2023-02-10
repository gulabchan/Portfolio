import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import '../styles/About.css';
 import AboutImg from '../assets/about.jpg'

const About = () => {
  return (
    <>

      <div className="about">
        <VerticalTimeline
          lineColor="#f06529"
          style={{
            backgroundColor: "#f0f0f0"
          }}>

          <VerticalTimelineElement
            
            className='vertical-timeline-element--education'

            date="2020 - 2024"
            iconStyle={{
              background: "#fc7b54",
              color: "#fff"
            }}

            icon={<i className="fa-solid fa-graduation-cap about-icon"></i>}>
            <h3 className="vertical-timeline-element-title" >
              Lovely Proffessionnal University 
            </h3>
            <br />
            <h3 className="vertical-timeline-element-title" >
              B-tech Computer Science and Enginering.
            </h3>
            <h3 className="vertical-timeline-element-title" >
            Total CGPA : 7.60
            </h3>
         
            <p> Graduation</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--education'

            date="2015- 2017"

            iconStyle={{
              background: "#fc7b54",
              color: "#fff"
            }}
            icon={<i className="fa-solid fa-building-columns about-icon"></i>}>
            
            <h3 className="vertical-timeline-element-title" >
              Galaxy Residential Public School
            </h3>
            <br />
            {/* <h3 className="vertical-timeline-element-title" >
             
            </h3> */}
            <br />
            <h3 className="vertical-timeline-element-title" >
            Total CGPA : 9.6 (91.0%)
            </h3>

            {/* <p>Graduation</p> */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--education'

            date="2017 - 2019"

            iconStyle={{
              background: "#fc7b54",
              color: "#fff"
            }}
            icon={<i className="fa-solid fa-school about-icon"></i>}>
            
            <h3 className="vertical-timeline-element-title" >
              Pyrag Senior secondary School
            </h3>
            <h3 className="vertical-timeline-element-title" >
            72.06%
            </h3>
            <br />
            {/* <h3 className="vertical-timeline-element-title" >
              Annasaheb Magar Junior College
            </h3> */}
            {/* <p>High School</p> */}
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
      <main className="main">

        <div className="about-text">
          <h2 className='text head' style={{
            textAlign: "center"
          }}>About</h2>
          <div className='paragraph'>
            <p>
            I am a passionate coder who loves to learn and explore various programming languages. I love learning new technologies and
            frameworks and create something unique out of itJ'm strongly focused, hardworking and utilizes my skills at best to
            contribute growth of the different organizations and develop more skills in a productive enviroment.
            </p>
          </div>
        </div>
        <div className="hero about-img">
          <img src={AboutImg} alt="about" className='skill-img' />
        </div>
      </main>
    </>
  )
}

export default About
