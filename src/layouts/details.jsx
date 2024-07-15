import React from 'react';
import Folder from 'src/assets/icons/folder';

export const Details = () => {
  return (
    <div className="wrapper">
      <h1 className="wrapper__title">Untitled.</h1>
      <div className="wrapper__main">
        <div className="wrapper__icons">
          <div className="wrapper__icon">
            <Folder />
            <span class="icon__desc">untitled.zip</span>
          </div>

          <div className="wrapper__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-file-type-csv"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
              <path d="M7 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
              <path d="M10 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" />
              <path d="M16 15l2 6l2 -6" />
            </svg>
            <span>8</span>
          </div>

          <div className="wrapper__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-row-insert-bottom"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1z" />
              <path d="M12 15l0 4" />
              <path d="M14 17l-4 0" />
            </svg>
            <span>10</span>
          </div>

          <div className="wrapper__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-column-insert-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1z" />
              <path d="M15 12l4 0" />
              <path d="M17 10l0 4" />
            </svg>
            <span>1000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
