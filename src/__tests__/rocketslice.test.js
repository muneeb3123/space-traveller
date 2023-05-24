import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import rocketReducer, { fetchData, reservedRocket, cancelReserved } from '../Redux/Rockets/RocketSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('RocketSlice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      data: [],
      status: false,
    });
  });

  it('should fetch data and dispatch pending and fulfilled actions', async () => {
    await store.dispatch(fetchData());

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchData.pending.type);
    expect(actions[1].type).toEqual(fetchData.fulfilled.type);
  });

  it('should reserve a rocket and update its reserved flag', () => {
    const initialState = {
      data: [{ id: 1, rocket_name: 'Falcon 1', reserved: false }],
      status: false,
    };

    const action = reservedRocket(1);
    const newState = rocketReducer(initialState, action);

    const expectedState = {
      data: [{ id: 1, rocket_name: 'Falcon 1', reserved: true }],
      status: false,
    };

    expect(newState).toEqual(expectedState);
  });

  it('should cancel the reservation of a rocket and update its reserved flag', () => {
    const initialState = {
      data: [{ id: 1, rocket_name: 'Falcon 1', reserved: true }],
      status: false,
    };

    const action = cancelReserved(1);
    const newState = rocketReducer(initialState, action);

    const expectedState = {
      data: [{ id: 1, rocket_name: 'Falcon 1', reserved: false }],
      status: false,
    };

    expect(newState).toEqual(expectedState);
  });
});
