import React from "react";
import MyButton from "./UI/MyButton";
import {IoMdRadioButtonOn, IoMdRadioButtonOff} from "react-icons/io";

export const Header = ({filter, setFilter}) => {
    const onClickFilter = () => {
        if(filter.status) {
            setFilter({...filter, status: false});
        } else {
            setFilter({...filter, status: true});
        }
    };

    return (
        <div className="menu">
            <h2>Shop</h2>
            <MyButton className="filter" onClick={onClickFilter}>
                Filter {filter.status
                ? <IoMdRadioButtonOn/>
                : <IoMdRadioButtonOff/>
            }
            </MyButton>
        </div>
    )
};
