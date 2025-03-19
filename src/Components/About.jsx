import React from 'react';
import about1 from '../image/about1.jpg';

function About() {
  return (
    <section id="about">
          <div className="about-container">
            {/* Left Side: Image */}
            <div className="about-image">
                <img src={about1} alt="Airplane Travel" />
            </div>

        {/* Right-side Content */}
        <div class="plan__grid">
        <div class="plan__grid">
          <span class="number">01</span>
          <h4>Travel Requirements for Dubai</h4>
          <p>
            Stay informed and prepared for your trip to Dubai with essential
            travel requirements, ensuring a smooth and hassle-free experience in
            this vibrant and captivating city.
          </p>
          <span class="number">02</span>
          <h4>Multi-risk travel insurance</h4>
          <p>
            Comprehensive protection for your peace of mind, covering a range of
            potential travel risks and unexpected situations.
          </p>
          <span class="number">03</span>
          <h4>Travel Requirements by destinations</h4>
          <p>
            Stay informed and plan your trip with ease, as we provide up-to-date
            information on travel requirements specific to your desired
            destinations.
          </p>
        </div>
      </div>
      
    </div>
    </section>
  );
}

export default About;
