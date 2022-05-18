import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function FecthData() {
      const response = await axios(API);
      setProducts(response.data);
    }
    FecthData();
  }, [API]);

  return products;
};

export default useGetProducts;
