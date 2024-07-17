import Form from 'src/layouts/form';
import Details from 'src/layouts/details';
import Files from 'src/layouts/files';
import React from 'react';

export default function Home() {
  return (
    <main>
      <div className="container ">
        <div className="container container--form">
          <Form />
          <Details />
          <Files />
        </div>
        <div className="container container--about">
          <h1>About</h1>
          <p>
            Nomoran is application simplifies the process of generating
            sequential numbers by allowing users to input a starting number,
            after which the app automatically increments the value to create a
            series. This sequence is then conveniently saved into a CSV or RTF
            file, making it ideal for tasks requiring ordered data generation
            and easy file export.
          </p>
        </div>
      </div>
      <div className="container container--ads">
        <div className="box--horizontal">this horizontal</div>
        <div className="box--vertical">this vertical</div>
      </div>
    </main>
  );
}