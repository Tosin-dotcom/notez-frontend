import CallToAction from "./CallToAction";
import '../../assests/styles/features.css'
import feature1 from '../../assests/images/feature1.jpg'
import feature2 from '../../assests/images/feature2.jpg'
import feature3 from '../../assests/images/feature3.jpg'

const Features = () => {

    return (
      <section className="feature-section">
        <div className="feature-heading">
          <h2>Effortlessly organize and capture your thoughts</h2>
          <p>Our web-based journal and notepad allows you to easily jot down your ideas, create to-do lists, and keep track of important information. With a user-friendly interface and intuitive features, you can stay organized and productive.</p>
        </div>

        <section className="features">

          <div className="feature-card">
            <img src={feature1} alt="Feature 1" />
            <div className="feature-text">
              <h3>Stay organized and boost your productivity</h3>
              <p>Efficiently manage your tasks and stay on top of your goals with our journal and notepad.</p>
            </div>
          </div>
          <div className="feature-card">
            <img src={feature2} alt="Feature 2" />
            <div className="feature-text">
              <h3>Capture your ideas anytime, anywhere</h3>
              <p>With our web-based journal and notepad, you can easily jot down your thoughts and inspiration, whether you're at home or on the go.</p>
            </div>
          </div>
          <div className="feature-card">
            <img src={feature3} alt="Feature 3" />
            <div className="feature-text">
              <h3>Collaborate and share with ease</h3>
              <p>Our journal and notepad allows you to collaborate with others, making it easy to share ideas and work together on projects.</p>
            </div>
          </div>
        </section>

        <div>
          <CallToAction /> 
        </div>

      </section>
        
      );

}

export default Features
