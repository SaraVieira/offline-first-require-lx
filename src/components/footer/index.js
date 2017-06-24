import { h } from 'preact';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGithub from 'react-icons/lib/fa/github';
import style from './style.css';

const footer = () => {
  const links = [
    {
      name: 'github',
      href: 'https://github.com/require-lx/community',
      target: '_blank',
      rel: 'noopener noreferrer',
      children: <FaGithub fill="#444" width={24} height={24} />,
    },
    {
      name: 'twitter',
      href: 'https://twitter.com/requirelx/',
      target: '_blank',
      rel: 'noopener noreferrer',
      children: <FaTwitter fill="#444" width={24} height={24} />,
    },
    {
      name: 'meetup',
      href: 'https://www.meetup.com/require-lx',
      target: '_blank',
      rel: 'noopener noreferrer',
      children: (
        <img
          src="https://secure.meetupstatic.com/s/img/75054152263833930207/app_download/demo/m_swarm_logo.svg"
          alt="meetup logo"
          width={24}
        />
      ),
    },
  ];

  return (
    <footer className={style.footer}>
      <nav>
        <ul>
          {links.map(link =>
            <li>
              <a href={link.href} target={link.target} rel={link.rel}>
                {link.children}
              </a>
            </li>
          )}
        </ul>
      </nav>
    </footer>
  );
};

export default footer;
