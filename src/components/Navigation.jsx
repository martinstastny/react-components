import React from 'react';
import NavigationLink from './NavigationLink';

const Navigation = () => (
  <ul className="nav navbar-nav">
    <NavigationLink activeWhenExact to="/" title="Home" />
    <NavigationLink to="/book" title="Book" />
    <NavigationLink to="/embeds" title="Embeds" />
    <NavigationLink to="/demos" title="Demos" />
    <NavigationLink to="/website" title="Website" />
  </ul>
);

export default Navigation;
