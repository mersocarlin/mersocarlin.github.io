import * as api from '../api/contact';


export const SEND_CONTACT_REQUEST = 'SEND_CONTACT_REQUEST';
export const SEND_CONTACT_SUCCESS = 'SEND_CONTACT_SUCCESS';
export const SEND_CONTACT_FAILURE = 'SEND_CONTACT_FAILURE';


export function sendContactForm (payload) {
  return (dispatch) => {
    return dispatch(_sendContact(payload));
  };
}


function _sendContact (payload) {
  return async dispatch => {
    dispatch({ type: SEND_CONTACT_REQUEST });
    try {
      await api.sendContact(payload);
      dispatch({ type: SEND_CONTACT_SUCCESS, data: true });
    } catch (error) {
      dispatch({ type: SEND_CONTACT_FAILURE, error });
    }
  };
}
