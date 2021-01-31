import React from 'react';
import avatar from '../images/selfie-mtb.jpg';

function About (props) {
  
  const avatarStyles = {
    marginTop: '0',
    backgroundImage: `url(${avatar})`, 
    backgroundSize: 'cover',
    // display: 'inline-block',
    float: 'left',
  }

  return (
    <>
      <div className='map-container'>
        <div className='map'></div>
      </div>
      <div className='about-container'>
        <div className='about-wrapper'>
          <div className='avatar' style={avatarStyles}></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Et tortor consequat id porta nibh. Risus viverra adipiscing
            at in tellus integer feugiat. Pellentesque massa placerat duis
            ultricies lacus sed turpis tincidunt. Parturient
            montes nascetur ridiculus mus mauris vitae. Sit amet 
            consectetur adipiscing elit ut aliquam purus. Mauris
            rhoncus aenean vel elit scelerisque. Laoreet suspendisse interdum
          </p>
          <p>
            consectetur libero. Lectus urna duis convallis convallis tellus
            id interdum. Posuere ac ut consequat semper viverra nam
            libero justo laoreet. Auctor elit sed vulputate mi sit amet.
            Sed adipiscing diam donec adipiscing tristique risus nec
            feugiat in. Hac habitasse platea dictumst quisque sagittis. 
            Posuere urna nec tincidunt praesent. Augue lacus viverra vitae
            congue eu consequat ac. Iaculis at erat pellentesque
            adipiscing commodo elit. Mauris a diam maecenas sed enim ut sem.
            Arcu odio ut sem nulla pharetra diam. Adipiscing elit pellentesque
            ßhabitant morbi tristique senectus et netus et.
          </p>
        </div>
   
      </div>
    </>
  )
}

export default About;
 