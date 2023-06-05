import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

export const Home = () => {
    return (
        <div>
            <h2>Highway Care Limited - Job Card</h2>
            <div className='nav'>
                <nav>
                    <ul>
                        <li><Link to="/input">Input</Link></li>
                        <li><Link to="/table">Table</Link></li>
                        <li><Link to="/section">Section</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

