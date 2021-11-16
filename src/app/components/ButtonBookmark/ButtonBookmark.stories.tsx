import React from 'react';
import ButtonBookmark from './ButtonBookmark';

export default {
  title: 'Component/ButtonBookmark',
  component: ButtonBookmark,
};

export const notFilled = (): JSX.Element => <ButtonBookmark fill="none" />;
export const Filled = (): JSX.Element => (
  <ButtonBookmark fill="#FFC700" stroke="#FFC700" />
);
