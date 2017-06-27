import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGithub from 'react-icons/lib/fa/github';
import { h } from 'preact';

const imageProps = {
  fill: '#444',
  width: 24,
  height: 24,
};

const config = {
  meetupApi:
    'https://api.meetup.com/require-lx/events?key=6161504e80005a355e671d2fb5d2e&page=20&sign=true',

  footerLinks: [
    {
      name: 'github',
      href: 'https://github.com/require-lx/community',
      target: '_blank',
      rel: 'noopener noreferrer',
      children: <FaGithub {...imageProps} />,
    },
    {
      name: 'twitter',
      href: 'https://twitter.com/requirelx/',
      target: '_blank',
      rel: 'noopener noreferrer',
      children: <FaTwitter {...imageProps} />,
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
          width={imageProps.width}
        />
      ),
    },
  ],
};

export default config;
