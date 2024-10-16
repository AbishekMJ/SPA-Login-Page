import { useState } from "react";
import './EmployeeForm.css';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    phone: '',
    gender: '',
    email: '',
    address: '',
    position: '',
  });
  const [submittedData, setSubmittedData] = useState([]);
  const [bgColor, setBgColor] = useState('yellow'); 
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: '', id: '', phone: '', gender: '', email: '', address: '', position: '' });
    setBgColor('lightblue'); // Change background color on submit
    setIsSubmitted(true); // Set form submission state to true
  };

  return (
    <div className="body3" style={{ backgroundColor: bgColor }}> {/* Apply dynamic background color */}
      <div className="container2">
        <h1>Employee Form</h1>
        {!isSubmitted ? ( // Conditional rendering based on submission state
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} required />
            <input type="text" name="id" placeholder="Enter Your ID" value={formData.id} onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Enter Your Phone Number" value={formData.phone} onChange={handleChange} required />
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Enter Your Address" value={formData.address} onChange={handleChange} required />
            <input type="text" name="position" placeholder=" Enter Your Position" value={formData.position} onChange={handleChange} required />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="table-container">
            {submittedData.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  {submittedData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.id}</td>
                      <td>{data.phone}</td>
                      <td>{data.gender}</td>
                      <td>{data.email}</td>
                      <td>{data.address}</td>
                      <td>{data.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeForm;
