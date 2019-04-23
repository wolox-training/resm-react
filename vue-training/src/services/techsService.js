/* eslint-disable semi */
import api from './api';

const TechService = {
  getTechs: () => api.get('techs')
  // getStoreDelivery: data => api.get('v1/stores/delivery', data),
  // getStores: data => api.get('v1/stores', data),
  // getStore: id => api.get(`v1/stores/${id}`),
  // getUserAddress: () => api.get('/v1/addresses'),
  // getUsedCoupons: () => api.get('/v1/users/used_coupons')
};

export default TechService;
