import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import WorldMap from 'react-svg-worldmap';
import Countries from '../Countries';
import Details from '../Details'; 
import Search from '../Search';
import { Routes, Route } from 'react-router-dom';

const Home = ({setCountry}) => {
  const [search, setSearch] = useState('');
  
  
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      {/* <Search handleChange={handleChange} /> */}
      <Routes>
        <Route path="/" exact element={(
          <Countries setCountry={setCountry}/>
        )}/>
        {/* <Route path=":name" element={(
          <Details setCountry={setCountryName}/>
        )}/> */}
      </Routes>
    </div>
  );
};

export default Home;
