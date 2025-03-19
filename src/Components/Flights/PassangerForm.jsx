import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { addPassanger, allocateSeat, fetchPassangerById, fetchSeatById } from '../Service/PassangerService';
import FlightItem from './FlightItem';
import { getSeatBySeatNumber, updateSeat } from '../Service/SeatService';

function PassangerForm({closeForm,selectedSeat, refreshSeats }) {
     const [showForm, setShowForm] = useState(false);
      const [passanger,setPassanger]=useState({})
      const [seat,setSeat]=useState({})

    const [formData, setFormData] = useState({
        passangerName: "",
        age: "",
        gender: "",
        passportNumber: "",
        nationality: "",
        

    });

    

    const getSeat=async ()=>{

      const data=await getSeatBySeatNumber(selectedSeat);
      setSeat(data)
      
    }

    useEffect(()=>{

      getSeat()

    },[])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        refreshSeats();
        toast.success("passanger Added Successfully")

        const passanger = await addPassanger(formData);

        

      // Allocate seat to the passenger by passing the passengerId and selectedSeat's seatId
      const seatAllocationResponse = await allocateSeat(passanger, seat._links.self.href);
      console.log(seatAllocationResponse)

      const updatedSeat=await updateSeat(seat._links.self.href,{...seat,"occupied":true})
      refreshSeats();



        console.log("Form submitted", formData);
        setFormData({

            passangerName: "",
            age: "",
            gender: "",
            passportNumber: "",
            nationality: "",

        });
        
    };

    

    return (
      <div className="form-modal">
     

      <div className="form-container">
        <div className="toggle-btn-group">
         
          
        </div>

        <h3>Enter Passenger Details</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              type="text"
              placeholder="Name *"
              value={formData.passangerName}
              onChange={handleChange}
              name="passangerName"
              required
            />
            <input
              type="number"
              placeholder="Age *"
              value={formData.age}
              onChange={handleChange}
              name="age"
              required
            />
            <select
              value={formData.gender}
              onChange={handleChange}
              name="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              type="text"
              placeholder="Passport Number"
              value={formData.passportNumber}
              onChange={handleChange}
              name="passportNumber"
            />
            <input
              type="text"
              placeholder="Nationality"
              value={formData.nationality}
              onChange={handleChange}
              name="nationality"
            />
          </div>

          <div className="button-group">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="close-btn" onClick={closeForm}>Close</button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default PassangerForm