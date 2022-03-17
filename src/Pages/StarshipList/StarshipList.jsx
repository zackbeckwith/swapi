import React, { useState, useEffect } from 'react';
import { getStarshipList } from '../../services/sw-api';
import { Link } from 'react-router-dom'

const StarshipList = (props) => {
  const [starships, setStarShip] = useState([]) 

  useEffect(()=> {
    getStarshipList()
    .then(starshipData => setStarShip(starshipData.results))
  }, [])

  return ( 
    <>
      <div>
        <div className='starship-container'>
          {starships.map((starship) => (
            <Link
              to='/starship'
              state={{ starship }}
              key={starship.name}
            >
            <div id="starshipDiv" key={starship.model}>
              {starship.name}
            </div>
            </Link>
          ))}
        </div>
        <>
        </>
      </div>
    </>
  );
}
export default StarshipList;