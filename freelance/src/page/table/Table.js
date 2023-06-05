import React from 'react';
import { Home } from './Home';
import './table.css';

export const Table = () => {

    return (
        <>
            <Home />
            <h4>Job Details</h4>
            <div className="table-container">
                <table>
                    <thead>
                    <tr className="table-row">
                        <th className="table-cell">Shift</th>
                        <th className="table-cell">Date</th>
                        <th className="table-cell">Summary of Works</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="table-row">
                        <td className="table-cell">1</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                    </tr>
                    <tr className="table-row">
                        <td className="table-cell">2</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                    </tr>
                    <tr className="table-row">
                        <td className="table-cell">3</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                    </tr>
                    <tr className="table-row">
                        <td className="table-cell">4</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <h4>Resource(s) Required</h4>
            <div className="table-container">
                <table>
                    <thead>
                    <tr className="table-row">
                        <th className="table-cell">Type</th>
                        <th className="table-cell">Shift 1</th>
                        <th className="table-cell">Shift 2</th>
                        <th className="table-cell">Shift 3</th>
                        <th className="table-cell">Shift 4</th>
                        <th className="table-cell">Shift 5</th>
                        <th className="table-cell">Shift 6</th>
                        <th className="table-cell">Shift 7</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="table-row">
                        <td className="table-cell">Supervisor</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                    </tr>
                    <tr className="table-row">
                        <td className="table-cell">Operative</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                    </tr>
                    <tr className="table-row">
                        <td className="table-cell">HGV + Crane</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                    </tr>
                    <tr className="table-row">
                        <td className="table-cell">HGV</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                    </tr>
                    <tr className="table-row">
                        <td className="table-cell">Flat Trailer</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                    </tr>
                    <tr className="table-row">
                        <td className="table-cell">Low Loader</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                    </tr>
                    <tr className="table-row">
                        <td className="table-cell">Works Van</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                    </tr>
                    <tr className="table-row">
                        <td className="table-cell">Welfare Van</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                    </tr>
                    <tr className="table-row">
                        <td className="table-cell">Compressor</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>    
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
