import React from 'react';
import Typography from './Typography';

export default {
  title: 'Component/Heading',
  component: Typography,
};

export const H1 = (): JSX.Element => (
  <Typography type="h1">Big Heading</Typography>
);
export const H2 = (): JSX.Element => (
  <Typography type="h2">Small Heading</Typography>
);
export const H3 = (): JSX.Element => (
  <Typography type="h3">Small Heading</Typography>
);
export const H4 = (): JSX.Element => (
  <Typography type="h4">Small Heading</Typography>
);
