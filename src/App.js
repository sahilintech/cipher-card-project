import React from 'react';
import image1 from './images/img1.jpg'
import image2 from './images/img2.jpg'
import image3 from './images/img3.jpg'
import image4 from './images/img4.jpg'
import Card from './components/Card';

function App() {
  return (
    <div className='card-container'>
      <Card image={image1} title='Card 1'/>
      <Card image={image2} title='Card 2'/>
      <Card image={image3} title='Card 3'/>
      <Card image={image4} title='Card 4'/>
    </div>
  );
}

export default App;
