import Form from 'app/_layouts/form';
import Details from 'app/_layouts/details';
import Files from 'app/_layouts/files';
import About from 'app/_layouts/about';
import Ads from 'app/_layouts/ads';
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
        <Ads />
      </div>
    </main>
  );
}
