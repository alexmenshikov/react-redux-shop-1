import React, {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./style.scss";
import {IoMdHeartEmpty, IoMdHeart, IoIosClose} from "react-icons/io";
import MyButton from "./UI/MyButton";
import {likeProducts, removeProducts} from "../redux/actions/productActions";

export const ProductComponent = ({filter}) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.allProducts.products);

    const like = (product) => {
        dispatch(likeProducts(product.id));
    }

    const remove = (product) => {
        dispatch(removeProducts(product.id));
    };

    const sortedProducts = useMemo(() => {
        if(filter.status === false) {
            return products;
        } else {
            return products.filter(p => p.favorite === filter.status);
        }
    }, [filter.status, products]);

    const renderList = sortedProducts.map(product => {
        const {id, title, price, image, description, favorite} = product;
        return (
            <div className="card__item" key={id}>
                <MyButton className="card__like" onClick={() => like(product)}>
                    {favorite
                        ? <IoMdHeart/>
                        : <IoMdHeartEmpty/>
                    }
                </MyButton>

                <MyButton className="card__del" onClick={() => remove(product)}>
                    <IoIosClose/>
                </MyButton>

                <div className="card__item-image">
                    <img src={image} alt={title}/>
                </div>

                <div className="card__item-content">
                    <div className="card__item-title">{title}</div>
                    <div className="card__item-description">{description}</div>
                    <div className="card__item-price"><span className="bold">{price}</span> $</div>
                </div>
            </div>
        );
    });

    return (
        <>
            {renderList.length === 0 ?
                <h1>No products!</h1>
                :
                <>{renderList}</>
            }
        </>
    )
};
