import React from 'react';

const files = () => {
  return (
    <div class="file">
      <span class="file__title">Files.</span>
      <div class="file__container">
        <div class="file__list">
          <div class="file__dot"></div>
          <p>#1 12001 - 13000</p>
        </div>
        <div class="file__list">
          <div class="file__dot"></div>
          <p>#2 13001 - 14000</p>
        </div>
        <div class="file__list">
          <div class="file__dot"></div>
          <p>#3 14001 - 15000</p>
        </div>
        <div class="file__list">
          <div class="file__dot file__dot--last"></div>
          <p>#4 15001 - 16000</p>
        </div>
      </div>
    </div>
  );
};

export default files;
