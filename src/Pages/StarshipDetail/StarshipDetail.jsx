import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/sw-api'
const StarshipDetail = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getDetails(location.state.starship.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  }, [])
  
  return ( 
    <>
      <h3>Starship Page</h3>
    </>
   );
}
 
export default StarshipDetail;