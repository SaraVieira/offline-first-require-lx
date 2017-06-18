import { h } from 'preact';
import style from './style.css';
import { FaGithub, FaTwitter } from 'react-icons/lib/fa/';
const footer = () =>
  <footer className={style.footer}>
    <nav>
      <ul>
        <li>
          <a
            href="https://github.com/require-lx/community"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub fill="#444" width={24} height={24} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/requirelx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter fill="#444" width={24} height={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.meetup.com/require-lx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://secure.meetupstatic.com/s/img/75054152263833930207/app_download/demo/m_swarm_logo.svg"
              alt="meetup logo"
              width={24}
            />
          </a>
        </li>
      </ul>

    </nav>

  </footer>;

export default footer;
