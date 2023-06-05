import React from 'react';
import { useNavigate } from 'react-router-dom';
import './section.css';
import {Home} from "./Home";

export const Section = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <>
            <Home/>
        <div className="form-group">
            <div className="sec">
                <label className="col-sm-2 control-label">HIRE SHEET COMPLETED</label>
                <select className="form-control">
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="sec">
                <label className="col-sm-2 control-label">SAFETY BRIEFING COMPLETED</label>
                <select className="form-control">
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="sec">
                <label className="col-sm-2 control-label">PERMIT TO LIFT ISSUED</label>
                <select className="form-control">
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="sec">
                <label className="col-sm-2 control-label">CAT SCAN COMPLETED</label>
                <select className="form-control">
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <div className="sec">
                <label className="col-sm-2 control-label">PERMIT TO BREAK GROUND ISSUED</label>
                <select className="form-control">
                    <option>yes</option>
                    <option>no</option>
                </select>
            </div>
            <button onClick={handleGoBack}>Go Home</button>
        </div>
        </>
    );
};

