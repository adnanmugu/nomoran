import React from 'react';

const Input = () => {
  return (
    <div className="wrapper">
      <h1 className="wrapper__title">Untitled.</h1>
      <div className="wrapper__main">
        <div className="wrapper__content">
          <div className="wrapper__input">
            <label for="row-length">row length</label>
            <input
              placeholder="number..."
              type="text"
              name="row-length"
              id="row-length"
            />
          </div>
          <div className="wrapper__input">
            <label for="column-length">column length</label>
            <input
              placeholder="number ..."
              type="text"
              name="column-length"
              id="column-length"
            />
          </div>

          <div className="wrapper__input">
            <label for="column-length">leading zero</label>
            <input
              placeholder="number ..."
              type="text"
              name="column-length"
              id="column-length"
            />
          </div>
        </div>

        <div className="wrapper__content">
          <div className="wrapper__input">
            <label for="first-value">first value</label>
            <input
              placeholder="number..."
              type="text"
              name="first-value"
              id="first-value"
            />
          </div>
          <div className="wrapper__input">
            <label for="last-value">last value</label>
            <input
              placeholder="number..."
              type="text"
              name="last-value"
              id="first-value"
            />
          </div>
          <div className="wrapper__input">
            <label for="leading-zero">increment type</label>
            <select name="leading-zero" id="leading-zero">
              <option value="tens">number</option>
              <option value="hundreds">barcode</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
