import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import '../FUllCSS/full.css'


export default class Header extends Component {
  render() {
    return (
        <header class="Header">
        <div class="Auto_container">
            <div class="Header_wrap">
                <Link to="/" class="Logo">
                    <img src="assets/images/logo.png" alt="logo" />
                </Link>

                <form action="#" class="Header_search">
                    <select>
                        <option value="01">Kompaniýa</option>
                        <option value="01">Önümler</option>
                        <option value="01">Talaplar</option>
                    </select>

                    <div class="Header_search-input">
                        <input type="text" placeholder="Kompaniyalary gozle..." />
                    </div>

                    <button type="submit">
                        Gozlemek
                    </button>
                </form>

                <nav class="Nav">
                    <ul>
                        <li>
                            <Link to="/">Kompaniýa</Link>
                        </li>
                        <li>
                            <Link to="/">Önümler</Link>
                        </li>
                        <li>
                            <Link to="/">Talaplar</Link>
                        </li>
                        <li class="Mobile_lang">
                            <div class="Lang">
                                <Link to="/" class="Lang_item">
                                    <span>
                                        <img src="assets/images/tm.png" alt="lang-flag" />
                                    </span>

                                    Turkmen
                                </Link>

                                <Link to="/" class="Lang_item">
                                    <span>
                                        <img src="assets/images/ru.png" alt="lang-flag" />
                                    </span>

                                    Russion
                                </Link>

                                <Link to="/" class="Lang_item">
                                    <span>
                                        <img src="assets/images/en.png" alt="lang-flag" />
                                    </span>

                                    English
                                </Link>
                            </div>
                        </li>
                    </ul>
                </nav>

                <div class="Lang">
                    <h6 class="Lang_current">
                        <span>
                            <img src="assets/images/tm.png" alt="lang-flag" />
                        </span>

                        Turkmen
                    </h6>

                    <div class="Lang_box">
                        <Link to="/" class="Lang_item">
                            <span>
                                <img src="assets/images/tm.png" alt="lang-flag" />
                            </span>

                            Turkmen
                        </Link>

                        <Link to="/" class="Lang_item">
                            <span>
                                <img src="assets/images/ru.png" alt="lang-flag" />
                            </span>

                            Russion
                        </Link>

                        <Link to="/" class="Lang_item">
                            <span>
                                <img src="assets/images/en.png" alt="lang-flag" />
                            </span>

                            English
                        </Link>
                    </div>
                </div>

                <div class="Mobile_menu">
                    <span>
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M27.1214 4.14751H2.07376C0.927593 4.14751 0 3.21987 0 2.07376C0 0.927641 0.927642 0 2.07376 0H27.1214C28.2676 0 29.1951 0.927641 29.1951 2.07376C29.1951 3.21953 28.2675 4.14751 27.1218 4.14751H27.1214Z"
                                fill="black" />
                            <path
                                d="M37.9262 22.1558H2.07376C0.927593 22.1558 0 21.2282 0 20.0821C0 18.9359 0.927642 18.0083 2.07376 18.0083L37.9262 18.0087C39.0724 18.0087 40 18.9363 40 20.0824C39.9996 21.2282 39.072 22.1558 37.9262 22.1558Z"
                                fill="black" />
                            <path
                                d="M27.1214 40.1636H2.07376C0.927593 40.1636 0 39.236 0 38.0899C0 36.9438 0.927642 36.0161 2.07376 36.0161H27.1214C28.2676 36.0161 29.1951 36.9438 29.1951 38.0899C29.1951 39.236 28.2675 40.1636 27.1218 40.1636H27.1214Z"
                                fill="black" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </header>
    )
  }
}
