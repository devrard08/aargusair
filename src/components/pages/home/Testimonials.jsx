import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../home/Testimonials.css';


// const Testimonials = () => {
//   return (
//     <section className="testimonials">
//           <div className="testimonials-card-wrapper">
//               <div className="testimonials-card">
//             <div  className="testimonials-card_content">
//                 <div className="testimonials-card_header">
//                     <h2 className="testimonials-card_title">John V. L.</h2>
//                     <h3 className="testimonials-card_company">Major Law Firm</h3>
//                     <h4 className="testimonials-card_location">Grand Rapids, MI</h4>  
//                 </div>
//                 <p className="testimonials-card_body">
//                       I'm an attorney serving clients in various cities in the Midwest and I appreciate the great value in private air charter. Occasionally a trip for a deposition might take us 4 or 5 hours (each way) to drive, or perhaps much longer on a commercial airline due to making connections or "bad fit" scheduling. Private charter gets us there in an hour or two, exactly when we want to arrive, returnING as soon as OUR business has been completed. This saves us time and our clients' money.
//                 </p>  
                  
//             </div>
//         </div>     
//               <div className="testimonials-card">
//             <div  className="testimonials-card_content">
//                 <div className="testimonials-card_header">
//                     <h2 className="testimonials-card_title">John V. L.</h2>
//                     <h3 className="testimonials-card_company">Major Law Firm</h3>
//                     <h4 className="testimonials-card_location">Grand Rapids, MI</h4>  
//                 </div>
//                 <p className="testimonials-card_body">
//                       I'm an attorney serving clients in various cities in the Midwest and I appreciate the great value in private air charter. Occasionally a trip for a deposition might take us 4 or 5 hours (each way) to drive, or perhaps much longer on a commercial airline due to making connections or "bad fit" scheduling. Private charter gets us there in an hour or two, exactly when we want to arrive, returnING as soon as OUR business has been completed. This saves us time and our clients' money.
//                 </p>  
                  
//             </div>
//         </div>     
//               <div className="testimonials-card">
//             <div  className="testimonials-card_content">
//                 <div className="testimonials-card_header">
//                     <h2 className="testimonials-card_title">John V. L.</h2>
//                     <h3 className="testimonials-card_company">Major Law Firm</h3>
//                     <h4 className="testimonials-card_location">Grand Rapids, MI</h4>  
//                 </div>
//                 <p className="testimonials-card_body">
//                       I'm an attorney serving clients in various cities in the Midwest and I appreciate the great value in private air charter. Occasionally a trip for a deposition might take us 4 or 5 hours (each way) to drive, or perhaps much longer on a commercial airline due to making connections or "bad fit" scheduling. Private charter gets us there in an hour or two, exactly when we want to arrive, returnING as soon as OUR business has been completed. This saves us time and our clients' money.
//                 </p>  
                  
//             </div>
//         </div>     
              
                
              
//           </div> 
//     </section>
//   )
// }

// export default Testimonials

export default class Testimonials extends Component {
    render() {
        return (
            <section className="testimonials">
                <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                <div>
                    <div className="testimonials-content">
                        <div className="testimonials-content_body">
                            <p>I'm an attorney serving clients in various cities in the Midwest and I appreciate the great value in private air charter. Occasionally a trip for a deposition might take us 4 or 5 hours (each way) to drive, or perhaps much longer on a commercial airline due to making connections or "bad fit" scheduling. Private charter gets us there in an hour or two, exactly when we want to arrive, returnING as soon as OUR business has been completed. This saves us time and our clients' money.</p>
                        </div>
                        <div className="testimonials-content_author">
                            <h3>John V.L. </h3>        
                        </div>
                        <div className="testimonials-content_company">
                            <h4>Major Law Firm</h4>        
                        </div>
                        <div className="testimonials-content_location">
                            <h5>Grand Rapids, MI</h5>
                        </div>
                    </div>
                </div>
            </Carousel>
            </section>
        )
    }
}