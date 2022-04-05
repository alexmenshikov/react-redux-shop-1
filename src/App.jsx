import React, {useState} from "react";
import './App.css';
import {Header} from "./containers/Header";
import {ProductListing} from "./containers/ProductListing";

function App() {
    const [filter, setFilter] = useState({status: false});

    return (
        <div className="App">
            <Header filter={filter} setFilter={setFilter}/>
            <ProductListing filter={filter}/>
        </div>
    );
}

export default App;
