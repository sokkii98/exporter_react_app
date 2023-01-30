import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../FUllCSS/full.css'


export default class Footer extends Component {
  render() {
    return (
        <footer className="Footer">
        <div className="Auto_container">
            <div className="Footer_wrap">
                <div className="Footer_box">
                    <div className="Footer_group">
                        <h2 className="Footer_box-title">
                            <span>
                                Tm Trade
                            </span>

                            Türkmenistanyň Söwda Platformasy
                        </h2>

                        <div className="Footer_market">
                            <Link to="/" className="Footer_market-item">
                                <img src="assets/images/app-store.png" alt="app-store" />
                            </Link>
                            <Link to="/" className="Footer_market-item">
                                <img src="assets/images/play-store.png" alt="play-store" />
                            </Link>
                        </div>
                    </div>

                    <div className="Footer_info">
                        <h6 className="Footer_info-subtitle">
                            Contact us
                        </h6>

                        <p className="Footer_info-link w-100">
                            <span>
                                <img src="assets/images/svg/gps.svg" alt="icon" />
                            </span>

                            745000, A.Nyýazow köç. №27, Türkmenbaşy/Balkan/Türkmenistan
                        </p>
                        <Link to="/" className="Footer_info-link">
                            <span>
                                <img src="assets/images/svg/phone.svg" alt="icon" />
                            </span>

                            Tel/Fax: +99324322050
                        </Link>

                        <Link to="/" className="Footer_info-link">
                            <span>
                                <img src="assets/images/svg/ins.svg" alt="icon" />
                            </span>

                            @tmtrade_official
                        </Link>

                        <Link to="/" className="Footer_info-link">
                            <span>
                                <img src="assets/images/svg/mobile.svg" alt="icon" />
                            </span>

                            Mob: +99362068181
                        </Link>

                        <Link to="/" className="Footer_info-link">
                            <span>
                                <img src="assets/images/svg/mail.svg" alt="icon" />
                            </span>

                            info@trade.com.tm
                        </Link>

                        <Link to="/" className="Footer_info-link">
                            <span>
                                <img src="assets/images/svg/mobile.svg" alt="icon" />
                            </span>

                            Mob: +99363738746
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
  }
}
