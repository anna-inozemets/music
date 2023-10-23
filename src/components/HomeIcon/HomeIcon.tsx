import React, { useContext } from 'react';
import classnames from 'classnames';
import './HomeIcon.scss';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

export const HomeIcon = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <NavLink to="/home" className="home-link">
      <svg className={classnames('home-svg-icon', { dark: isDarkTheme })} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="guitar" width="40" height="40">
        <path d="M60.481 14.475a2.373 2.373 0 0 0-.663-1.911L57.7 10.445l-4.971-4.971a2.49 2.49 0 0 0-3.517 0l-1.07 1.07-.707-.708a1 1 0 0 0-1.414 1.414l.707.708-1.414 1.415-.708-.707a1 1 0 0 0-1.414 1.414l.707.707-.707.707a2.962 2.962 0 0 0-.578 3.407L31.4 26.12a10.017 10.017 0 0 0-11.537 1.637 9.148 9.148 0 0 0-1.894 2.755 12.3 12.3 0 0 0-9.833 4.9l1.6 1.2a10.2 10.2 0 0 1 .936-1.078A10.529 10.529 0 0 1 18.6 32.52a.983.983 0 0 0 .981-.663 7.172 7.172 0 0 1 1.693-2.686 7.934 7.934 0 0 1 8.6-1.53l-6.86 6.86c-.109-.006-.217-.016-.327-.016a6 6 0 1 0 6 6c0-.11-.011-.218-.016-.327l6.743-6.744.232.232A7.873 7.873 0 0 1 34 41.9a7.171 7.171 0 0 1-2.686 1.694 1 1 0 0 0-.663.981A10.356 10.356 0 0 1 19.69 55.521a12.483 12.483 0 0 1-8.317-3.721 11.945 11.945 0 0 1-2.737-13.365l-1.813-.845a13.839 13.839 0 0 0 2.252 14.652.99.99 0 0 0 .176.264l.706.706 2.828 2.828a14.476 14.476 0 0 0 9.652 4.306c.185.008.37.011.553.011a12.326 12.326 0 0 0 12.5-12.323 9.13 9.13 0 0 0 2.754-1.894c3.23-3.23 3.558-8.352 1.14-12.454l6.96-6.959-1.414-1.414-6.72 6.72c-.214-.253-.436-.5-.675-.74l9.736-9.737.871-.87.707.708-2.549 2.548 1.414 1.414 2.679-2.679A2.962 2.962 0 0 0 53.8 22.1l5.809-5.81a2.968 2.968 0 0 0 .872-1.815Zm-9.855-7.586a.488.488 0 0 1 .689 0l4.772 4.772.2.2a.485.485 0 0 1 0 .687l-1.776 1.776-4.241 4.241a1 1 0 0 1-1.415 0l-.007-.006-4.236-4.237a1 1 0 0 1 0-1.414Zm5.294 10.262-1.414 1.414-.707-.707 1.414-1.414Zm-30.4 26.163a4.1 4.1 0 0 1-5.658 0 4 4 0 1 1 5.658 0Zm1.414-7.071a5.994 5.994 0 0 0-1.66-1.169L43.9 16.443l1.414 1.415 1.415 1.414L28.1 37.9a6.011 6.011 0 0 0-1.171-1.657Zm9.9 8.485a7.192 7.192 0 0 1-2.685 1.694 1 1 0 0 0-.663.98A10.358 10.358 0 0 1 22.52 58.35a12.1 12.1 0 0 1-4.18-.942 14.157 14.157 0 0 0 1.824.123 12.327 12.327 0 0 0 12.495-12.323 9.144 9.144 0 0 0 2.755-1.895 9.575 9.575 0 0 0 2.686-7.775 8.073 8.073 0 0 1-1.272 9.19Zm14.137-24.041-.131-.131a2.962 2.962 0 0 0 .838-.577l.707-.707.707.707-.707.707a1 1 0 0 1-1.414.001Zm7.223-5.81-.86.86-.707-.707 1.07-1.07a2.529 2.529 0 0 0 .311-.378l.4.4a.4.4 0 0 1 .085.314.98.98 0 0 1-.299.581Z"></path>
        <path d="m48.85 10.08 1.415-1.415 1.414 1.415-1.414 1.414zM46.02 12.908l1.415-1.414 1.414 1.414-1.414 1.414zM51.678 12.908l1.414-1.414 1.414 1.414-1.414 1.414zM48.85 15.737l1.414-1.414 1.414 1.414-1.414 1.414zM19.873 53.316a9.934 9.934 0 0 0 5.375-1.577 1 1 0 1 0-1.08-1.683 7.974 7.974 0 0 1-5.839 1.111 1 1 0 0 0-.381 1.964 10.138 10.138 0 0 0 1.925.185zM6 26c2.243 0 4-1.318 4-3v-9.18l8-1.6v6.185A5.075 5.075 0 0 0 16 18c-2.243 0-4 1.318-4 3s1.757 3 4 3 4-1.318 4-3V11a1 1 0 0 0-1.2-.98l-10 2A1 1 0 0 0 8 13v7.405A5.075 5.075 0 0 0 6 20c-2.243 0-4 1.318-4 3s1.757 3 4 3zm10-4c-1.221 0-2-.592-2-1s.779-1 2-1 2 .592 2 1-.779 1-2 1zM6 22c1.221 0 2 .592 2 1s-.779 1-2 1-2-.592-2-1 .779-1 2-1zm50 33V45a1 1 0 0 0-1.2-.98l-10 2a1 1 0 0 0-.8.98v7.405A5.075 5.075 0 0 0 42 54c-2.243 0-4 1.318-4 3s1.757 3 4 3 4-1.318 4-3v-9.18l8-1.6v6.185A5.075 5.075 0 0 0 52 52c-2.243 0-4 1.318-4 3s1.757 3 4 3 4-1.318 4-3zm-14 3c-1.221 0-2-.592-2-1s.779-1 2-1 2 .592 2 1-.779 1-2 1zm10-2c-1.221 0-2-.592-2-1s.779-1 2-1 2 .592 2 1-.779 1-2 1zM33 3a1 1 0 0 0-1 1v7.4a5.075 5.075 0 0 0-2-.4c-2.243 0-4 1.318-4 3s1.757 3 4 3 4-1.318 4-3V4a1 1 0 0 0-1-1zm-3 12c-1.221 0-2-.592-2-1s.779-1 2-1 2 .592 2 1-.779 1-2 1zm31 8a1 1 0 0 0-1 1v7.405A5.075 5.075 0 0 0 58 31c-2.243 0-4 1.318-4 3s1.757 3 4 3 4-1.318 4-3V24a1 1 0 0 0-1-1zm-3 12c-1.221 0-2-.592-2-1s.779-1 2-1 2 .592 2 1-.779 1-2 1z"></path>
      </svg>
    </NavLink>
  );
};