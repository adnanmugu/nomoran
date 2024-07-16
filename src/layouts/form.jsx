import React from 'react';
import Button from 'src/components/button';

const Form = () => {
  return (
    <div className="form">
      <div className="form__title">
        <input type="text" placeholder="Untitled." />
      </div>
      <div className="form form--container">
        <div className="form form--wrapper">
          <div className="form__input">
            <label for="row-length">row length</label>
            <input
              placeholder="number..."
              type="text"
              name="row-length"
              id="row-length"
            />
          </div>
          <div className="form__input">
            <label for="column-length">column length</label>
            <input
              placeholder="number ..."
              type="text"
              name="column-length"
              id="column-length"
            />
          </div>

          <div className="form__input">
            <label for="column-length">leading zero</label>
            <input
              placeholder="number ..."
              type="text"
              name="column-length"
              id="column-length"
            />
          </div>
        </div>

        <div className="form form--wrapper">
          <div className="form__input">
            <label for="first-value">first value</label>
            <input
              placeholder="number..."
              type="text"
              name="first-value"
              id="first-value"
            />
          </div>
          <div className="form__input">
            <label for="last-value">last value</label>
            <input
              placeholder="number..."
              type="text"
              name="last-value"
              id="first-value"
            />
          </div>
          <div className="form__input">
            <label for="leading-zero">increment type</label>
            <select name="leading-zero" id="leading-zero">
              <option value="tens">number</option>
              <option value="hundreds">barcode</option>
            </select>
          </div>
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Form;
