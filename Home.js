import React from 'react';
import Img from './assets/2.jpg';

const HomePage = () => {
  const styles = {
    backgroundImage: `url(${Img})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    height: '100vh',
    width: '100%',
  };

  return (
    <div style={styles}>
      <h1> </h1>
    </div>
  );
};

export default HomePage;
