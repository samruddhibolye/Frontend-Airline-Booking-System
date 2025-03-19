
const API_LINK="http://localhost:8080/flights"

// to add flight
export const addFlight=async(flight)=>{
 
    const response=await fetch(API_LINK,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(flight)
    })
  console.log(response)

  const data =await response.json()

  console.log(data)

  return data;
}

// fetch product by id 
export const fetchFlightById=async(flightId)=>{

  const response=await fetch(API_LINK+`/${flightId}`)
  const data=await response.json()
  return data;

}



// fetch all flight
export const fetchflights= async()=>{
  const response=await fetch(API_LINK);
  const data=await response.json();
  return data["_embedded"]["flights"]
 
}

// to update product by id
export const updateFlight=async(flightId,flight)=>{
 
  const response=await fetch(API_LINK+`/${flightId}`,{
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(flight)
  })

 const data=await response.json()
 return data;

}
 

// to delete product by id

export const deleteFlightById=async(flightId,flight)=>{
  
  const response=await fetch(API_LINK+`/${flightId}`,{
    method:"DELETE",
   })
const data=await response.json()
return data;
}


// fetch flight by source and destination

export const fetchFlightBySourceAndDestination= async(source,destination)=>{
 
  const response=await fetch(API_LINK+`/search/findBySourceAndDestination?source=${encodeURIComponent(source)}&destination=${encodeURIComponent(destination)}`)
  const data=await response.json()
  return data["_embedded"]["flights"]
}

// fetch seat by id with flight 
export const fetchSeatsByFlightId = async (flightId) => {
  const response = await fetch(`http://localhost:8080/flights/${flightId}/seats`);
  const data= await response.json();
  return data ["_embedded"]["seats"]
};

// 
export const fetchOccupiedSeat=async (flightId)=>{
    const response=await fetch(`http://localhost:8080/flights/search/countBySeatsOccupiedTrueAndFlightId?flightId=${flightId}`)
    const data=await response.text()
    console.log("Fetched data")

    return data;
}



