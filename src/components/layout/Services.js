import '../../assests/styles/services.css'
import ServiceImage from '../../assests/images/service4.jpg'
import CallToAction from './CallToAction'


const Services = () => {
    return (
      <section className="services-section">
        <div className="services-content">
          <h1>Capture Your Thoughts and Ideas Effortlessly</h1>
          <p>
            Our web-based journal and notepad is the perfect tool for both personal and professional use. Whether you want to jot down your daily thoughts, brainstorm ideas, or keep track of important information, our platform provides a seamless and intuitive experience. With features like easy organization, secure cloud storage, and the ability to access your notes from anywhere, you'll never miss a beat.
          </p>
          
          <CallToAction />
        </div>
        <div className="services-image">
          <img src={ServiceImage} alt="Placeholder" />
        </div>
      </section>
    );
  };
  
  export default Services;
