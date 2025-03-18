const API_LINK="http://localhost:8080/passangers"
 const SEAT_LINK="http://localhost:8080/passangers"

// to add product
export const addPassanger=async(passanger)=>{
 
    const response=await fetch(API_LINK,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(passanger)
    })
  console.log(response)

  const data =await response.json()

  console.log(data)

  return data;
}

// Allocate Seats

export const allocateSeat = (passangerId, seatLink) => {
    console.log(passangerId,seatLink)
    const data=fetch(`${seatLink}/passenger`, {
        method: "PUT",
        headers: { "Content-Type": "text/uri-list" },
        body: (`${passangerId._links.self.href}`)
    })
   return data
};





// fetch passanger by passanger id
 export const fetchPassangerById=async(passangerId)=>{
 
   const response=await fetch(API_LINK+`/${passangerId}`)
   const data=await response.json()
   return data;
 
 }



 export const fetchPassanger= async()=>{
   const response=await fetch(API_LINK);
   const data=await response.json();
   return data["_embedded"]["passangers"]
  
 }

 export const fetchPassengersByFlight = async (flightId) => {
    try {
        const response = await fetch(`http://localhost:8080/passangers?flightId=${flightId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch passengers for flight");
        }
        const data = await response.json();
        console.log("Passengers for flight:", data["_embedded"]["passangers"]);
        return data["_embedded"]["passangers"] || [];
    } catch (error) {
        console.error("Error fetching passengers:", error);
        return [];
    }
};

 
