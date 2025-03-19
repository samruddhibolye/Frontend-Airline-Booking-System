import React, { useEffect, useState } from 'react';
import { fetchFlightById, fetchflights } from '../Service/FlightSerice';
import BookingDetails from './BookingDetails';


const FlightBooking = () => {
  const [flights, setFlights] = useState([]);
  
  useEffect(() => {
    fetchflights()
      .then((data) => {
        setFlights(data);
        
      })
      
  }, []);

  

 return (
    <div className="p-4">
   <h2>Seat booking</h2>

<table class="table table-#ffe5d9  table-striped">
  <thead>
    <tr>
     
      <th scope="col">FlightId</th>
      <th scope="col">Flight Name</th>
      <th scope="col">count</th>
    </tr>
  </thead>
  <tbody>
  {flights.map((flight) => (
                   <BookingDetails flightId={flight.flightId} destination={flight.destination} source={flight.source}/>
          ))}
   
  </tbody>
</table>
      
      

      
    </div>
  );
};

export default FlightBooking;
