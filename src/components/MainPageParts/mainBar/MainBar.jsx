import { Link, NavLink } from 'react-router-dom';
import ucbpLogo from '../../../images/ucbp-logo.png'

import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './mainbar.css'


const NavList = () => (
    <>
        <div className='nav-right'>
            <ul className='nav-list scale-up-center'>
                <li className="list-margin">
                    <NavLink className='nav-link' to="/"
                        end
                        style={({ isActive, isPending }) => {
                            return {
                                borderTop: isActive ? "1px lightgray solid" : "none", color: isActive ? "red" : "white",
                                color: isActive ? "red" : "white",
                                borderBottom: isActive ? "1px lightgray solid" : "none",
                            };
                        }}><Link reloadDocument className='nav-link' to={"/"}>Home</Link>
                    </NavLink>
                </li>
                <li className="list-margin">
                    <NavLink className='nav-link' to="about"
                        end
                        style={({ isActive, isPending }) => {
                            return {
                                borderTop: isActive ? "1px lightgray solid" : "none", color: isActive ? "red" : "white",
                                color: isActive ? "red" : "white",
                                borderBottom: isActive ? "1px lightgray solid" : "none",
                            };
                        }}><Link reloadDocument to={"/about"} className='nav-link'>About</Link>
                    </NavLink>
                </li>
                <li className="list-margin">
                    <NavLink className='nav-link' to="/UCBP"
                        end
                        style={({ isActive, isPending }) => {
                            return {
                                borderTop: isActive ? "1px lightgray solid" : "none", color: isActive ? "red" : "white",
                                color: isActive ? "red" : "white",
                                borderBottom: isActive ? "1px lightgray solid" : "none",
                            };
                        }}><Link reloadDocument to={"/UCBP"} className='nav-link'>Episodes</Link>
                    </NavLink>
                </li>
                <li className="list-margin">
                    <NavLink className='nav-link' to="/news"
                        end
                        style={({ isActive, isPending }) => {
                            return {
                                borderTop: isActive ? "1px lightgray solid" : "none",
                                color: isActive ? "red" : "white",
                                borderBottom: isActive ? "1px lightgray solid" : "none",
                            };
                        }}>
                        <Link reloadDocument to={"/news"} className='nav-link'>C-B News</Link>
                    </NavLink>
                </li>
                <button className='btn btn-outline-danger'>
                    <li className="">
                        <Link reloadDocument to={"/connect"} className='nav-link'>Connect</Link>
                    </li>
                </button>
            </ul>
        </div>
    </>
)

const MainBar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)




    return (
        <div className='nav-bar-main'>
            <div className='nav-bar-links'>
                <div className='nav-bar-logo-links'>
                    <Link reloadDocument to='/'>
                        <img id='ucbp-logo' src={ucbpLogo} alt="UCBP Icon" />
                    </Link>
                    <h2 id='nav-title'>Under the Cardboardbox Podcast</h2>
                </div>
                <div className='nav-right'>
                    <NavList />
                </div>
            </div>
            <div className='nav-bar-list'>
                {toggleMenu
                    ? <RiCloseLine color="white" size={22} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="white" size={22} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='nav-bar-mobile-menu '>
                        <NavList />
                    </div>
                )}
            </div>
        </div>
    )
}

export default MainBar