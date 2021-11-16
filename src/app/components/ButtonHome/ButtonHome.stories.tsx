import React from 'react';
import ButtonHome from './ButtonHome';

export default {
  title: 'Component/ButtonHome',
  component: ButtonHome,
};

export const notFilled = (): JSX.Element => <ButtonHome />;
export const Filled = (): JSX.Element => (
  <ButtonHome fill="#FFC700" stroke="#FFC700" />
);
