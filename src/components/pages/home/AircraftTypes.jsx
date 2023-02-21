import React from 'react'
import '../home/AircraftTypes.css';
import businessJet from '../home/img/BusinessJet_lear1.JPG';
import turboprop from '../home/img/Turboprop_kingair1.PNG';
import cabinClassPiston from '../home/img/CabinClassPiston_C401.PNG';
import lightTwinEnginePiston from '../home/img/LightTwinEnginePiston_barron1.PNG';

const AircraftTypes = () => {
    return (
        <section className="container">
            <div className="container-body">
                <div className="container-body_content">
                    <h2>Aircraft Types</h2>
                    <p>Unless you are familiar with various aircraft types and capabilities, it can be very confusing to determine what aircraft to charter. Here we will attempt to clarify that for you a bit.</p>
                </div>
                <div className="container-body_cards">
                    <Card
                        img={businessJet}
                        alt="AargusAir_Lear"
                        title="Business Jet"
                        body="Typically, a twin-engine jet travels at approximately 500 mph, roughly the same as a large passenger jet. This type would be best for a longer trip with a larger group of perhaps 5 to 9 passengers. Most of the jets we will use carry 6-7, but one type, the Falcon 20 can carry 9, with the Gulfstream being able to haul up to 16."
                    />
                    <Card
                        img={turboprop}
                        alt="AargusAir_kingair"
                        title="Turboprop"
                        body="A jet engine with propellors. By using propellers, the engine uses much less fuel but the draw back is in the speed. Most turboprops travel at half the speed of a pure jet (260 mph). Turboprops can carry as many passengers as a light jet and the cabins are often just a little bit larger. Turboprops are generally best for trips under 800 miles."
                    />
                    <Card
                        img={cabinClassPiston}
                        alt="AargusAir_C401"
                        title="Cabin class piston"
                        body="A cabin class piston aircraft has a cabin size generally equivalent to that of a King Air or perhaps slightly less so, depending on type. Its is however, somewhat slower and cannot go quite as high to avoid weather and to take maximum advantage of favorable winds aloft. Having piston engines, it is a less costly altenative that affords a roomy cabin for 5 or less passengers."
                    />
                    <Card
                        img={lightTwinEnginePiston}
                        alt="AargusAir_barron"
                        title="Light twin engine piston"
                        body="Light twin-engine piston aircraft lie at the lower end of the speed/capability range. Light twins generally travel at 170 to 210 Mph and are best for trips under 600 miles. They can carry up to 4-5 (depending on passenger weights and aircraft types) but have smaller cabins. A light twin is great for shorter trips (under 500 miles) and provides maximum economy to any destination."
                    />
                </div>
            </div>
        </section>
    )
};

function Card( props ) {
    return (
        <div className = "card">
        <div className="card-img">
            <img src={props.img} alt={props.alt} />
        </div>
            <div className="card-content">
                <div className="card-content_header">
                    <h3 className="card-content_title">{props.title}</h3>
                    <button className="card-btn">Get a quote</button>
                </div>
                <p className="card-content_body">{props.body}</p>
            </div>
        </div>
    )
}

export default AircraftTypes