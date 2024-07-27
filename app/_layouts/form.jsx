'use client'; // This is a client component
import React, { useState } from 'react';
import { getNumber } from 'app/_lib/_app.js';

export default function Form() {
  const [inputs, setInputs] = useState({
    rowLength: '',
    columnLength: '',
    leadingZero: '',
    firstValue: '',
    incrementType: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data as needed
    console.log(inputs);
    const getData = getNumber(
      inputs.rowLength,
      inputs.columnLength,
      inputs.firstValue,
      inputs.leadingZero
    );

    console.log(getData);
  };

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(1, prevCount - 1));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__title">
        <input type="text" placeholder="Untitled." />
      </div>
      <div className="form form--container">
        <div className="form form--wrapper">
          <div className="form__input">
            <label htmlFor="rowLength">row length</label>
            <input
              placeholder="number..."
              type="text"
              name="rowLength"
              id="rowLength"
              onChange={handleChange}
              value={inputs.rowLength}
            />
          </div>
          <div className="form__input">
            <label htmlFor="columnLength">column length</label>
            <input
              type="text"
              onChange={handleChange}
              value={inputs.columnLength}
              placeholder="number ..."
              name="columnLength"
              id="columnLength"
            />
          </div>

          <div className="form__input">
            <label htmlFor="leadingZero">leading zero</label>
            <select
              name="leadingZero"
              id="leadingZero"
              onChange={handleChange}
              value={inputs.leadingZero}
            >
              <option value="one">0X</option>
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
            <label htmlFor="firstValue">first value</label>
            <input
              placeholder="number..."
              type="text"
              name="firstValue"
              id="firstValue"
              onChange={handleChange}
              value={inputs.firstValue}
            />
          </div>
          <div className="form__input form__input--mute">
            <label htmlFor="last-value">last value</label>
            <input
              placeholder="number..."
              type="text"
              name="last-value"
              id="first-value"
              disabled
            />
          </div>
          <div className="form__input">
            <label htmlFor="incrementType">increment type</label>
            <select
              name="incrementType"
              id="increment-type"
              onChange={handleChange}
              value={inputs.incrementType}
            >
              <option value="number">number</option>
              <option value="barcode">barcode</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form__button">
        <button className="btn-primary" type="submit">
          generate
        </button>
        <div className="form__button--increment">
          <button
            className="btn-click btn-click--minus"
            onClick={handleDecrement}
          >
            -
          </button>
          <span>{count}</span>
          <button className="btn-click" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </form>
  );
}
