import React from 'react'
import { Link } from 'react-router-dom'


function footer() {
  return (
    <footer className="footer">
        <div className="footer_box">

            <div className="footer_item">
                <div className="footer_images">
                    <img src="assets/images/footer/karta-tm.png" alt="" />
                </div>
            </div>

            <div className="footer_item">
                <h5 className="footer_suptitle">
                    TM TRADE
                </h5>

                <h5 className="footer_title">
                    Türkmenistanyň Söwda Platformasy
                </h5>

                <div className="footer_app">
                    <div className="footer_app-images">
                        <Link to="/">
                            <img src="assets/images/footer/appstore.png" alt="" />
                        </Link>
                    </div>
                    <div className="footer_app-images">
                        <Link to="/">
                            <img src="assets/images/footer/googleplay.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="footer_item">
                <div className="footer_info">
                    <h4 className="footer_info-title">CONATACT US</h4>

                    <p className="footer_map">
                        <svg width="12px" height="12px" viewBox="-64 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                        </svg>
                        745000, A.Nyýazow köç. №27, Türkmenbaşy/Balkan/Türkmenistan
                    </p>
                    <div className="footer_group">
                        <div className="footer_row">

                            <div className="footer_mobile">
                                <Link to="/">
                                    <svg width="14px" height="14px" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="feather feather-phone">
                                        <path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                        </path>
                                    </svg>
                                    Tel/Fax: +99361 634445

                                </Link>
                            </div>
                            <div className="footer_mobile">
                                <Link to="/">
                                    <svg width="14px" height="14px" viewBox="-96 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
                                    </svg>
                                    Mob: +99361 634445

                                </Link>
                            </div>
                            <div className="footer_mobile">
                                <Link to="/">
                                    <svg width="14px" height="14px" viewBox="-96 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
                                    </svg>
                                    Mob: +99361 634445

                                </Link>
                            </div>
                        </div>

                        <div className="footer_row">
                            <div className="footer_mobile">
                                <Link to="/">
                                    <svg width="14px" height="14px" viewBox="0 0 18 18"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.946 5.29a6.606 6.606 0 0 0-.418-2.185 4.412 4.412 0 0 0-1.039-1.594A4.412 4.412 0 0 0 14.895.472a6.606 6.606 0 0 0-2.184-.418C11.75.01 11.444 0 9 0S6.25.01 5.29.054a6.606 6.606 0 0 0-2.185.418A4.412 4.412 0 0 0 1.51 1.511 4.412 4.412 0 0 0 .472 3.105a6.606 6.606 0 0 0-.418 2.184C.01 6.25 0 6.556 0 9s.01 2.75.054 3.71a6.606 6.606 0 0 0 .418 2.185 4.412 4.412 0 0 0 1.039 1.594 4.411 4.411 0 0 0 1.594 1.039 6.606 6.606 0 0 0 2.184.418C6.25 17.99 6.556 18 9 18s2.75-.01 3.71-.054a6.606 6.606 0 0 0 2.185-.418 4.602 4.602 0 0 0 2.633-2.633 6.606 6.606 0 0 0 .418-2.184C17.99 11.75 18 11.444 18 9s-.01-2.75-.054-3.71zm-1.62 7.347a4.978 4.978 0 0 1-.31 1.67 2.98 2.98 0 0 1-1.708 1.709 4.979 4.979 0 0 1-1.671.31c-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052a4.979 4.979 0 0 1-1.67-.31 2.788 2.788 0 0 1-1.036-.673 2.788 2.788 0 0 1-.673-1.035 4.978 4.978 0 0 1-.31-1.671c-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637a4.979 4.979 0 0 1 .31-1.67 2.788 2.788 0 0 1 .673-1.036 2.788 2.788 0 0 1 1.035-.673 4.979 4.979 0 0 1 1.671-.31c.95-.043 1.234-.052 3.637-.052s2.688.009 3.637.052a4.979 4.979 0 0 1 1.67.31 2.788 2.788 0 0 1 1.036.673 2.788 2.788 0 0 1 .673 1.035 4.979 4.979 0 0 1 .31 1.671c.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637zM9 4.378A4.622 4.622 0 1 0 13.622 9 4.622 4.622 0 0 0 9 4.378zM9 12a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm5.884-7.804a1.08 1.08 0 1 1-1.08-1.08 1.08 1.08 0 0 1 1.08 1.08z" />
                                    </svg>
                                    @tmtrade_official

                                </Link>
                            </div>
                            <div className="footer_mobile">
                                <Link to="/">
                                    <svg width="14px" height="14px" viewBox="0 -4.2 30.03 30.03" id="_15_-_Email"
                                        data-name="15 - Email" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Path_243" data-name="Path 243"
                                            d="M31.015,8.189a3,3,0,0,0-3-3H3.985a3,3,0,0,0-3,3V23.811a3,3,0,0,0,3,3h24.03a3,3,0,0,0,3-3V8.189Zm-2,0V23.811a1,1,0,0,1-1,1H3.985a1,1,0,0,1-1-1V8.189a1,1,0,0,1,1-1h24.03a1,1,0,0,1,1,1Z"
                                            transform="translate(-0.985 -5.189)" fill-rule="evenodd" />
                                        <path id="Path_244" data-name="Path 244"
                                            d="M2.9,8.465l12.613,7.008a1.006,1.006,0,0,0,.972,0L29.1,8.465a1,1,0,1,0-.971-1.748L16,13.455,3.872,6.717A1,1,0,1,0,2.9,8.465Z"
                                            transform="translate(-0.985 -5.189)" fill-rule="evenodd" />
                                    </svg>
                                    info@trade.com.tm

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="footer_bottom">
            <p className="footer_bootom-text">© 2022 - Ähli haklary goralan</p>
        </div>
    </footer>
  )
}

export default footer
