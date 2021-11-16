import React from 'react';
import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
};

export const Regular = (): JSX.Element => (
  <Header style="regular">Top Five</Header>
);
export const withBackButton = (): JSX.Element => (
  <Header style="withBackButton">Top Five</Header>
);
export const actionOnly = (): JSX.Element => (
  <Header style="actionOnly">Top Five</Header>
);
