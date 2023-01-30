import React, { useState } from 'react';    
import { Link } from 'react-router-dom'


export default function Header() {

    const [fix, setFix] = useState(false);

    function setFixed() {
        if (window.scrollY >= 292) {
            setFix(true);
        }
        else {
            setFix(false);
        }
    }
    window.addEventListener('scroll', setFixed);
    return (
        <header className={fix ? "headerFixed" : "header"} id="header">
            <div className="auto_container">
                <div className="header_wrap">

                    <div className="header_box">
                        <Link to="/" className="header_logo">
                            <img src="assets/images/logo-ny.png" alt="logo" />
                        </Link>

                        <form id="search-form" className="navbar-search__form" method="GET" action="/companies/">

                            <div className="select">
                                <div className="selectBtn" data-type="firstOption">

                                    <div className="form_input">
                                        <div className="custom-select">
                                            <select id="limit">
                                                <option value="Kategoriýa saýlaň">Kompaniýa</option>
                                                <option value="Kompaniýa">Kompaniýa</option>
                                                <option value="Önümler">Önümler</option>
                                                <option value="Talaplar">Talaplar</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <input name="search" value="" id="navbar-search-input" className="nsi-input" oninput="showIcon()"
                                type="text" placeholder="Kompaniýalary Gözle..." tp-type="username" />
                            <i className="fas fa-times nsi-remove"></i>
                            <button tp-type="button">Gözlemek</button>
                        </form>

                        <div className="navbar">
                            <Link className="nav" to="/">Kompaniýa</Link>
                            <Link className="nav" to="/">Önümler</Link>
                            <Link className="nav" to="/">Talaplar</Link>
                        </div>

                        <div className="language">
                            <div className="language-selected">
                                Türkmen
                            </div>
                            <ul>
                                <li>
                                    <Link to="/" className="turkmen">Türkmen</Link>
                                </li>
                                <li>
                                    <Link to="/" className="Russia">Россия</Link>
                                </li>
                                <li>
                                    <Link to="/" className="english">English</Link>
                                </li>
                            </ul>
                        </div>

                    </div>



                </div>
            </div>
        </header>
    )
}
