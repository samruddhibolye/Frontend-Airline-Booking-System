import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout';
import Home from './Components/Home';
import AddFlights from './Components/Flights/AddFlights';

import FlightDetails from './Components/Flights/FlightDetails';
import Allflight from './Components/Flights/Allflight';
import PassangerForm from './Components/Flights/PassangerForm';
import About from './Components/About';
import Navbar from './Components/Navbar';
import FlightBooking from './Components/Flights/FlightBooking';


const routes=createBrowserRouter([
  {
     path:"",
     element:<Layout/>,
     children:[
      {
      
          path:"/",
          element:<><Home/><About/></>
      },
      
      {
        path:"create-flight",
        element:<AddFlights/>
      },
      {
        path:"all-flight",
        element:<Allflight/>
      },
      {
        
          path:"/flights/:flightId",
          element:<FlightDetails/>
        
      },
      {
        path:"/booking-flight",
        element:<FlightBooking/>
      }
      
     ]
   
    
  }
  
  
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
