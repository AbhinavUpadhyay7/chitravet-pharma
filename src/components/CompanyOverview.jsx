import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaMicroscope,
  FaHeartbeat,
  FaShieldAlt,
} from "react-icons/fa";

import "../styles/companyoverview.css";
import companyImage from "../assets/images/company.jpg";

function CompanyOverview() {
  return (
    <section className="company-overview">

      <div className="container company-container">

        {/* Left Image */}

        <div className="company-image">

          <img
            src={companyImage}
            alt="Chitravet Pharma"
          />

          <div className="experience-box">

            <h2>2025</h2>

            <span>Established</span>

          </div>

        </div>

        {/* Right Content */}

        <div className="company-content">

          <span className="company-tag">
            COMPANY OVERVIEW
          </span>

          <h2>
            About Chitravet Pharma
            <br />
            Private Limited
          </h2>

          <p>
            Chitravet Pharma Private Limited is an emerging
            veterinary pharmaceutical company committed to
            developing innovative, safe and research-driven
            healthcare solutions for livestock, poultry and
            companion animals.
          </p>

          <div className="company-features">

            <div>

              <FaMicroscope />

              <span>Research Based Formulations</span>

            </div>

            <div>

              <FaShieldAlt />

              <span>Quality Manufacturing</span>

            </div>

            <div>

              <FaHeartbeat />

              <span>Animal Welfare First</span>

            </div>

            <div>

              <FaCheckCircle />

              <span>Trusted Veterinary Healthcare</span>

            </div>

          </div>

          <Link
            to="/about"
            className="company-btn"
          >
            Read More
          </Link>

        </div>

      </div>

    </section>
  );
}

export default CompanyOverview;