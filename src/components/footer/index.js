import { h } from 'preact';
import style from './style.css';
import config from '../../lib/config';

const footer = () =>
  <footer className={style.footer}>
    <nav>
      <ul>
        {config.footerLinks.map(link =>
          <li>
            <a
              href={link.href}
              target={link.target}
              rel={link.rel}
              name={link.name}
            >
              {link.children}
            </a>
          </li>
        )}
      </ul>
    </nav>
  </footer>;

export default footer;
