import React from 'react';
import Navigation from './Navigation';

export default {
  title: 'Component/Navigation',
  component: Navigation,
};

export const NavigationHome = (): JSX.Element => (
  <Navigation activeLink="home" />
);
export const NavigationSearch = (): JSX.Element => (
  <Navigation activeLink="search" />
);
export const NavigationBookmark = (): JSX.Element => (
  <Navigation activeLink="bookmark" />
);
