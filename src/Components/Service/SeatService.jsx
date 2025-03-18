//const API_LINK="http://localhost:8080/passangers"
const SEAT_LINK="http://localhost:8080/passangers"
  const API_LINK="http://localhost:8080/seats"



export const updateSeat=async(seat_link,seat)=>{
   console.log(seat_link,seat)
 
  const response=await fetch(seat_link,{
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(seat)
  })

 const data=await response.json()
 return data;

}

export const getSeatBySeatNumber=async (seatNumber)=>{
  const response=await fetch(`http://localhost:8080/seats/search/findBySeatNumber?seatNumber=${seatNumber}`)
  const data=await response.json()
  return data
}

// fetch seat by id
export const fetchSeatById=async(seatId)=>{

  const response=await fetch(SEAT_LINK+`/${seatId}`)
  const data=await response.json()
  return data;

}

export const fetchseat= async()=>{
   const response=await fetch(API_LINK);
   const data=await response.json();
   return data["_embedded"]["seats"]
  
 }
 