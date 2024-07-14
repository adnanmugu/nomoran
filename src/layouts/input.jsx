import React from 'react';

const input = () => {
  return (
    <div class="content">
      <h1 class="content__title">Untitled</h1>
      <div class="content__main">
        <div class="content__wrapper">
          <div class="content__input">
            <label for="row-length">row length</label>
            <input
              placeholder="number..."
              type="text"
              name="row-length"
              id="row-length"
            />
          </div>
          <div class="content__input">
            <label for="column-length">column length</label>
            <input
              placeholder="number ..."
              type="text"
              name="column-length"
              id="column-length"
            />
          </div>
          <div class="content__input select">
            <div class="select__title">leading zero</div>
            <div class="select__selected">0x</div>
            <div class="select__items">
              <div>0x</div>
              <div>00x</div>
              <div>000x</div>
              <div>0000x</div>
              <div>00000x</div>
              <div>000000x</div>
            </div>
          </div>
        </div>
        <div class="content__wrapper">
          <div class="content__input">
            <label for="first-value">first value</label>
            <input
              placeholder="number..."
              type="text"
              name="first-value"
              id="first-value"
            />
          </div>
          <div class="content__input content__input--mute">
            <label for="last-value">last value</label>
            <input
              placeholder="number..."
              type="text"
              name="last-value"
              id="first-value"
            />
          </div>

          <div class="content__input">
            <label for="leading-zero">increment type</label>
            <select name="leading-zero" id="leading-zero">
              <option value="tens">number</option>
              <option value="hundreds">barcode</option>
            </select>
          </div>
        </div>
      </div>
      <div class="content__button">
        <button>generate</button>
      </div>
    </div>
  );
};

export default input;
