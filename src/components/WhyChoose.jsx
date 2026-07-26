import {
    FaFlask,
    FaShieldAlt,
    FaUserMd,
    FaPaw,
    FaLightbulb,
    FaHeadset
} from "react-icons/fa";

import "../styles/whychoose.css";

function WhyChoose() {

    const data = [

        {
            icon:<FaFlask/>,
            title:"Research Driven",
            text:"Advanced veterinary formulations developed through scientific research."
        },

        {
            icon:<FaShieldAlt/>,
            title:"Quality Assurance",
            text:"Every product follows strict quality control and manufacturing standards."
        },

        {
            icon:<FaUserMd/>,
            title:"Expert Team",
            text:"Experienced veterinary professionals dedicated to better animal healthcare."
        },

        {
            icon:<FaPaw/>,
            title:"Animal Welfare",
            text:"Committed to safe and effective treatment for livestock and companion animals."
        },

        {
            icon:<FaLightbulb/>,
            title:"Innovation",
            text:"Modern pharmaceutical solutions for evolving veterinary healthcare needs."
        },

        {
            icon:<FaHeadset/>,
            title:"Customer Support",
            text:"Reliable support for veterinarians, distributors and livestock farmers."
        }

    ];

    return (

        <section className="why">

            <div className="container">

                <div className="section-title">

                    <span>WHY CHOOSE US</span>

                    <h2>

                        Why Choose
                        <br/>
                        Chitravet Pharma?

                    </h2>

                    <p>

                        We combine innovation, quality and scientific excellence
                        to provide trusted veterinary healthcare solutions.

                    </p>

                </div>

                <div className="why-grid">

                    {

                        data.map((item,index)=>(

                            <div className="why-card" key={index}>

                                <div className="why-icon">

                                    {item.icon}

                                </div>

                                <h3>

                                    {item.title}

                                </h3>

                                <p>

                                    {item.text}

                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    )

}

export default WhyChoose;