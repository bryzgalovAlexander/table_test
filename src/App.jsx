import React from 'react';
import {Pagination} from "./components/pagination";
import {Posts} from "./components/posts";
import Modal from "./components/modal";
import './index.css'
import SvgSelector from "./components/svgSelector";

const App = () => {
    return (
        <div>
            <Modal/>
            <Posts/>
            <Pagination/>
        </div>
    );
};

export default App;