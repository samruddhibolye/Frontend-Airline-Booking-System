import React, { useEffect, useState } from 'react';
import { fetchFlightByAvgPrice, fetchFlightById, fetchFlightByMaxPrice, fetchFlightByMinPrice, fetchflights } from '../Service/FlightSerice';
import BookingDetails from './BookingDetails';
import { fetchCountOfFemale, fetchCountOfMale, fetchCountOfOther } from '../Service/PassangerService';


const FlightBooking = () => {
  const [flights, setFlights] = useState([]);
   const [avgPrice, setAvgPrice] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [maleCount, setMaleCount] = useState(0);
    const [femaleCount, setFemaleCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);
  
    const loadStats = async () => {
      const avg = await fetchFlightByAvgPrice();
      const min = await fetchFlightByMinPrice();
      const max = await fetchFlightByMaxPrice();
      setAvgPrice(avg);
      setMinPrice(min);
      setMaxPrice(max);
    }

    

  useEffect(() => {
    fetchflights()
      .then((data) => {
        setFlights(data);
        loadStats();
       

    fetchCountOfMale('male').then((data) => setMaleCount(data));
    fetchCountOfFemale('female').then((data) => setFemaleCount(data));
   fetchCountOfOther('other').then((data) => setOtherCount(data));
      })
      
  }, []);

  

 return (

    // avg,min,max

    
    <div className="p-4">
        
      <h1>SkyBooking.</h1>
      {/* gender */}
    {/* <div style={{ textAlign: 'right' }}>
  <p><strong>Male Passengers:</strong> {maleCount}</p>
  <p><strong>Female Passengers:</strong> {femaleCount}</p>
  <p><strong>Other Passengers:</strong> {otherCount}</p>
</div> */}
{/* gender */}
      <div className="stat-container">
        <div className="card1 avg-card">
          <h3>Average Price</h3>
          <p>${avgPrice.toFixed(2)}</p>
        </div>
        <div className="card1 min-card">
          <h3>Minimum Price</h3>
          <p>${minPrice.toFixed(2)}</p>
        </div>
        <div className="card1 max-card">
          <h3>Maximum Price</h3>
          <p>${maxPrice.toFixed(2)}</p>
        </div>
      </div>
      {/* min,max ,avg */}

    
      

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
