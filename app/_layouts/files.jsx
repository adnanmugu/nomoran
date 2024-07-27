import React from 'react';

const files = () => {
  return (
    <div className="file">
      <span className="file__title">Files.</span>
      <div className="file__container">
        <div className="file__list">
          <div className="file__dot"></div>
          <p>#1 12001 - 13000</p>
        </div>
        <div className="file__list">
          <div className="file__dot"></div>
          <p>#2 13001 - 14000</p>
        </div>
        <div className="file__list">
          <div className="file__dot"></div>
          <p>#3 14001 - 15000</p>
        </div>
        <div className="file__list">
          <div className="file__dot file__dot--last"></div>
          <p>#4 15001 - 16000</p>
        </div>
      </div>
    </div>
  );
};

export default files;
