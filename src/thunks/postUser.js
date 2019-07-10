import { setUser } from '../actions';

export const postUser = (user) => {
  return async () => {
    const url = process.env.REACT_APP_BACKEND_URL + '/api/v1/users';
    const init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      };

    try {
      const response = await fetch(url, init);

      if (!response.ok) {
        throw new Error('Failed to post new user.')
      }

      const userInfo = await response.json();
      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  }
}