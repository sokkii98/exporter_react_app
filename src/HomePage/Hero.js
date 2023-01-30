import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import '../FUllCSS/full.css'


export default class Hero extends Component {
  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <section className="Hero">
        <div className="Auto_container">
          <div className="Hero_wrap">
            <div className="Hero_aside active">
              <h2 className="Hero_aside-title">
                Kategoriýalar
              </h2>

              <ul className="Hero_aside-list">
                <li>
                  <Link to="/" className="Hero_aside-item">
                    <div className="Hero_aside-group">
                      <span className="Hero_aside-icon">
                        <img src="assets/images/aside-icon-1.png" alt="icon" />
                      </span>

                      <p className="Hero_aside-txt">
                        Elektrik enjamlar
                      </p>
                    </div>

                    <p className="Hero_aside-num">
                      16
                    </p>
                  </Link>

                  <ul className="Hero_aside-bar">
                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <div className="Hero_aside-group">
                          <span className="Hero_aside-icon">
                            <img src="assets/images/aside-icon-1.png" alt="icon" />
                          </span>

                          <p className="Hero_aside-txt">
                            Elektrik enjamlar
                          </p>
                        </div>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                  </ul>
                </li>

                <li>
                  <Link to="/" className="Hero_aside-item">
                    <div className="Hero_aside-group">
                      <span className="Hero_aside-icon">
                        <img src="assets/images/aside-icon-2.png" alt="icon" />
                      </span>

                      <p className="Hero_aside-txt">
                        Saglyk we Gozellik
                      </p>
                    </div>

                    <p className="Hero_aside-num">
                      16
                    </p>
                  </Link>

                  <ul className="Hero_aside-bar">
                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>


                  </ul>
                </li>

                <li>
                  <Link to="/" className="Hero_aside-item">
                    <div className="Hero_aside-group">
                      <span className="Hero_aside-icon">
                        <img src="assets/images/aside-icon-1.png" alt="icon" />
                      </span>

                      <p className="Hero_aside-txt">
                        Elektrik enjamlar
                      </p>
                    </div>

                    <p className="Hero_aside-num">
                      16
                    </p>
                  </Link>

                  <ul className="Hero_aside-bar">
                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <div className="Hero_aside-group">
                          <span className="Hero_aside-icon">
                            <img src="assets/images/aside-icon-1.png" alt="icon" />
                          </span>

                          <p className="Hero_aside-txt">
                            Elektrik enjamlar
                          </p>
                        </div>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                  </ul>
                </li>

                <li>
                  <Link to="/" className="Hero_aside-item">
                    <div className="Hero_aside-group">
                      <span className="Hero_aside-icon">
                        <img src="assets/images/aside-icon-2.png" alt="icon" />
                      </span>

                      <p className="Hero_aside-txt">
                        Saglyk we Gozellik
                      </p>
                    </div>

                    <p className="Hero_aside-num">
                      16
                    </p>
                  </Link>

                  <ul className="Hero_aside-bar">
                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/" className="Hero_aside-item">
                    <div className="Hero_aside-group">
                      <span className="Hero_aside-icon">
                        <img src="assets/images/aside-icon-1.png" alt="icon" />
                      </span>

                      <p className="Hero_aside-txt">
                        Elektrik enjamlar
                      </p>
                    </div>

                    <p className="Hero_aside-num">
                      16
                    </p>
                  </Link>

                  <ul className="Hero_aside-bar">
                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/" className="Hero_aside-item">
                    <div className="Hero_aside-group">
                      <span className="Hero_aside-icon">
                        <img src="assets/images/aside-icon-2.png" alt="icon" />
                      </span>

                      <p className="Hero_aside-txt">
                        Saglyk we Gozellik
                      </p>
                    </div>

                    <p className="Hero_aside-num">
                      16
                    </p>
                  </Link>

                  <ul className="Hero_aside-bar">
                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/" className="Hero_aside-item">
                    <div className="Hero_aside-group">
                      <span className="Hero_aside-icon">
                        <img src="assets/images/aside-icon-1.png" alt="icon" />
                      </span>

                      <p className="Hero_aside-txt">
                        Elektrik enjamlar
                      </p>
                    </div>

                    <p className="Hero_aside-num">
                      16
                    </p>
                  </Link>

                  <ul className="Hero_aside-bar">
                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/" className="Hero_aside-item">
                    <div className="Hero_aside-group">
                      <span className="Hero_aside-icon">
                        <img src="assets/images/aside-icon-2.png" alt="icon" />
                      </span>

                      <p className="Hero_aside-txt">
                        Saglyk we Gozellik
                      </p>
                    </div>

                    <p className="Hero_aside-num">
                      16
                    </p>
                  </Link>

                  <ul className="Hero_aside-bar">
                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/" className="Hero_aside-item">
                    <div className="Hero_aside-group">
                      <span className="Hero_aside-icon">
                        <img src="assets/images/aside-icon-1.png" alt="icon" />
                      </span>

                      <p className="Hero_aside-txt">
                        Elektrik enjamlar
                      </p>
                    </div>

                    <p className="Hero_aside-num">
                      16
                    </p>
                  </Link>

                  <ul className="Hero_aside-bar">
                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/" className="Hero_aside-item">
                    <div className="Hero_aside-group">
                      <span className="Hero_aside-icon">
                        <img src="assets/images/aside-icon-2.png" alt="icon" />
                      </span>

                      <p className="Hero_aside-txt">
                        Saglyk we Gozellik
                      </p>
                    </div>

                    <p className="Hero_aside-num">
                      16
                    </p>
                  </Link>

                  <ul className="Hero_aside-bar">
                    <li>
                      <Link to="/" className="Hero_aside-item">
                        <div className="Hero_aside-group">
                          <span className="Hero_aside-icon">
                            <img src="assets/images/aside-icon-1.png" alt="icon" />
                          </span>

                          <p className="Hero_aside-txt">
                            Elektrik enjamlar
                          </p>
                        </div>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>
                    </li>

              
                  </ul>
                </li>

                <li>
                  <Link to="/" className="Hero_aside-item">
                    <div className="Hero_aside-group">
                      <p className="Hero_aside-txt">
                        Basga Kategoriyalar
                      </p>
                    </div>

                    <p className="Hero_aside-num">
                      16
                    </p>
                  </Link>

                  <ul className="Hero_aside-bar">
                    <li>
                      <Link to="/" className="Hero_aside-item open-bar">
                        <p className="Hero_aside-txt">
                          Saglyk we Gozellik
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>

                      <ul className="more-bar">
                        <li>
                          <Link to="/" className="Hero_aside-item">
                            <p className="Hero_aside-txt">
                              Saglyk we Gozellik
                            </p>

                            <p className="Hero_aside-num">
                              16
                            </p>
                          </Link>
                        </li>

                        <li>
                          <Link to="/" className="Hero_aside-item">
                            <p className="Hero_aside-txt">
                              Elektrik enjamlar
                            </p>

                            <p className="Hero_aside-num">
                              16
                            </p>
                          </Link>
                        </li>

                        <li>
                          <Link to="/" className="Hero_aside-item">
                            <p className="Hero_aside-txt">
                              Saglyk we Gozellik
                            </p>

                            <p className="Hero_aside-num">
                              16
                            </p>
                          </Link>
                        </li>

                        <li>
                          <Link to="/" className="Hero_aside-item">
                            <p className="Hero_aside-txt">
                              Elektrik enjamlar
                            </p>

                            <p className="Hero_aside-num">
                              16
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/" className="Hero_aside-item open-bar">
                        <p className="Hero_aside-txt">
                          Elektrik enjamlar
                        </p>

                        <p className="Hero_aside-num">
                          16
                        </p>
                      </Link>

                      <ul className="more-bar">
                        <li>
                          <Link to="/" className="Hero_aside-item">
                            <p className="Hero_aside-txt">
                              Saglyk we Gozellik
                            </p>

                            <p className="Hero_aside-num">
                              16
                            </p>
                          </Link>
                        </li>

                        <li>
                          <Link to="/" className="Hero_aside-item">
                            <p className="Hero_aside-txt">
                              Elektrik enjamlar
                            </p>

                            <p className="Hero_aside-num">
                              16
                            </p>
                          </Link>
                        </li>

                        <li>
                          <Link to="/" className="Hero_aside-item">
                            <p className="Hero_aside-txt">
                              Saglyk we Gozellik
                            </p>

                            <p className="Hero_aside-num">
                              16
                            </p>
                          </Link>
                        </li>

                        <li>
                          <Link to="/" className="Hero_aside-item">
                            <p className="Hero_aside-txt">
                              Elektrik enjamlar
                            </p>

                            <p className="Hero_aside-num">
                              16
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="Hero_slider">
              <div className="Mobile_category">
                <button className="Mobile_category-btn">
                  <span>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.3312 1.61261e-07H4.99921C3.67314 1.61261e-07 2.40181 0.526698 1.46406 1.46406C0.526698 2.40178 0 3.67314 0 4.99921V13.3312C0 14.6573 0.526698 15.9286 1.46406 16.8664C2.40178 17.8037 3.67314 18.3304 4.99921 18.3304H13.3312C14.6573 18.3304 15.9286 17.8037 16.8664 16.8664C17.8037 15.9287 18.3304 14.6573 18.3304 13.3312V4.99921C18.3304 3.67314 17.8037 2.40181 16.8664 1.46406C15.9287 0.526698 14.6573 1.61261e-07 13.3312 1.61261e-07ZM14.9976 6.66562C14.9976 8.87546 14.1198 10.9946 12.5572 12.5572C10.9945 14.1198 8.87546 14.9976 6.66562 14.9976H4.99921C4.55732 14.9976 4.13327 14.8221 3.82083 14.5096C3.50838 14.1972 3.33281 13.7731 3.33281 13.3312V4.99921C3.33281 4.55732 3.50838 4.13327 3.82083 3.82083C4.13327 3.50838 4.55732 3.33281 4.99921 3.33281H13.3312C13.7731 3.33281 14.1972 3.50838 14.5096 3.82083C14.8221 4.13327 14.9976 4.55732 14.9976 4.99921V6.66562ZM13.3312 21.6633H4.99921C3.67314 21.6633 2.40181 22.19 1.46406 23.1273C0.526698 24.065 0 25.3364 0 26.6625V34.9945C0 36.3206 0.526698 37.5919 1.46406 38.5296C2.40178 39.467 3.67314 39.9937 4.99921 39.9937H13.3312C14.6573 39.9937 15.9286 39.467 16.8664 38.5296C17.8037 37.5919 18.3304 36.3206 18.3304 34.9945V26.6625C18.3304 25.3364 17.8037 24.0651 16.8664 23.1273C15.9287 22.19 14.6573 21.6633 13.3312 21.6633ZM14.9976 28.3289C14.9976 30.5387 14.1198 32.6578 12.5572 34.2204C10.9945 35.783 8.87546 36.6609 6.66562 36.6609H4.99921C4.55732 36.6609 4.13327 36.4853 3.82083 36.1729C3.50838 35.8604 3.33281 35.4364 3.33281 34.9945V26.6625C3.33281 26.2206 3.50838 25.7965 3.82083 25.4841C4.13327 25.1716 4.55732 24.9961 4.99921 24.9961H13.3312C13.7731 24.9961 14.1972 25.1716 14.5096 25.4841C14.8221 25.7965 14.9976 26.2206 14.9976 26.6625V28.3289ZM34.9945 21.6633H26.6625C25.3364 21.6633 24.0651 22.19 23.1273 23.1273C22.19 24.065 21.6633 25.3364 21.6633 26.6625V34.9945C21.6633 36.3206 22.19 37.5919 23.1273 38.5296C24.065 39.467 25.3364 39.9937 26.6625 39.9937H34.9945C36.3206 39.9937 37.5919 39.467 38.5296 38.5296C39.467 37.5919 39.9937 36.3206 39.9937 34.9945V26.6625C39.9937 25.3364 39.467 24.0651 38.5296 23.1273C37.5919 22.19 36.3206 21.6633 34.9945 21.6633ZM36.6609 28.3289C36.6609 30.5387 35.7831 32.6578 34.2204 34.2204C32.6578 35.783 30.5387 36.6609 28.3289 36.6609H26.6625C26.2206 36.6609 25.7965 36.4853 25.4841 36.1729C25.1716 35.8604 24.9961 35.4364 24.9961 34.9945V26.6625C24.9961 26.2206 25.1716 25.7965 25.4841 25.4841C25.7965 25.1716 26.2206 24.9961 26.6625 24.9961H34.9945C35.4364 24.9961 35.8604 25.1716 36.1729 25.4841C36.4853 25.7965 36.6609 26.2206 36.6609 26.6625V28.3289ZM30.8285 18.3304C33.3976 18.3368 35.8511 17.2629 37.5889 15.3707C39.3268 13.4789 40.1894 10.9432 39.965 8.38411C39.7411 5.82461 38.4512 3.47755 36.4109 1.91636C34.8152 0.673989 32.8508 -0.000380731 30.8285 1.61261e-07C28.3991 0.00446374 26.0703 0.971561 24.3525 2.68929C22.6348 4.40702 21.6677 6.73589 21.6633 9.16522C21.6722 11.5934 22.6404 13.9193 24.3574 15.6363C26.0744 17.3533 28.4003 18.3215 30.8285 18.3304ZM30.8285 3.33281C31.9674 3.32797 33.0822 3.6646 34.0282 4.29913C34.6627 5.24504 34.9993 6.35985 34.9945 7.49882C34.9945 9.04581 34.38 10.5292 33.2861 11.6228C32.1925 12.7168 30.7092 13.3312 29.1621 13.3312C28.0231 13.3361 26.9083 12.9994 25.9624 12.3649C25.3278 11.419 24.9912 10.3042 24.9961 9.16522C24.9961 7.61823 25.6105 6.13484 26.7045 5.04121C27.798 3.94728 29.2814 3.33281 30.8285 3.33281Z"
                        fill="black" />
                    </svg>
                  </span>

                  Kategoriyalar
                </button>
              </div>

              <div className="Hero_slider-box">
                <Slider {...settings}>
                  <div className="Hero_slider-item">
                    <img src="/assets/images/hero-slider-1.png" alt="slider-img" />
                  </div>

                  <div className="Hero_slider-item">
                    <img src="assets/images/hero-slider-2.png" alt="slider-img" />
                  </div>

                  <div className="Hero_slider-item">
                    <img src="assets/images/hero-slider-1.png" alt="slider-img" />
                  </div>

                  <div className="Hero_slider-item">
                    <img src="assets/images/hero-slider-2.png" alt="slider-img" />
                  </div>

                </Slider>

              </div>

              <div className="Hero_slider-footer">
                <Link to="/" className="Hero_slider-footer-link">
                  <span>452 Komapaniya</span>
                </Link>
                <Link to="/" className="Hero_slider-footer-link white">
                  <span>Onumler: 2285</span>
                </Link>
                <Link to="/" className="Hero_slider-footer-link">
                  <span>Talaplar: 18</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }
}
