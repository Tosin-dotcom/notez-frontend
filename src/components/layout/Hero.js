import '../../assests/styles/hero.css'
import heroImage from '../../assests/images/hero-image.jpg';


const HeroSection = () => {

    return (
        <header className="hero">

          <div className="hero-content">
            <h1>Your Digital Journal and Notepad Platform</h1>
            <p>Welcome to our web-based journal and notepad platform. Experience the convenience of organizing your thoughts and ideas in one place.</p>
            <div className="hero-buttons">
              <button className="btn primary-btn">Get Started</button>
              <button className="btn secondary-btn">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Placeholder" />
          </div>
 
        </header>
      );
}

export default HeroSection
