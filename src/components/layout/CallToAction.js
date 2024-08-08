import React from 'react';
import { Link } from 'react-router-dom';
import '../../assests/styles/callToAction.css';
import AppRoutes from '../../routes/RouterConfig'

const CallToAction = () => {

  return (
    <div className="cta-container">
      <button className="cta-btn primary-btnn">Learn More</button>
    
      <Link to={AppRoutes.register}>
        <button className="cta-btn secondary-btnn">Sign Up &nbsp; &gt;</button>
      </Link>
        
    </div>
  );
};

export default CallToAction;
