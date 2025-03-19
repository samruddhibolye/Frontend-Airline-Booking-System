import React from 'react'
import { toast, ToastContainer } from 'react-toastify';

const [formData, setFormData] = useState({
        passangerName: "",
        age: "",
        gender: "",
        passportNumber: "",
        nationality: "",

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        
        toast.success("passanger Added Successfully")

        

        console.log("Form submitted", formData);
        setFormData({

            passangerName: "",
            age: "",
            gender: "",
            passportNumber: "",
            nationality: "",

        });
        
    };

    

function UpdatePassangerForm() {
  return (
    <div className="form-modal">
        <div className="form-container">
          <h3>Passenger Details</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              
              <label>  Name* </label>
              <input type="text" required 
              value={formData.passangerName} onChange={handleChange} name='passangerName'/>
  
              <label>Age *</label>
              <input type="number" required 
              value={formData.age} onChange={handleChange} name='age'/>
  
              <label>Gender</label>
              <select value={formData.gender} onChange={handleChange} name='gender'>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
  
              <label>Passport Number</label>
              <input type="text" 
              value={formData.passportNumber} onChange={handleChange} name='passportNumber'/>
  
              <label>Nationality</label>
              <input type="text" 
              value={formData.nationality} onChange={handleChange} name='nationality'/>
            </div>
  
            <div className="button-group">
              <button type="submit" className="submit-btn">Submit</button>
              <button type="button" className="close-btn" onClick={closeForm}>
                Close
              </button>
            </div>
          </form>
        </div>
        <ToastContainer/>
      </div>
  )
}

export default UpdatePassangerForm