import { request } from 'umi';

export async function queryData() {
  return request('/phm-console/consoleMdDevice/getConsoleDeviceTypeEnum');
}
