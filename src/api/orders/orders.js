import axios from '../service';

const orders = {
  get: () => axios.get('/orders-list')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  post: (params) => axios.post('/orders-list', params)
  	.then(({ data }) => data)
  	.catch((err) => {
      throw new Error(err);
    }),
};

export { orders };