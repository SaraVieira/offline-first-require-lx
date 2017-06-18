import { h } from 'preact';
import { expect } from 'chai';

import Home from '../../../src/components/home';

describe('components/home', () => {
  it('should show the home text', () => {
    const home = <Home />;
    expect(home).to.contain(<h1> Next Event: </h1>);
    expect(home).to.contain(<time>Invalid date</time>);
    expect(home).to.contain(
      <img alt="logo" className="logo" src="../../assets/logo.jpeg" />
    );
  });
});
