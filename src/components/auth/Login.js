import { useState } from "react";
import "../../assests/styles/login.css";
import AppRoutes from "../../routes/RouterConfig";
import useLogin from "../../hooks/auth/useLogin";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const { login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login({
      email,
      password
    })
    if (success) {
      navigate(AppRoutes.userDashBoard)
    }
  
    
  };

  return (
    <div className="login-container">

      <div className="login-card">

      
        <div className="login-form">
          <h1>Good to see you again!</h1>
          <p className="login-form-text">Let's reach those goals</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <p className="login-footer">
            Don't have an account? <a href={AppRoutes.register}>Sign up.</a>
          </p>
        </div>

        <div className="login-info">
          <h2>See your path clearly</h2>
          <p>All your goals in one glance!</p>
        </div>

      </div>

    </div>
  );
};

export default Login;
