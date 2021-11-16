import React from 'react';
import Tag from './Tag';

export default {
  title: 'Component/Tag',
  component: Tag,
};

export const NotActive = (): JSX.Element => <Tag count="3">Action</Tag>;
export const Active = (): JSX.Element => (
  <Tag count="3" active>
    Action
  </Tag>
);
export const All = (): JSX.Element => <Tag active>Action</Tag>;
