import React, {useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { fetchPollution } from '../redux/weather/weather';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../redux/pollution/pollution';
import data from '../redux/data';
import DetailCard from './DetailCard';



const Details = ({setCountry}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  // const name = location.pathname.substring(1); // Remove leading slash
  const {name} = useParams()
   const countryName = data.filter((country) => country[3] === name)[0][0];
   console.log(countryName, name)
  //  const [finalData, setFinalData] = useState(null);
    setCountry(countryName);
  
  const searchParams = new URLSearchParams(location.search);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const pollution = useSelector((state)=> state.pollutionData)
  // if(pollution.list){
  // } 
  // console.log('from componemt', pollution);
 
    const routeParams = useParams();
    console.log(lat,lon, name)

useEffect(async()=>{
    //fetch api

    const baseURL = 'https://api.openweathermap.org/data/2.5/air_pollution';

const LAT = '?lat=';

const LON = '&lon=';

const api_key = '57d14da10d2f873314e79507698059f6'
    const url = `${baseURL}?lat=${lat}&lon=${lon}&appid=${api_key}`
    const response = await fetch(url);
    const pollution = await response.json();
    console.log('pollution', response);
    dispatch(getDetails(pollution));
    //set store
  },[])
  
  return (
    <div>Details
    {pollution.list && Object.entries(pollution.list[0].components).map(([key, value]) => (
        <DetailCard key={key} field={key.toUpperCase()} value={value}/>
      ))}
    </div>
  )
}

export default Details