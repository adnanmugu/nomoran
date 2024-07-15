import Input from 'src/layouts/input';
import Details from 'src/layouts/details';
import React from 'react';

export default function Home() {
  return (
    <main className="container">
      <div className="container--content">
        <div className="container--input">
          <Input />
          <Details />
          <div className="box--files">
            <h1>Files.</h1>
          </div>
        </div>
        <div className="container__about">
          <h1>About</h1>
        </div>
      </div>
      <div className="container--ads">
        <div className="box--horizontal">this horizontal</div>
        <div className="box--vertical">this vertical</div>
      </div>
    </main>
  );
}
