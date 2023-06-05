/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

const HomePage = () => {
  return (
    <div style={{ marginTop: '50px', marginLeft:40 }}>
      <h1 style={{ fontSize:30, fontWeight:'bold'}}>Sync with smoobu</h1>
      <p style={{ fontSize:20, marginTop:20}}>Sync Vakantiehuizen Zeeland from smoobu</p>
	  <button style={{ fontSize:20, marginTop:20,fontWeight:'bold',color:'#fff', backgroundColor: '#00bfff', padding:15, borderRadius:10}}>Sync now</button>
    </div>
  );
};

export default HomePage;
