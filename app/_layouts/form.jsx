'use client'; // This is a client component
import React, { useState } from 'react';
import initilizeFile from 'app/_lib/app';

export default function Form() {
  const [count, setCount] = useState(1);
  const [inputs, setInputs] = useState({
    fileName: '',
    rows: '',
    cols: '',
    paddNum: '1',
    firstValue: '',
    incrementType: 'number',
  });

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(1, prevCount - 1));
  };

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

    // const datas = {
    //   fileName: inputs.fileName,
    //   rowLength: inputs.rowLength,
    //   columnLength: inputs.columnLength,
    //   leadingZero: inputs.leadingZero,
    //   firstValue: inputs.firstValue,
    //   incrementType: inputs.incrementType,
    //   fileCount: count,
    // };
    // initilizeFile(datas);
  };

  const datas = {
    fileName: 'lembang',
    type: 'number',
    rows: 2,
    cols: 10,
    paddNum: 3,
    firstValue: 1,
    fileCount: 2,
  };
  const result = initilizeFile(datas);
  console.log(result);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__title">
        <input
          type="text"
          name="fileName"
          placeholder="Untitled."
          value={inputs.fileName}
          onChange={handleChange}
        />
      </div>
      <div className="form form--container">
        <div className="form form--wrapper">
          <div className="form__input">
            <label htmlFor="rows">row length</label>
            <input
              placeholder="number..."
              type="text"
              name="rows"
              id="rows"
              onChange={handleChange}
              value={inputs.rows}
            />
          </div>
          <div className="form__input">
            <label htmlFor="cols">column length</label>
            <input
              type="text"
              onChange={handleChange}
              value={inputs.cols}
              placeholder="number ..."
              name="cols"
              id="cols"
            />
          </div>

          <div className="form__input">
            <label htmlFor="paddNum">leading zero</label>
            <select
              name="paddNum"
              id="paddNum"
              onChange={handleChange}
              value={inputs.paddNum}
            >
              <option value="1">0X</option>
              <option value="2">00X</option>
              <option value="3">000X</option>
              <option value="4">0000X</option>
              <option value="5">00000X</option>
              <option value="6">000000X</option>
              <option value="7">0000000X</option>
              <option value="8">00000000X</option>
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
            <label htmlFor="type">increment type</label>
            <select
              name="type"
              id="type"
              onChange={handleChange}
              value={inputs.type}
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
        <div className="form__button--wrapper">
          <button
            className="btn-click btn-click--minus"
            onClick={handleDecrement}
          >
            -
          </button>
          <input type="text" name="fileCount" defaultValue={count} />
          <button className="btn-click" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </form>
  );
}
