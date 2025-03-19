import React, { useState } from 'react';
import { addFlight } from '../Service/FlightSerice';
import { ToastContainer, toast } from 'react-toastify';
import image1 from '../../image/image1.jpg'


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
        <div
      className="background-container"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="form-overlay">
        <h2>Add Flight</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Source</label>
            <input type="text" required value={formData.source} onChange={handleChange} name="source" />

          </div>
          <div>
            <label>Destination</label>
            <input type="text" required value={formData.destination} onChange={handleChange} name="destination" />
          </div>
          <div>
            <label>Depature Time</label>
            <input type="datetime-local" required value={formData.depatureTime} onChange={handleChange} name="depatureTime" />
          </div>
          <div>
            <label>Arrival Time</label>
            <input type="datetime-local" required value={formData.arrivalTime} onChange={handleChange} name="arrivalTime" />
          </div>
          <div>
            <label>Status</label>
            <input type="text" required value={formData.status} onChange={handleChange} name="status" placeholder="On Time / Delayed" />
          </div>
          <div>
            <label>Price</label>
            <input type="number" required value={formData.price} onChange={handleChange} name="price" placeholder="Enter price" />
          </div>
          <div className="full-width">
            <label>Duration</label>
            <input type="text" required value={formData.duration} onChange={handleChange} name="duration" placeholder="Enter duration" />
          </div>
          <button type="submit">sumbit</button>
        </form>
        <ToastContainer/>
      </div>
    </div>
    );
}

export default AddFlights;
