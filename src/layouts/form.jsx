'use client'; // This is a client component
import React, { useState } from 'react';

export default function Form() {
  const [value, setValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Input value: ${inputValue}`);
  };
  return (
    <form className="form">
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
            <label for="leading-zero">leading zero</label>
            <select name="leading-zero" id="leading-zero">
              <option value="onoe">0X</option>
              <option value="two">00X</option>
              <option value="three">000X</option>
              <option value="four">0000X</option>
              <option value="five">00000X</option>
              <option value="six">000000X</option>
              <option value="seven">0000000X</option>
              <option value="eight">00000000X</option>
            </select>
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
          <div className="form__input form__input--mute">
            <label for="last-value">last value</label>
            <input
              placeholder="number..."
              type="text"
              name="last-value"
              id="first-value"
              disabled
            />
          </div>
          <div className="form__input">
            <label for="increment-type">increment type</label>
            <select name="increment-type" id="increment-type">
              <option value="tens">number</option>
              <option value="hundreds">barcode</option>
            </select>
          </div>
        </div>
      </div>
      <button className="btn-primary">generate</button>
    </form>
  );
}
