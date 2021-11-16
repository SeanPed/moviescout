import React from 'react';
import ButtonSearch from './ButtonSearch';

export default {
  title: 'Component/ButtonSearch',
  component: ButtonSearch,
};

export const notFilled = (): JSX.Element => <ButtonSearch fill="none" />;
export const Filled = (): JSX.Element => (
  <ButtonSearch fill="#FFC700" stroke="#FFC700" />
);
