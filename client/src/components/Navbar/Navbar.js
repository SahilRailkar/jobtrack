import React from 'react';
import arrow from './../../images/arrow.svg';
import search from './../../images/search.svg';
import briefcase from './../../images/briefcase.svg';
import profile from './../../images/profile.jpeg';
import settings from './../../images/settings.svg';

function Navbar() {
    return (
        <div>
            {/* <!-- Sector: Navigation Menu --> */}
            <nav className="navbar">
                <ul className="navbar__list">
        
                    {/* <!-- Board selection --> */}
                    <li className="navbar__item navbar__item--board">
                        <p className="faded-text">Board:</p>
                        <a href="#board" className="navbar__link dropdown">
                            {/* <!-- Use these for arrows ▾▴ -->
                            Software Engineering 2019 &nbsp;▾ */}
                        </a>
                    </li>
        
                    {/* <!-- Sort by field --> */}
                    <li className="navbar__item navbar__item--sort"> 
                        <a href="#sort" className="navbar__link">
                            <img src={arrow} alt="Arrow Icon"/>
                            <p className="faded-text">Sort by</p>
                            <a href="#board" className="navbar__link dropdown">
                                Location &nbsp;▾
                            </a>
                        </a>
                    </li>
        
                    {/* <!-- Search Bar --> */}
                    <li className="navbar__item navbar__item--search float-right">
                        <img src={search} alt="Search Icon"/>
                        <input className="searchbar-input" placeholder="Search..."></input>
                    </li>
        
                    {/* <!-- Add Job Button --> */}
                    <li className="navbar__item navbar__item--add">
                        <a href="#addNew" className="navbar__link solid-btn">
                            + Add Job
                        </a> 
                    </li>
        
                    {/* <!-- Compare Button --> */}
                    <li className="navbar__item navbar__item--compare float-right">
                        <a href="#compare" className="navbar__link solid-btn">
                            <img src={briefcase} alt="Briefcase"/>
                            Compare Jobs
                        </a>
                    </li>
        
                    {/* <!-- Profile Button --> */}
                    <li className="navbar__item navbar__item--profile float-right">
                        {/* <!-- <a href="#profile" className="navbar__link"> --> */}
                        <img src={profile} alt="Profile"/>
                        <p>Kiran</p>
                        {/* <!-- </a>  --> */}
                    </li>
        
                    {/* <!-- Settings Button --> */}
                    <li className="navbar__item navbar__item--settings float-right"> 
                        <a href="#profile" className="navbar__link">
                            <img src={settings} alt="Settings"/>
                        </a> 
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;