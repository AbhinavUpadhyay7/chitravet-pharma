import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaUserMd,
  FaGraduationCap,
  FaAward,
  FaBriefcase,
} from "react-icons/fa";

import directorImg from "../assets/director.png";
import bannerImg from "../assets/director-banner.jpg";

import "../styles/director.css";

function Director() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}

      <section
        className="director-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url(${bannerImg})`,
        }}
      >
        <div className="container">
          <h1>Director</h1>
          <p>
            Home <span>/</span> Director
          </p>
        </div>
      </section>

      {/* Director Profile */}

      <section className="director-profile">

        <div className="container director-container">

          <div className="director-image">

            <img
              src={directorImg}
              alt="Dr. Manish Kumar Pandey"
            />

          </div>

          <div className="director-content">

            <span className="director-tag">
              OUR DIRECTOR
            </span>

            <h2>
              Dr. Manish Kumar Pandey
            </h2>

            <h4>
              B.V.Sc & AH | M.V.Sc (Veterinary Medicine)
            </h4>

            <p>
              Dr. Manish Kumar Pandey is the Director of
              Chitravet Pharma Private Limited.
              With strong academic knowledge and
              professional experience in Veterinary
              Medicine, he is committed to improving
              animal healthcare through innovation,
              quality and ethical pharmaceutical
              practices.
            </p>

            <div className="director-info">

              <div>
                <FaUserMd />
                Veterinary Expert
              </div>

              <div>
                <FaGraduationCap />
                M.V.Sc Qualified
              </div>

              <div>
                <FaAward />
                Quality Focused
              </div>

              <div>
                <FaBriefcase />
                Industry Leadership
              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Director;