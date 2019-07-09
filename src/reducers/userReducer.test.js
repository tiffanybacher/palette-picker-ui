import userReducer from './userReducer';
import * as actions from '../actions';

describe('userReducer', () => {
  it('should return the default state', () => {
    const expected = {};
    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should be able to set user', () => {
    const mockUser = { username: 'Ryan', id: 5 };
    const result = userReducer({}, actions.setUser(mockUser));
    expect(result).toEqual(mockUser);
  });
});