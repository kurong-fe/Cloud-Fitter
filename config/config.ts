import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  title: 'panpan',
  hash: true,
  targets: {
    ie: 11,
  },
  antd: {},
  dva: {
    hmr: true,
  },
  dynamicImport: {
    loading: '@/pages/pageLoading',
  },
  request: {
    dataField: 'resData',
  },
  routes,
  proxy: {
    '/auth': {
      target: 'http://192.168.16.37:8085',
    },
    '/phm-console': {
      target: 'http://192.168.16.37:8085',
    },
  },
  fastRefresh: {},
  baseNavigator: false,
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  locale: {
    default: 'zh-CN',
  },
  theme: {
    '@primary-color': '#3d63d8',
  },
});
