import axios from 'axios';

export const actionTypes = {
  SET_DATA: 'SET_DATA'
}

export const getServices = () => {
  return (dispatch) => {
    return axios
      .get('http://localhost:49567/api/service-types')
      .then(response => {
        dispatch({type: actionTypes.SET_DATA, payload: response.data.data});
      });
  }
}