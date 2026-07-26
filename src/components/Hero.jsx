import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

import "../styles/hero.css";

import heroImage from "../assets/images/hero.png";

function Hero() {

    return (

        <section className="hero">

            <div className="hero-overlay"></div>

            <div className="container hero-container">

                {/* LEFT */}

                <div className="hero-left">

                    <span className="hero-tag">
                        TRUSTED VETERINARY PHARMACEUTICAL COMPANY
                    </span>

                    <h1>
                        Innovative Veterinary
                        <br />
                        Healthcare Solutions
                        <br />
                        for Better Animal Wellness
                    </h1>

                    <p>

                        Chitravet Pharma Private Limited is dedicated to
                        developing safe, effective and research-driven
                        veterinary medicines for livestock, poultry and
                        companion animals.

                    </p>

                    <div className="hero-buttons">

                        <Link
                            to="/products"
                            className="btn-primary"
                        >

                            Explore Products

                            <FaArrowRight />

                        </Link>

                        <Link
                            to="/contact"
                            className="btn-secondary"
                        >

                            Contact Us

                        </Link>

                    </div>

                    <div className="hero-features">

                        <div>

                            <MdVerified />

                            Research Based

                        </div>

                        <div>

                            <MdVerified />

                            Quality Assured

                        </div>

                        <div>

                            <MdVerified />

                            Animal Welfare

                        </div>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="hero-right">

                    {/* Green Badge */}

                    <div className="hero-badge">

                        Animal Health

                    </div>

                    {/* Decorative Dots */}

                    <div className="hero-dots"></div>

                    {/* Glass Card */}

                    <div className="hero-image-card">

                        <img
                            src={heroImage}
                            alt="Veterinary Healthcare"
                        />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;