import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);

	const FetchData = async () => {
		const response = await axios(API);
		setProducts(response.data);

	}

	useEffect(() => {
		FetchData();
		if(!products) return null;
	}, []);

	return products;
};

export default useGetProducts;
