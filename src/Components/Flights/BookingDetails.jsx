import React, { useEffect, useState } from 'react'
import { fetchOccupiedSeat } from '../Service/FlightSerice'

function BookingDetails({flightId,destination,source}) {

    let [count,setCount]=useState(0)

    const countOccupiedSeats=async()=>{

        setCount(await fetchOccupiedSeat(flightId))

    }

    useEffect(()=>{

        countOccupiedSeats()

    },[])
  return (

    <tr>
    
    <td>{flightId}</td>
    <td>{source} ➡ {destination}</td>
    <td>{count}</td>
  </tr>


    
  )
}

export default BookingDetails