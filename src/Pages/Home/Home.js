import React from 'react';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import './Home.css';
import About from '../About/About';
import Downloads from '../Download/Download';
import logo1 from '../../Images/KJSIT_logo.png';
import logo2 from '../../Images/mumbai_police_logo.png';
import logo3 from '../../Images/dummy_logo.png';
import GeoFenceScreen from '../../Components/GeoFenceScreen';

function Home() {
  return (
    <>
      <div id='home'>
      <p ></p>
      <div className='banner'/>
      <div className='logo1'>
        <div className='words'>sddgshf</div>
        <div className='mob'>
        <img src={logo1} alt={logo3} className='design'/>
        <img src={logo2} alt={logo3} className='design'/>
        <img src={logo3} alt={logo3} className='design'/>
        </div>
      </div>
      <div className='map'>
      <GeoFenceScreen />
      </div>
      <BgColorExample />
      </div>
      <div id='download'><Downloads /></div>
      <div id='about'><About /></div>

    </>
  );
}

export default Home






function BgColorExample() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const bodyHeight = document.body.offsetHeight;
      const scrollPercentage = (scrollY / (bodyHeight - windowHeight)) * 100;

      if (scrollPercentage > 50) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="card-container justify-content-evenly mt-4 pt-4">
      <div className={`left-cards ${isVisible ? 'visible' : ''}`}>
        {['Primary', 'Secondary'].map((variant, index) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '24rem', margin: '2rem' }}
            className="mb-2"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Card Title</Card.Title>
              <Card.Text>test</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className={`right-cards ${isVisible ? 'visible' : ''}`}>
        {['Success', 'Danger'].map((variant, index) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '24rem', margin: '2rem' }}
            className="mb-2"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Card Title</Card.Title>
              <Card.Text>test</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
