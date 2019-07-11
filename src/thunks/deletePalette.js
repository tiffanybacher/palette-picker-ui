import * as actions from '../actions';

export const deletePalette = (paletteId) => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/palettes/${paletteId}`;
    const init = {
        method: 'DELETE'
    };

    try {
      const response = await fetch(url, init);

      if (!response.ok) {
        throw new Error('Failed to delete palette');
      }

      dispatch(actions.deletePalette(paletteId));
    } catch (error) {
      console.log({ error });
    }
  }
}