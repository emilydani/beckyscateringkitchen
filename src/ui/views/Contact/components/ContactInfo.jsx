import React from "react";

export default function ContactInfo() {

  return (
      <div>

    <div className="contact__info-container">
        <div className="contact__info-retangle"></div>
        <div className="container contact__info-move-up">
            <h2 className="contact__info-h2">Contact Information</h2>
            <p className="contact__info-p">For any questions or to make a reservation, contact me.</p>
            <div className="contact__info-grid">
                <div className="contact__info-grid-box">
                    <div className="contact__info-center">
                        <div className="contact__info-phone"></div>
                        <h2>Call Us!</h2>
                    </div>
                    <p>
                        Call Becky Sellers at (208) 201-1727 for any questions or to make a reservation.                    
                    </p>
                </div>
                <div className="contact__info-grid-box">
                    <div className="contact__info-center">
                        <div className="contact__info-email"></div>
                        <h2>E-mail Us!</h2>
                    </div>
                    <p>
                    E-mail Becky Sellers at beckydsellers@gmail.com for any questions or to make a reservation.                    </p>
                </div> 
            </div>    
        </div>
    </div>      </div>

    
  );
}