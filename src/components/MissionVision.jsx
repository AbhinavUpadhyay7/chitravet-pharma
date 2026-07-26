import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";
import "../styles/missionvision.css";

function MissionVision() {
  return (
    <section className="mission-section">

      <div className="container">

        <div className="section-heading">
          <span>OUR FOUNDATION</span>
          <h2>Mission • Vision • Values</h2>
          <p>
            Our commitment is to deliver innovative veterinary healthcare
            solutions while maintaining the highest standards of quality,
            ethics and customer satisfaction.
          </p>
        </div>

        <div className="mission-grid">

          <div className="mission-card">

            <div className="icon">
              <FaBullseye />
            </div>

            <h3>Our Mission</h3>

            <p>
              To provide safe, effective and affordable veterinary
              pharmaceutical products that improve animal health and
              productivity.
            </p>

          </div>

          <div className="mission-card">

            <div className="icon">
              <FaEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              To become one of India's most trusted veterinary healthcare
              companies through innovation, research and excellence.
            </p>

          </div>

          <div className="mission-card">

            <div className="icon">
              <FaHandshake />
            </div>

            <h3>Our Values</h3>

            <p>
              Integrity, Quality, Innovation and Customer Satisfaction are
              the values that guide every decision we make.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MissionVision;