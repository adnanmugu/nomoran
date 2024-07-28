import React from 'react';

const files = () => {
  const firstLast = ['101 - 200', '201 - 300'];
  return (
    <div className="file">
      <span className="file__title">Files.</span>
      <div className="file__container">
        {firstLast.map((number, index) => {
          return (
            <div key={index} className="file__list">
              <div
                className={
                  index === firstLast.length - 1
                    ? 'file__dot file__dot--last'
                    : 'file__dot'
                }
              ></div>
              <p>{number}</p>
            </div>
          );
        })}
        {/* <FileList className="file__dot" content="#1 101 - 200" />
        <FileList className="file__dot" content="#1 101 - 200" /> */}
      </div>
    </div>
  );
};

export default files;
