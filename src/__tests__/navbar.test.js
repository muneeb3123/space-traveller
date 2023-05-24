import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';

describe('NavBar', () => {
  test('renders Navbar component correctly', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    expect(screen.getByAltText('planet')).toBeInTheDocument();
    expect(screen.getByText("Space Travelers' Hub")).toBeInTheDocument();
    expect(screen.getByText('Rockets').closest('a')).toHaveAttribute('href', '/rockets');
    expect(screen.getByText('Missions').closest('a')).toHaveAttribute('href', '/missions');
    expect(screen.getByText('My profile').closest('a')).toHaveAttribute('href', '/profile');
  });
});
