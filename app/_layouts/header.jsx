import React from 'react';

const Header = () => {
  return (
    <nav className="header">
      <div className="header__logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect x="7.1156" width="9.76884" height="24" fill="#353232" />
          <rect
            x="24"
            y="7.11557"
            width="9.76884"
            height="24"
            transform="rotate(90 24 7.11557)"
            fill="#353232"
          />
          <rect
            x="9.40704"
            y="8.68338"
            width="1.80905"
            height="3.25628"
            fill="#C5C3C3"
          />
          <rect
            x="12.9045"
            y="8.68338"
            width="1.80905"
            height="3.25628"
            fill="#C5C3C3"
          />
          <rect
            x="7.59796"
            y="13.3869"
            width="8.68342"
            height="1.80905"
            fill="#C5C3C3"
          />
          <rect
            x="16.2814"
            y="11.5779"
            width="1.80905"
            height="1.80905"
            fill="#C5C3C3"
          />
          <rect
            x="5.78888"
            y="11.5779"
            width="1.80905"
            height="1.80905"
            fill="#C5C3C3"
          />
        </svg>
      </div>
      <div className="header__container">
        <div className="header__wrapper">
          <div className="header__link">
            <a href="https://github.com/adnanmugu">
              <div className="header__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </div>
              <span>github</span>
            </a>
          </div>

          <div className="header__link">
            <a href="https://github.com/adnanmugu">
              <div className="header__link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
              </div>
              <span>twitter</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
