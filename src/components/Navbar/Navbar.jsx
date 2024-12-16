import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <h1 className="logo">Gold Expert</h1>
                <ul className="nav-links">
                    <li><NavLink to="/" className="nav-link" activeClassName="active">Asosiy</NavLink></li>
                    <li className="dropdown">
                        <NavLink to="/kurslar" className="nav-link" activeClassName="active">Kurslar</NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/frontend" className="nav-link">Frontend</NavLink></li>
                            <li><NavLink to="/backend" className="nav-link">Backend</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/bilimlar" className="nav-link" activeClassName="active">Bilimlar xazinasi</NavLink></li>
                    <li><NavLink to="/bizhaqimizda" className="nav-link" activeClassName="active">Biz haqimizda</NavLink></li>
                    <li><NavLink to="/sertifikatlar" className="nav-link" activeClassName="active">Sertifikatlar</NavLink></li>
                    <li><NavLink to="/jamoa" className="nav-link" activeClassName="active">Jamoa</NavLink></li>
                    <li><NavLink to="/sharxlar" className="nav-link" activeClassName="active">Sharxlar</NavLink></li>
                    <li><NavLink to="/boglanish" className="nav-link" activeClassName="active">Bog'lanish</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
