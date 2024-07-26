import React from 'react';
import Button from 'app/_components/button';
import { Csv, Row, Folder, Zip, Column } from 'app/_assets/index';

export const Details = () => {
  return (
    <div className="detail">
      <span className="detail__title">Details.</span>
      <div className="detail__container">
        <div className="detail__icon">
          <Folder />
          <span>untitled.zip</span>
        </div>
        <div className="detail__icon">
          <Csv />
          <span>8</span>
        </div>
        <div className="detail__icon">
          <Row />
          <span>10</span>
        </div>
        <div className="detail__icon">
          <Column />
          <span>1000</span>
        </div>
        <div className="detail__icon">
          <Zip />
          <span>1000 kb</span>
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Details;
