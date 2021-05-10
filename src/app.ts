import { RequestConfig } from 'umi';
import { errorHandler } from '@/utils/errorHandle';

export const request: RequestConfig = {
  timeout: 5000,
  errorConfig: {
    adaptor: (res) => {
      return {
        success: res.resCode,
        data: res.resData,
        errorCode: res.resCode,
        errorMessage: res.resMsg,
      };
    },
  },
  errorHandler,
  middlewares: [],
  requestInterceptors: [],
  responseInterceptors: [
    (response) => {
      return response;
    },
  ],
};
