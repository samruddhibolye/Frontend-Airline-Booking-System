import React, { useState } from 'react';
import { addFlight } from '../Service/FlightSerice';
import { ToastContainer, toast } from 'react-toastify';
import addImge from '../../image/addimge.jpeg'


function AddFlights() {
    const [formData, setFormData] = useState({
        depatureTime: "",
        arrivalTime: "",
        source: "",
        destination: "",
        status: "",
        duration: "",
        price: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      toast.success("flight added successfully")

        addFlight(formData);
        
        console.log("Form submitted", formData);
        setFormData({
            depatureTime: "",
            arrivalTime: "",
            source: "",
            destination: "",
            status: "",
            duration: "",
            price: ""
        });
    };

    return (
      <div className="form-container">
            <h2>Add Flight Details</h2>
            <form onSubmit={handleSubmit}>
                <label>Departure:</label>
                <input type="datetime-local" required 
                    value={formData.depatureTime} onChange={handleChange} name='depatureTime' />

                <label>Arrival:</label>
                <input type="datetime-local" required 
                    value={formData.arrivalTime} onChange={handleChange} name='arrivalTime' />

                <label>Source:</label>
                <input type="text" required 
                    value={formData.source} onChange={handleChange} name='source' />

                <label>Destination:</label>
                <input type="text" required 
                    value={formData.destination} onChange={handleChange} name='destination' />

                <label>Duration:</label>
                <input type="text" required 
                    value={formData.duration} onChange={handleChange} name='duration' />

                <label>Status:</label>
                <input type="text" required 
                    value={formData.status} onChange={handleChange} name='status' />

                <label>Price:</label>
                <input type="number" required 
                    value={formData.price} onChange={handleChange} name='price' />
                       
                       

                <button type="submit">Proceed</button>
                <button type="button">Cancel</button>
            </form>
           <ToastContainer/>
        </div>
    );
}

export default AddFlights;
