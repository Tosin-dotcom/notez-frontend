import AppRoutes from "../../routes/RouterConfig";
import "../../assests/styles/register.css";
import { useState } from "react";
import useRegister from "../../hooks/auth/useRegister";
import { useNavigate } from "react-router-dom";



const Register = () => { 

  const { register, loading } = useRegister();
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerPayload = {
      email,
      username,
      lastName: lastname,
      firstName: firstname,
      password,
    };
    const success = await register(registerPayload);
    if (success) {
      navigate(AppRoutes.login)
    }

  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-info">
          <h2>See your path clearly</h2>
          <p>All your goals in one glance!</p>
        </div>

        <div className="register-form">
          <h1>Welcome to Notezz!</h1>
          <p className="register-form-text">Glad to have you here!</p>

          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label>First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />

            <label>Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          
            <button type="submit" className="register-button" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="register-footer">
            Have an account already? <a href={AppRoutes.login}>Login.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
