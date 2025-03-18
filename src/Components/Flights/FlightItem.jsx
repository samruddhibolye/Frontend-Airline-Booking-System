import React from 'react'
import logo from '../../image/logo.jpeg'
import { useNavigate } from 'react-router-dom'
import UpdateDetails from './UpdateDetails'
import { deleteFlightById } from '../Service/FlightSerice'




  function FlightItem({flightId, depatureTime, arrivalTime, source, destination,duration, price, status,refreshFlights}) {
    const navigate= useNavigate()

    const delteProduct=async()=>{
      const data=await deleteFlightById(flightId);
      refreshFlights();
    }

  return (
    
<div className="card mb-3 p-3 shadow-sm border rounded" >
      <div className="row align-items-center" >
        {/* Airline Logo */}
        <div className="col-auto">
          <img src={logo} className="rounded" alt="Airline Logo" width="50"/>
         
        </div>

        {/* Flight Info */}
        <div className="col"  onClick={()=>{navigate(`/flights/${flightId}`)}}>
        <p><strong>{source}</strong> To <strong>{destination}</strong></p>
          <strong>{depatureTime} - {arrivalTime} </strong>
          
          <div>{duration}</div>
          <div>{status}</div>
        </div>

        {/* Price */}
        <div className="col-auto">
          <strong>£{price}</strong>
        </div>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#update-flight-${flightId}`}>Update</button>
            <button className="btn btn-danger" onClick={delteProduct}>Delete</button>
      </div>
      <UpdateDetails flightId={flightId} 
                    depatureTime={depatureTime}
                    arrivalTime={arrivalTime}
                     source={source}
                    destination={destination}
                    price={price}
                    status={status}
                   refreshFlights={refreshFlights}/>

                   
    </div>
  )
}

export default FlightItem ;