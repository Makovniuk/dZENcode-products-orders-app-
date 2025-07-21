import axios from '../service';

const products = {
  get: () => axios.get('/products')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  post: (params) => axios.post('/products', params)
  	.then(({ data }) => data)
  	.catch((err) => {
      throw new Error(err);
    }),
};

export { products };