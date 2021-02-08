import React from 'react';
import gmail from '../images/gmail.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

function About (props) {
  
  return (
    <>
        <div className='map-container'>
          <div className='map'></div>
        </div>
        <div className='about-container'>
          <div className='about-wrapper'>
            <div className='headshot'></div>
            <div className='about'>
            <p>
              I’m Brandon Rowe. I am an educator, web developer and life-long learner.  
            </p>
            <p>
              I am passionate about education, technology and travel.  I started my career 
              as a volunteer teacher in Central America.  There I became fluent in Spanish and
              my desire to experience new cultures deepened.  I moved to East Asia, where I
              continued teaching, learned Korean and was fortunate to travel to many different countries.  
              After several years of teaching,  I decided to take the next step as an educator
              and pursue graduate studies in education.
            </p>
            <p>
              In 2010, I started a Master’s degree at the University of Illinois at Chicago. In
              2013, I graduated and became a certified bilingual public school teacher.  I taught
              in Spanish and English at one of the first dual language schools in the city, serving 
              mostly working class immigrant families.  During this time, I directly experienced the 
              value of technology in education as a tool to better serve my students and community.
            </p>
            <p>
              Inspired by this experience,  I decided to become a creator and not only a consumer of
              technology.  Web development in particular stood out to me, and I began a deep dive into
              JavaScript and its related libraries and frameworks.  I am most familiar with ReactJS,
              NodeJS and Express.js.  I am now excited to continue to develop, learn and contribute as a
              part of a team of like-minded developers.
            </p>
            <p>
              For more information or to contact me, check out one of the links below.
            </p>
            </div>
            <div className='contacts'>
              <a href='mailto:rowe.brandon.j@gmail.com' rel="noopener noreferrer" target='_blank'>
                <img src={gmail} alt='gmail'></img>
              </a>
              <a href='https://github.com/browe83' rel="noopener noreferrer" target='_blank'>
                <img src={github} alt='github'></img>
              </a>
              <a href='https://www.linkedin.com/in/brandon-rowe-5bb891205/' rel="noopener noreferrer" target='_blank'>
                <img src={linkedin} alt='linkedin'></img>
              </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default About;
 