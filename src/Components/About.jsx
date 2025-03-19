import React from 'react';
import about1 from '../image/about1.jpg';
import traveller1 from '../image/traveller1.jpg';
import traveller2 from '../image/traveller2.jpg';
import traveller3 from '../image/traveller3.jpg';
import traveller4 from '../image/traveller4.jpg';
import client1 from '../image/client1.jpg';
import client2 from '../image/client2.jpg';
import client3 from '../image/client3.jpg';
import client4 from '../image/client4.jpg';
<style>

<link
      href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css"
      rel="stylesheet"
    />
</style>
function About() {
  return (
    <div>
    <section class="memories">
      <div class="section__container memories__container">
        <div class="memories__header">
          <h2 class="section__header">
            Travel to make memories all around the world
          </h2>
         
        </div>
        <div class="memories__grid">
          <div class="memories__card">
            <span>1</span>
            <h4>Book & relax</h4>
            <p>
              With "Book and Relax," you can sit back, unwind, and enjoy the
              journey while we take care of everything else.
            </p>
          </div>
          <div class="memories__card">
            <span>2</span>
            <h4>Smart Checklist</h4>
            <p>
              Introducing Smart Checklist with us, the innovative solution
              revolutionizing the way you travel with our airline.
            </p>
          </div>
          <div class="memories__card">
            <span>3</span>
            <h4>Save More</h4>
            <p>
              From discounted ticket prices to exclusive promotions and deals,
              we prioritize affordability without compromising on quality.
            </p>
          </div>
        </div>
      </div>
    </section>




      {/* best traveller */}
    <section class="section__container travellers__container">
      <h2 class="section__header">Best travellers of the month</h2>
      <div class="travellers__grid">
        <div class="travellers__card">
          <img src={traveller1} alt="traveller" />
          <div class="travellers__card__content">
            <img src={client1} alt="client" />
            <h4>Emily Johnson</h4>
            <p>Dubai</p>
          </div>
        </div>
        <div class="travellers__card">
          <img src={traveller2} alt="traveller" />
          <div class="travellers__card__content">
            <img src={client2} alt="client" />
            <h4>David Smith</h4>
            <p>Paris</p>
          </div>
        </div>
        <div class="travellers__card">
          <img src={traveller3} alt="traveller" />
          <div class="travellers__card__content">
            <img src={client3} alt="client" />
            <h4>Olivia Brown</h4>
            <p>Singapore</p>
          </div>
        </div>
        <div class="travellers__card">
          <img src={traveller4} alt="traveller" />
          <div class="travellers__card__content">
            <img src={client4} alt="client" />
            <h4>Daniel Taylor</h4>
            <p>Malaysia</p>
          </div>
        </div>
      </div>
    </section>
    </div>

    
  );
}

export default About;
