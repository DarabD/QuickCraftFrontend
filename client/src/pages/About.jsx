
import React from 'react';
import '../store/index';


const developers = [
  {
    id: 1,
    name: 'Muhammad Darab',
    description: 'A seasoned developer with a broad skill set encompassing React.js, Node.js, and .NET . ',
    image: 'Muhammad Darab.jpg',
  },
  {
    id: 2,
    name: 'Talal Abid',
    description: 'Specializing in React.js and Node.js, Talal Abid is a creative force in turning ideas into reality.',
    image: 'Talal.jpg',
  },
  {
    id: 3,
    name: 'Hassan Ali',
    description: ' Our professional graphic designer, Hassan Ali, transforms concepts into visually  masterpieces',
    image: 'Hassan.jpg',
  },
  {
    id: 4,
    name: 'Shehriyar Javed',
    description: 'Expert in React.js and Node.js, Muhammad Sheharyar brings extensive experience to our team.',
    image: 'sheharyar.jpg',
  },
];

const AboutUs = () => {
  return (
    <div className="container" id='About'>
      <header>
        <h4 className='about-h'>About Us</h4>
        <p className='about-h-d'>Welcome to Tech4tic , where innovation meets excellence. Our team of four dynamic professionals is driven by a shared passion for<br></br>creating cutting-edge solutions in the realms of web and graphic design.</p>
      </header>

      <div className="developers">
        {developers.map((developer) => (
          <div key={developer.id} className="developer">
            <img src={developer.image} alt={developer.name} />
            <h3 className='A-n'>{developer.name}</h3>
            <p className='A-d'>{developer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
