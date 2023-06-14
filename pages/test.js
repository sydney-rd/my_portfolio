import React from 'react';
import videoSource from '../help.mp4';

function MyComponent() {
  return (
    <div>
      
      <video autoPlay muted loop>
        <source src={videoSource} type="video/mp4" />
        {/* Add additional source elements for other video formats if necessary */}
        Your browser does not support the video tag.
      </video>
      {/* Content of your component */}
    </div>
  );
}

export default MyComponent;
