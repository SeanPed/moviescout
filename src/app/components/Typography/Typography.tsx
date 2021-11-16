import React from 'react';
import styled from 'styled-components';

type TypographyProps = {
  type: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
};

export default function Typography({
  type,
  children,
}: TypographyProps): JSX.Element {
  const Heading = ELEMENTMAP[type];

  return <Heading>{children}</Heading>;
}

const H1 = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
`;

const H2 = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
`;

const H3 = styled.h3`
  font-size: 1.125rem;
  line-height: 27px;
  font-weight: 700;
`;

const H4 = styled.h3`
  font-size: 1.125rem;
  font-weight: 400;
`;

const ELEMENTMAP = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
};
