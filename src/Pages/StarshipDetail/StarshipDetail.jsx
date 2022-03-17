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
    {starshipDetails.name ?
      <div className='starship-container'>
        <div id="starshipDiv">
          <h3>NAME: {starshipDetails.name}</h3><br/>
          <h3>MODEL: {starshipDetails.model}</h3>
          <a href="/"><h2>[ RETURN ]</h2></a>
        </div>
      </div>
    :
      <>
      <h2 className='loadingText'>Loading Starship Information...</h2>
      </>
    }
    </>
   );
}
 
export default StarshipDetail;