import apiClient from '../apiClient';
import { GET_SPECIAL_REPORT_URL } from './homeUrl';

const getSpecialReportApi = () => {
  return apiClient.get(GET_SPECIAL_REPORT_URL);
};

export default getSpecialReportApi;
