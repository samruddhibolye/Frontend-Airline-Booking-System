
import React, { useEffect, useState } from 'react';

import FlightItem from './FlightItem';
import { fetchFlightBySourceAndDestination, fetchflights } from '../Service/FlightSerice';

function Allflight() {

  const [flights, setFlights] = useState([])
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");


  const getFlights = async () => {
    setFlights(await fetchflights())

  }
  useEffect(() => {
    getFlights();
     
  }, [])

  const searchFlights = async () => {
   
    const result = await fetchFlightBySourceAndDestination(source, destination);
    setFlights(result);
  };




  return (

    <div className="container">

      <div className="flight-search-container">
        <div className="flight-search">
         

          <input type="text" placeholder="From (City or Airport)" value={source}
            onChange={(e) => setSource(e.target.value)} />
          
          <input type="text" placeholder="To (City or Airport)" value={destination}
            onChange={(e) => setDestination(e.target.value)}/>
          
          
          <button className="btn" onClick={searchFlights}>Search Flights</button>

        </div>
        
      </div>
     
      <h2 className="my-3">Available Flights</h2>
      {
        flights
          .map((flight) => (
            <FlightItem
              key={flight.flightId}
              flightId={flight.flightId}
              depatureTime={flight.depatureTime}
              arrivalTime={flight.arrivalTime}
              source={flight.source}
              destination={flight.destination}
              
              price={flight.price}
              status={flight.status}
              refreshFlights={getFlights}
            />
          ))}
    </div>
  )
}


export default Allflight