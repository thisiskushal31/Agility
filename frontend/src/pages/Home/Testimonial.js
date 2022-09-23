import React from 'react'
import Avatar from '../../Assets/avatar.png';

export default function Testimonial() {
  return (
    <section className="testimonial">
    <div className="testimonial__top">
      <h2 className="testimonial__top--secondheading">
        How to use agility for your team
      </h2>
    </div>
    <div className="testimonial__middle swiper">
      <div className="testimonial__middle--main swiper-wrapper">
        <div className="testimonial__middle--slide swiper-slide">
          <figure className="testimonial__middle--picture">
            <img src={Avatar} alt="avatar" className="testimonial__middle--img"/>
          </figure>
          <div className="testimonial__middle--description">
            <p className="testimonial__middle--paragraph">
              “Start by asking your team members to add their daily tasks on Agility. Then, the manager can take a quick stand-up to understand everyone’s priorities for the day.”
            </p>
            <p>Anisha Li, Founder - Brucira</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
