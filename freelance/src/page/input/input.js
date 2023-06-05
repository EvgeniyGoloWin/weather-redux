import React from 'react';
import './input.css';
import {Home} from "./Home";
import {useNavigate} from "react-router-dom";

export const Input = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };
    return (
        <>
        <Home/>
        <div className='wrapper_input'>
        <div className='input'>
            <input type="text" className="form-control input-default " placeholder="Input Default"/>
            <input type="text" className="form-control input-default " placeholder="Input Default"/>
            <input type="text" className="form-control input-default " placeholder="Input Default"/>
            <input type="text" className="form-control input-default " placeholder="Input Default"/>
        </div>
            <button onClick={handleGoBack}>Go Home</button>
        </div>
        </>
    );
};
