import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFlightById, fetchSeatsByFlightId } from '../Service/FlightSerice';
import logo from '../../image/logo.jpeg';
import PassangerForm from './PassangerForm';
import { fetchPassengersByFlight } from '../Service/PassangerService';
import { updateSeat } from '../Service/SeatService';

function FlightDetails() {
    const { flightId } = useParams();
    const [flight, setFlight] = useState({});
    const [seats, setSeats] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [passengers, setPassengers] = useState([]);
    const [showPassengerTable, setShowPassengerTable] = useState(false);

    const [formdata,setFormData]=useState([])

    useEffect(() => {
        const getFlightByID = async () => {
            setFlight(await fetchFlightById(flightId));
        };
        const getSeatById = async () => {
            setSeats(await fetchSeatsByFlightId(flightId));
        };
        getFlightByID();
        getSeatById();
    }, [flightId]);

    const refreshSeats = async () => {
        const updatedSeats = await fetchSeatsByFlightId(flightId);
        setSeats(updatedSeats);
    };

    useEffect(() => {
        fetchPassengersByFlight(flightId)
            .then((data) => {
                setPassengers(data);
            })
            .catch((error) => console.error("Error fetching passengers:", error));
    }, [flightId]);

    const handleSeatClick = (seatNumber, occupied) => {
        if (!occupied) {
            setSelectedSeat(prevSeats =>
                prevSeats.includes(seatNumber)
                    ? prevSeats.filter(seat => seat !== seatNumber)
                    : [...prevSeats, seatNumber]
            );
        }
    };

    const handleBookNow = () => {
        if (selectedSeat) {
            setShowForm(true);
        }
    };



    
    

    return (
        <div className="flight-container">
            <div className="flight-details">
                <div className="flight-header">
                    <h2>{flight.source} ➝ {flight.destination}</h2>
                    <span className="flight-time">{flight.depatureTime} - {flight.arrivalTime}</span>
                </div>

                <div className="flight-info">
                    <img src={logo} alt="Flight" className="flight-logo" />
                    <p><strong>Flight:</strong> {flight.flightId}</p>
                    <p><strong>Duration:</strong> {flight.duration}</p>
                    <p><strong>Price:</strong> <span className="price">₹{flight.price}</span></p>
                </div>

                {/* Show Passenger Details Button */}
                <button 
                    onClick={() => setShowPassengerTable(!showPassengerTable)}
                    className="show-passenger-btn mt-3"
                >
                    {showPassengerTable ? "Hide Passenger Details" : "Show Passenger Details"}
                </button>

                {/* Conditionally Render Passenger Seat Table */}
                {showPassengerTable && (
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Seat Number</th>
                                <th scope="col">Class</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {seats.map((seat) => (
                                <tr key={seat.seatId}>
                                    <th scope="row">{seat.seatId}</th>
                                    <td>{seat.seatNumber}</td>
                                    <td>{seat.classType}</td>
                                    <td>{seat.passangerName || "Not Booked"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <div className="seats-container">
                <div className="selected-seat-container">
                    <label><strong>Selected Seat:</strong></label>
                    <input type="text" value={selectedSeat} readOnly placeholder="Click on a seat" />
                </div>

                <div className="legend-container">
                    <div className="legend">
                        <span className="legend-box available-box"></span> Available
                    </div>
                    <div className="legend">
                        <span className="legend-box occupied-box"></span> Occupied
                    </div>
                </div>

                <div className="seats-container">
                    <h3>Available Seats</h3>
                    <div className="seat-grid">
                        {seats.map((seat, index) => (
                            <div 
                                key={index} 
                                className={seat.occupied ? "occupied" : "available"}
                                onClick={() => handleSeatClick(seat.seatNumber, seat.occupied)}
                                
                            >
                                {seat.seatNumber}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="seat-summary">
                    <p><strong>Available Seats:</strong> {seats.filter((seat) => !seat.occupied).length}</p>
                    <p><strong>Occupied Seats:</strong> {seats.filter((seat) => seat.occupied).length}</p>
                </div>

                <button 
                    className="book-now-btn" 
                    onClick={handleBookNow} 
                    disabled={selectedSeat.length === 0}
                >
                    Book Now
                </button>

                {showForm && <PassangerForm selectedSeat={selectedSeat[0]} closeForm={() => setShowForm(false)} refreshSeats={refreshSeats}/>}
            </div>
        </div>
    );
}

export default FlightDetails;
