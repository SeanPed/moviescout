import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';
import BackIcon from '../Icons/BackIcon';

type HeaderProps = {
  children: ReactNode;
  style: 'regular' | 'withBackButton' | 'actionOnly';
};

export default function Header({ children, style }: HeaderProps): JSX.Element {
  return (
    <Container>
      {style === 'regular' && (
        <H1>
          {children}
          <Span>.</Span>
        </H1>
      )}
      {style === 'withBackButton' && (
        <H1>
          <BackButton color="yellow">
            <BackIcon />
          </BackButton>
          {children}
          <Span>.</Span>
        </H1>
      )}
      {style === 'actionOnly' && (
        <>
          <BackButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </BackButton>
          <Bookmark>
            <svg
              width="17"
              height="24"
              viewBox="0 0 17 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6995 22.9732L15.6997 22.9733C15.73 22.9907 15.7643 23 15.7992 23C15.8525 23 15.9035 22.9788 15.9411 22.9412C15.9788 22.9035 15.9999 22.8525 16 22.7993L16 3.60109C16 3.60083 16 3.60058 16 3.60032C15.999 2.91098 15.7247 2.25013 15.2373 1.76267C14.7498 1.27516 14.0888 1.00089 13.3994 1H3.80054C3.1111 1.00089 2.45014 1.27516 1.96262 1.76267C1.47511 2.25019 1.20084 2.91115 1.19995 3.60059V22.7996C1.19999 22.8347 1.20926 22.8692 1.22684 22.8996L0.363823 23.3982L1.22684 22.8996C1.24443 22.9301 1.26973 22.9554 1.30019 22.973C1.33064 22.9906 1.3652 22.9998 1.40037 22.9999C1.43547 22.9999 1.46995 22.9907 1.50037 22.9732H15.6995ZM15.6995 22.9732L9.09953 19.1669L8.59995 18.8788L8.10037 19.1669L1.50058 22.9731L15.6995 22.9732Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </Bookmark>
        </>
      )}
    </Container>
  );
}

const BackButton = styled.button`
  background-color: #111;
  color: ${(props) => (props.color === 'yellow' ? '#ffc700' : '#fff')};
  padding-right: 25px;
  border: none;
`;

const Bookmark = styled.button`
  background-color: #111;
  border: none;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #111;
  padding-left: 15px;
  padding-right: 30px;
`;

const H1 = styled.h1`
  color: #fff;
  font-family: Poppins;
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
`;

const Span = styled.span`
  color: #ffc700;
`;
