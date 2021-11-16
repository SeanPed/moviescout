import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BookmarkIcon from '../Icons/BookmarkIcon';
import SearchIcon from '../Icons/SearchIcon';
import HomeIcon from '../Icons/HomeIcon';

type NavigationProps = {
  activeLink: 'home' | 'search' | 'bookmark';
};

export default function Navigation({
  activeLink,
}: NavigationProps): JSX.Element {
  return (
    <List>
      <li>
        <Link to="/">
          <HomeIcon
            stroke={activeLink === 'home' ? 'yellow' : 'white'}
            fill={activeLink === 'home' ? 'yellow' : 'none'}
          />
        </Link>
      </li>
      <li>
        <Link to="/search">
          <SearchIcon
            stroke={activeLink === 'search' ? 'yellow' : 'white'}
            fill={activeLink === 'search' ? 'yellow' : 'none'}
          />
        </Link>
      </li>
      <li>
        <Link to="/bookmarks">
          <BookmarkIcon
            stroke={activeLink === 'bookmark' ? 'yellow' : 'white'}
            fill={activeLink === 'bookmark' ? 'yellow' : 'none'}
          />
        </Link>
      </li>
    </List>
  );
}

const List = styled.ul`
  background-color: #0b0b0b;
  color: white;
  display: flex;
  flex-direction: row;
  padding: 1rem 1.5rem;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;
