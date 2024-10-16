import './LoginFailure.css'
import { useNavigate } from 'react-router-dom';

const LoginFailure = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className = "body2">
    <div className="failure-container">
      <h1>Login Failed</h1>
      <h3>Please check your credentials and try again.</h3>
      <button onClick={() => navigate('/')}>Login</button>
      <button onClick={() => navigate('/employee-form')}>Employee Registration Form</button>
    </div>
    </div>
    </>
  );
};

export default LoginFailure;
