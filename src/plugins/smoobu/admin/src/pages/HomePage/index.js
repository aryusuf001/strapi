/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

const HomePage = () => {
	
  const handleClick = () => {
	  document.getElementById('statusMessage').style.display = 'block';
          document.getElementById('statusMessage').textContent = 'Syncing data...please wait';
          document.getElementById('statusMessage').style.color = '#000';
    fetch('https://tiptopdroomvakanties.nl/php/smoobu.php')
      .then(response => {
   
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {

        if (data.status === 'success') {
		  document.getElementById('statusMessage').style.display = 'block';
          document.getElementById('statusMessage').textContent = 'Data synced';
          document.getElementById('statusMessage').style.color = 'green';
        } else {
		  document.getElementById('statusMessage').style.display = 'block';
          document.getElementById('statusMessage').textContent = 'Something went wrong';
          document.getElementById('statusMessage').style.color = 'red';
        }

        setTimeout(() => {
          document.getElementById('statusMessage').style.display = 'none';
        }, 1000);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div style={{ marginTop: '50px', marginLeft: 40 }}>
      <h1 style={{ fontSize: 30, fontWeight: 'bold' }}>Sync with smoobu</h1>
      <p style={{ fontSize: 20, marginTop: 20 }}>Sync Vakantiehuizen Zeeland from smoobu</p>
      <button
        style={{
          fontSize: 20,
          marginTop: 20,
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#00bfff',
          padding: 15,
          borderRadius: 10
        }}
        onClick={handleClick}
      >
        Sync now
      </button>
      <p style={{ fontSize: 16, marginTop: 20 }} id="statusMessage"></p>
    </div>
  );
};

export default HomePage;


