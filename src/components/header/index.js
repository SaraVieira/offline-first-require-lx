import { h } from 'preact';
import { Link } from 'preact-router';
import style from './style.css';

const Header = () =>
  <header className={style.header}>
    <img src="../../assets/icons/favicon-32x32.png" alt="logo" />
    <nav>
      <Link className={style.links} href="/">Home</Link>
      <Link className={style.links} href="/events">Events</Link>
    </nav>
  </header>;

export default Header;
