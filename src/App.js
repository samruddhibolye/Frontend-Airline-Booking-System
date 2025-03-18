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
