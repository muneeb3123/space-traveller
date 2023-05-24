import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../components/Rocket/Rockets';
import { cancelReserved } from '../Redux/Rockets/RocketSlice';

const mockStore = configureStore([]);
const initialState = {
  rockets: {
    data: [
      {
        id: 1,
        rocket_name: 'Falcon 9',
        flickr_images: 'image_url',
        description: 'Rocket description',
        reserved: true,
      },
    ],
    status: null,
  },
};
const store = mockStore(initialState);

describe('Rockets', () => {
  test('renders rockets with reserved status and cancel reservation button', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );

    expect(screen.getByText('Falcon 9')).toBeInTheDocument();
    expect(screen.getByText('Reserved')).toBeInTheDocument();
    expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Cancel Reservation'));

    expect(store.getActions()).toContainEqual(cancelReserved(1));
  });
});
