import { API_ROOT } from '../config/envUrl';

const baseUrl = url => `${API_ROOT}/${url}`;
const bodyRequest = (method, contentType, bodyReq) => {
  return {
    method: method,
    headers: {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(bodyReq),
  };
};

export { baseUrl, bodyRequest };
