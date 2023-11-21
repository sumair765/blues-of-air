import { Routes, Route } from 'react-router-dom';
import WorldMap from 'react-svg-worldmap';
import Home from './components/pages/Home';
import Header from './components/Header';
import VoiceSearch from './components/pages/VoiceSearch';
import Settings from './components/pages/Settings';
import Details from './components/Details';
import './App.css';
import { useState } from 'react';

function App() {
  const [countryName, setCountryName] = useState('US');
  const stylingFunction = ({ countryCode }) => (
    {
      fill: countryCode === countryName ? '#000' : '#ec4c8a',
      stroke: 'black',
      strokeWidth: 5,
      strokeOpacity: 0.2,
      cursor: 'pointer',
    }
  );
  return (
    <>
      <Header />
      <WorldMap
          size="responsive"
          data={[]}
          color="red"
          styleFunction={stylingFunction}
        />
        {/* <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '50%',
            backgroundColor: '#ec4c8a',
            opacity: 0.9,
          }}
        /> */}
      <Routes>
        <Route exact path="/" element={<Home setCountry={setCountryName}/>} />
        <Route path="/VoiceSearch" element={<VoiceSearch />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/:name" element={(
          <Details setCountry={setCountryName}/>
        )}/>
      </Routes>

    </>
  );
}

export default App;
