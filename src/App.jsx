
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginFailure from './Components/LoginFailure';
import EmployeeForm from './Components/EmployeeForm';
import LoginPage from './Components/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
        <Route path="/login-failure" element={<LoginFailure />} />
      </Routes>
    </Router>
  );
};

export default App;
