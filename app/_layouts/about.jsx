import Button from 'app/_components/button';

import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="about__desc">
        <h1>About</h1>
        <p>
          Nomoran is application simplifies the process of generating sequential
          numbers by allowing users to input a starting number, after which the
          app automatically increments the value to create a series. This
          sequence is then conveniently saved into a CSV or RTF file, making it
          ideal for tasks requiring ordered data generation and easy file
          export.
        </p>
        <div className="about__btn-wrapper">
          <Button description="download cdr script" />
        </div>
      </div>
      <div className="about__image">images</div>
    </div>
  );
};

export default About;
