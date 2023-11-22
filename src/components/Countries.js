import React,{useEffect} from 'react';
import Card from './Card';
import data from '../redux/data';

const Countries = ({setCountry}) => {
useEffect(()=>{
  setCountry('');
},[])
return (
<>
    <p className="txt-1">AIR QUALITY STATS BY COUNTRY</p>
      <ul className='cards'>
      {data.map((country, index) => (
        <Card name={country[3]} lon={country[2]} lat={country[1]} short={country[0]} key={country[3]} even={(index + 1) % 4 === 0 || index % 4 === 0} />
        ))}
        </ul>
  </>
);
      }

export default Countries;
