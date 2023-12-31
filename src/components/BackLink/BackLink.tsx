import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { ThemeContext } from '../ThemeContext';
import './BackLink.scss';

export const BackLink = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTitle = searchParams.get('title') || '';
  const searchArtist = searchParams.get('artist') || '';

  const handleGoBack = () => {
    if (searchTitle.length !== 0 || searchArtist.length !== 0) {
      navigate(-1 - searchTitle.length - searchArtist.length);
    } else {
      navigate(-1);
    }
  };

  const isBeginningOfHistory = location.pathname === '/';

  return (
    <button
      className={classNames('button-back', { dark: isDarkTheme })}
      type="button"
      onClick={handleGoBack}
      disabled={isBeginningOfHistory}
    >
      <svg
        height="40px"
        width="40px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 219.151 219.151"
      >
        <g>
          <path
            d="M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008
            c4.142-0.001,7.499-3.358,7.499-7.502c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825
            c2.929-2.929,2.929-7.679,0-10.607c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628
            c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z"
          />
        </g>
      </svg>
    </button>
  );
};
