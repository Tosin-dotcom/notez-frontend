import '../../assests/styles/footer.css'
import { Link } from 'react-router-dom';
import AppRoutes from '../../routes/RouterConfig';


const Footer = () => {
  return (
    <div className='footer-section'>
      <section className="footer-hero">
        <div className="footer-hero-content">
          <h1>Welcome to our Journal!</h1>
          <p>Discover the power of our web-based journal and notepad.</p>
          <div className="footer-cta-container">

          <Link to={AppRoutes.register}>
            <button className="footer-cta-btn footer-primary-btn">Sign Up</button>
          </Link>
          
            <button className="footer-cta-btn footer-secondary-btn">Learn More</button>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Logo</h3>
            <p>Stay up to date on the latest features and releases by joining our newsletter.</p>
            <input type="email" placeholder="Enter email here" />
            <button className="footer-subscribe-btn">Subscribe</button>
          </div>
          <div className="footer-column">
            <h3>Column One</h3>
            <ul>
              <li>Link One</li>
              <li>Link Two</li>
              <li>Link Three</li>
              <li>Link Four</li>
              <li>Link Five</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Column Two</h3>
            <ul>
              <li>Link Six</li>
              <li>Link Seven</li>
              <li>Link Eight</li>
              <li>Link Nine</li>
              <li>Link Ten</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow us</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
