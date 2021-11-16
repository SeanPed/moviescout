import React, { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type HeaderProps = {
  children: ReactNode;
  style: string;
};

export default function Header({ children, style }: HeaderProps): JSX.Element {
  const [headerStyle, setHeaderStyle] = useState('');

  useEffect(() => setHeaderStyle(style));

  return (
    <div>
      {headerStyle === 'regular' && (
        <Container>
          <H1>
            {children}
            <Span>.</Span>
          </H1>
        </Container>
      )}
      {headerStyle === 'withBackButton' && (
        <Container>
          <H1>
            <BackButton>
              <svg
                width="15"
                height="24"
                viewBox="0 0 15 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.50305 11.9496L13.567 3.88571C13.9912 3.45891 14.2294 2.88156 14.2294 2.27976C14.2294 1.67796 13.9912 1.10061 13.567 0.673812C13.3552 0.460304 13.1033 0.290837 12.8257 0.175189C12.5481 0.0595409 12.2504 0 11.9496 0C11.6489 0 11.3512 0.0595409 11.0736 0.175189C10.796 0.290837 10.5441 0.460304 10.3323 0.673812L0.673812 10.3323C0.460304 10.5441 0.290838 10.796 0.17519 11.0736C0.059542 11.3512 0 11.6489 0 11.9496C0 12.2504 0.059542 12.5481 0.17519 12.8257C0.290838 13.1033 0.460304 13.3552 0.673812 13.567L10.3323 23.3394C10.5451 23.5505 10.7976 23.7175 11.0751 23.8309C11.3527 23.9442 11.6498 24.0017 11.9496 24C12.2494 24.0017 12.5466 23.9442 12.8242 23.8309C13.1017 23.7175 13.3541 23.5505 13.567 23.3394C13.9912 22.9126 14.2294 22.3352 14.2294 21.7334C14.2294 21.1316 13.9912 20.5543 13.567 20.1275L5.50305 11.9496Z"
                  fill="white"
                />
              </svg>
            </BackButton>
            {children}
            <Span>.</Span>
          </H1>
        </Container>
      )}
      {headerStyle === 'actionOnly' && (
        <Container>
          <BackButton>
            <Svg
              width="15"
              height="24"
              viewBox="0 0 15 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.50305 11.9496L13.567 3.88571C13.9912 3.45891 14.2294 2.88156 14.2294 2.27976C14.2294 1.67796 13.9912 1.10061 13.567 0.673812C13.3552 0.460304 13.1033 0.290837 12.8257 0.175189C12.5481 0.0595409 12.2504 0 11.9496 0C11.6489 0 11.3512 0.0595409 11.0736 0.175189C10.796 0.290837 10.5441 0.460304 10.3323 0.673812L0.673812 10.3323C0.460304 10.5441 0.290838 10.796 0.17519 11.0736C0.059542 11.3512 0 11.6489 0 11.9496C0 12.2504 0.059542 12.5481 0.17519 12.8257C0.290838 13.1033 0.460304 13.3552 0.673812 13.567L10.3323 23.3394C10.5451 23.5505 10.7976 23.7175 11.0751 23.8309C11.3527 23.9442 11.6498 24.0017 11.9496 24C12.2494 24.0017 12.5466 23.9442 12.8242 23.8309C13.1017 23.7175 13.3541 23.5505 13.567 23.3394C13.9912 22.9126 14.2294 22.3352 14.2294 21.7334C14.2294 21.1316 13.9912 20.5543 13.567 20.1275L5.50305 11.9496Z"
                fill="white"
              />
            </Svg>
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
        </Container>
      )}
    </div>
  );
}

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

const BackButton = styled.button`
  background-color: #111;
  padding-right: 25px;
`;

const Bookmark = styled.button`
  background-color: #111;
`;

const Svg = styled.svg`
  color: #ffc700;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #111;
  padding-left: 15px;
  padding-right: 30px;
`;
