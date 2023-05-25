import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from '../components/profile/Profile';

jest.mock('react-redux', () => ({
  useSelector: (selector) => selector({
    rockets: {
      data: [
        { id: 1, rocket_name: 'Falcon 9', reserved: true },
        { id: 2, rocket_name: 'Atlas V', reserved: false },
      ],
    },
    missions: {
      missions: [
        { mission_id: 1, mission_name: 'Mission 1', reserved: true },
        { mission_id: 2, mission_name: 'Mission 2', reserved: false },
      ],
    },
  }),
}));

describe('Profile', () => {
  it('renders reserved rockets and missions correctly', () => {
    render(<Profile />);

    expect(screen.getByText('My Rockets')).toBeInTheDocument();
    expect(screen.getByText('Falcon 9')).toBeInTheDocument();
    expect(screen.queryByText('Atlas V')).not.toBeInTheDocument();

    expect(screen.getByText('My Missions')).toBeInTheDocument();
    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.queryByText('Mission 2')).not.toBeInTheDocument();
  });
});
