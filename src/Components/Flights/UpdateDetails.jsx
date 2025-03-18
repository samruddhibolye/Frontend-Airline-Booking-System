import React, { useState } from "react";
import { updateFlight } from "../Service/FlightSerice";
import { FaPlaneDeparture, FaPlaneArrival, FaClock, FaRupeeSign, FaHashtag } from "react-icons/fa";

function UpdateDetails({ flightId, source, destination, price, arrivalTime, depatureTime, status, refreshFlights }) {

  const formatDate = (date) => {
    const isoDate = new Date(date).toISOString();
    return isoDate.slice(0, 19);  // Format the string to "yyyy-MM-ddThh:mm:ss"
  };

  const [formData, setFormData] = useState({
    flightId: flightId,
    source: source,
    destination: destination,
    arrivalTime: formatDate(arrivalTime),
    depatureTime: formatDate(depatureTime),
    status: status,
    price: price
  })

  const handleChange = (e) => {
    let inputBoxName = e.target.name;
    let inputBoxValue = e.target.value;

    setFormData({ ...formData, [inputBoxName]: inputBoxValue })
    console.log(formData)
  }



  const handleSumbit = async (e) => {
    e.preventDefault();
    const data = await updateFlight(flightId, formData)
    refreshFlights();

  }



  return (
    <div>
      {/* Modal */}
      <div className="modal fade" id={`update-flight-${flightId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Flight Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h1></h1>

            <form action="" onSubmit={handleSumbit}>
              {/* Flight Source */}
              <div className="mb-3">
                <label className="form-label">
                  <FaPlaneDeparture className="me-2" /> Flight Source {status}
                </label>
                <input type="text" className="form-control" name="source" value={formData.source} onChange={handleChange} required />
              </div>

              {/* Flight Destination */}
              <div className="mb-3">
                <label className="form-label">
                  <FaPlaneArrival className="me-2" /> Flight Destination
                </label>
                <input type="text" className="form-control" name="destination" value={formData.destination} onChange={handleChange} required />
              </div>

              {/* Departure Time */}
              <div className="mb-3">
                <label className="form-label">
                  <FaClock className="me-2" /> Departure Time {formData.depatureTime}
                </label>
                <input type="datetime-local" className="form-control" name="depatureTime" value={formData.depatureTime} onChange={handleChange} required />
              </div>

              {/* Arrival Time */}
              <div className="mb-3">
                <label className="form-label">
                  <FaClock className="me-2" /> Arrival Time {formData.arrivalTime}
                </label>
                <input type="datetime-local" className="form-control" name="arrivalTime" value={formData.arrivalTime} onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <FaPlaneArrival className="me-2" /> Flight Status
                </label>
                <input type="text" className="form-control" name="status" value={formData.status} onChange={handleChange} required />
              </div>



              {/* Flight Price */}
              <div className="mb-3">
                <label className="form-label">
                  <FaRupeeSign className="me-2" /> Price (₹)
                </label>
                <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default UpdateDetails;
