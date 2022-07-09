import React from 'react';
import classNames from 'classnames/bind';

import styles from './App.module.scss';

const cx = classNames.bind(styles);

const App = () => {
  return (
    <div className={cx('container')}>
      <nav className={cx('nav', 'app')}>NAVBAR</nav>
      <nav className={cx('nav', 'board')}>BOARD BAR</nav>
      <div className={cx('board-columns')}>
        <div className={cx('column')}>
          <header>Brainstorm</header>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
          <footer>Add another card</footer>
        </div>

        <div className={cx('column')}>
          <header>Brainstorm</header>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
          <footer>Add another card</footer>
        </div>
      </div>
    </div>
  );
};

export default App;
