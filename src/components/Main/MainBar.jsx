import { Link, NavLink } from 'react-router-dom';
import ucbpLogo from './images/ucbp-logo.png'
import React from 'react';


const MainBar = () => {





    return (
        <div>
            <div className='nav-bar-main'>
                <Link reloadDocument to='/'><img id='ucbp-logo' src={ucbpLogo} alt="UCBP Icon" /></Link>
                <h2 id='nav-title'>Under the Cardboardbox Podcast</h2>
                <div className='nav-right'>
                    <ul className='nav-list'>
                        <li>
                            <NavLink  className='nav-link' to="/"
                                end
                                style={({ isActive, isPending }) => {
                                    return {
                                        borderTop: isActive ? "lightgray solid" : "none",                                        color: isActive ? "red" : "white",
                                        color: isActive ? "red" : "white",
                                        borderBottom: isActive ? "lightgray solid" : "none",
                                    };
                                }}><Link reloadDocument className='nav-link' to={"/"}>Home</ Link>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to="about"
                                end
                                style={({ isActive, isPending }) => {
                                    return {
                                        borderTop: isActive ? "lightgray solid" : "none",                                        color: isActive ? "red" : "white",
                                        color: isActive ? "red" : "white",
                                        borderBottom: isActive ? "lightgray solid" : "none",
                                    };
                                }}><Link reloadDocument to={"/about"} className='nav-link'>About</ Link>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to="/UCBP"
                                end
                                style={({ isActive, isPending }) => {
                                    return {
                                        borderTop: isActive ? "lightgray solid" : "none",                                        color: isActive ? "red" : "white",
                                        color: isActive ? "red" : "white",
                                        borderBottom: isActive ? "lightgray solid" : "none",
                                    };
                                }}><Link reloadDocument to={"/UCBP"} className='nav-link'>Episodes</Link>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' to="/news"
                                end
                                style={({ isActive, isPending }) => {
                                    return {
                                        borderTop: isActive ? "lightgray solid" : "none",
                                        color: isActive ? "red" : "white",
                                        borderBottom: isActive ? "lightgray solid" : "none",
                                    };
                                }}>
                                <Link reloadDocument to={"/news"} className='nav-link'>C-B News</Link>
                                </NavLink></li>
                        <button className='btn btn-outline-danger'>
                            <li><Link reloadDocument to={"/connect"} className='nav-link'>Connect</Link></li>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainBar