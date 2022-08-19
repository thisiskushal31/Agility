import React from 'react'

export default function Feature() {
  return (
    <section className="about">
    <div className="about__main">
      <div className="about__middle">
        <div className="about__middle--item">
          <div className="about__article">
            <h2 className="about__article--secondheading">What’s different about Agility?</h2>
            <p className="about__article--paragraph">
              Agility provides all the functionality your team needs, without
              the complexity. Our software is tailor-made for modern digital
              product teams.
            </p>
          </div>
        </div>
        <div className="about__middle--item">
          <div className="about__box">
            <div className="about__box--mini">
              <div className="about__box--description">
                <hgroup className="about__box--number">
                  <h3 className="about__box--middleheading">01</h3>
                  <h4 className="about__box--smallheading">Track company-wide progress</h4>
                </hgroup>
                <p className="about__box--paragraph">
                  See how your day-to-day tasks fit into the wider vision. Go from
                  tracking progress at the milestone level all the way done to the
                  smallest of details. Never lose sight of the bigger picture again.
                </p>
              </div>
            </div>
            <div className="about__box--mini">
              <div className="about__box--description">
                <hgroup className="about__box--number">
                  <h3 className="about__box--middleheading">02</h3>
                  <h4 className="about__box--smallheading">Advanced built-in reports</h4>
                </hgroup>
                <p className="about__box--paragraph">
                  Set internal delivery estimates and track progress toward company
                  goals. Our customisable dashboard helps you build out the reports
                  you need to keep key stakeholders informed.
                </p>
              </div>
            </div>
            <div className="about__box--mini">
              <div className="about__box--description">
                <hgroup className="about__box--number">
                  <h3 className="about__box--middleheading">03</h3>
                  <h4 className="about__box--smallheading">Everything you need in one place</h4>
                </hgroup>
                <p className="about__box--paragraph">Stop jumping from one service to another to communicate, store files,
                  track tasks and share documents. Manage offers an all-in-one team
                  productivity solution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
