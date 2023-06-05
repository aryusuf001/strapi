import React from 'react';

const CustomButton = () => {
  const handleClick = () => {
    // Handle button click logic here
    console.log('Custom button clicked');
  };

  return (
    <button onClick={handleClick}>Custom Button</button>
  );
};

export default CustomButton;