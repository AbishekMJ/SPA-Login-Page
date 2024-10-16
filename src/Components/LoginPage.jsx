import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Abishek' && password === '1234') {
      setLoginMessage('Login successful!'); // Set the success message
      setTimeout(() => {
        navigate('/employee-form'); // Redirect after 1 second
      }, 1000);
    } else {
      setLoginMessage('Invalid credentials...pls wait!'); // Set failure message
      setTimeout(() => {
        navigate('/login-failure'); // Redirect to login failure page after 1 second
      }, 1000);
    }
  };

  return (
  <>
    <div className = "body1">
    <div className="container1">
      <img src="https://th.bing.com/th/id/OIP.tx9Lu_IfWqgf0nEQEu0RTgHaCD?rs=1&pid=ImgDetMain" alt="Company Logo" />
      <h1>EXCELR EDTECH PRIVATE LTD</h1>
      {loginMessage && <p>{loginMessage}</p>} {/* Display the message */}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder=" Enter Your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder=" Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
   </>
  );
};

export default LoginPage;
