import React from 'react';
import Button from 'src/components/button';
import { Csv, Row, Folder, Zip, Column } from 'src/assets/index';

export const Details = () => {
  return (
    <div className="wrapper wrapper--input">
      <h1 className="wrapper__title">Untitled.</h1>
      <div className="wrapper__main">
        <div className="wrapper__icons">
          <div className="wrapper__icon">
            <Folder />
            <span class="icon__desc">untitled.zip</span>
          </div>
          <div className="wrapper__icon">
            <Csv />
            <span>8</span>
          </div>
          <div className="wrapper__icon">
            <Row />
            <span>10</span>
          </div>
          <div className="wrapper__icon">
            <Column />
            <span>1000</span>
          </div>
          <div className="wrapper__icon">
            <Zip />
            <span>1000 kb</span>
          </div>
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Details;
