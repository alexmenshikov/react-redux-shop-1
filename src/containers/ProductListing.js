import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {ProductComponent} from "./ProductComponent";
import axios from "axios";
import {setProducts} from "../redux/actions/productActions";

export const ProductListing = ({filter}) => {
    const dispatch = useDispatch();

    const arrayProducts = [];

    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products?limit=8")
            .catch((err) => {
                console.log("Err", err);
            });

        response.data.forEach((product) => {
            const {id, title, description, image, price} = product;
            arrayProducts.push({id, title, description, image, price, favorite: false});
        });

        dispatch(setProducts(arrayProducts));
        setLoading(true);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    if (!loading) {
        return (
            <div className="loader">
                <span></span>
            </div>
        )
    }

    return (
        <div>
            <div className="container">
                <ProductComponent filter={filter}/>
            </div>
        </div>
    )
};
