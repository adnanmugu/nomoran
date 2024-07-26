import Form from 'app/_layouts/form';
import Details from 'app/_layouts/details';
import Files from 'app/_layouts/files';
import About from 'app/_layouts/about';
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
          <About />
        </div>
      </div>
      <div className="container container--ads">
        <div className="ads">
          <div className="ads__164">
            <h1>Auto Increment Generator.</h1>
            <p>
              Free tools for generate a list of a number that can use for NCR
              bill
            </p>
          </div>
          <div className="ads__280">this vertical</div>
        </div>
      </div>
    </main>
  );
}
