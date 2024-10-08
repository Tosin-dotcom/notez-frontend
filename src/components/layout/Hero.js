import "../../assests/styles/hero.css";
import heroImage from "../../assests/images/hero-image.jpg";
import { useGlobalContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../routes/RouterConfig";

const HeroSection = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useGlobalContext();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate(AppRoutes.userDashBoard);
    } else {
      navigate(AppRoutes.register);
    }
  };

  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Your Digital Journal and Notepad Platform</h1>
        <p>
          Welcome to our web-based journal and notepad platform. Experience the
          convenience of organizing your thoughts and ideas in one place.
        </p>
        <div className="hero-buttons">
          <button className="btn primary-btn" onClick={handleGetStarted}>
            Get Started
          </button>
          <button className="btn secondary-btn">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Placeholder" />
      </div>
    </header>
  );
};

export default HeroSection;
