import { postUser } from './postUser';
import { setUser } from '../actions';

describe('postUser', () => {
  let mockUser;
  let mockResponse;
  let url;
  let init;
  let thunk;
  let mockDispatch;

  beforeEach(() => {
    mockUser = {
      username: 'chance',
      password: 'coloringbook'
    }
    mockResponse = {
      id: 3,
      username: 'chance'
    }
    url = process.env.REACT_APP_BACKEND_URL + '/api/v1/users';
    init = {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mockUser)
    }
    thunk = postUser(mockUser);
    mockDispatch = jest.fn();
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
  });

  it('should call fetch with the correct params', async () => {
    await thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(url, init);
  });

  it('should throw an error if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'Something went wrong'
      });
    });

    await thunk(mockDispatch);
  });

  it('should dispatch setUser with the correct params', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(setUser(mockResponse));
  });
});