import React from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function hero() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="hero">
    <div className="auto_container">
        <div className="hero_wrap">

            <div className="category">
                <h6 className="category_title">
                    <span>
                       
                        Kategoriýalar
                    </span>
                </h6>

                <li className="leftbar__item">
                    <div className="leftbar__item-content">
                        <Link to="/">
                            <img className="category_image" src="assets/images/bar_img/Elektriki enjamlar.png"
                                alt="Elektriki enjamlar " />
                            Elektriki enjamlar
                        </Link>
                        <span>16</span>
                    </div>
                    <ul className="leftbar__dropdown-list">

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Elektrik paýlaýjy gurluşlar</Link>
                            <span>9</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Ýagtylandyryş diregi we maçta</Link>
                            <span>3</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Rele goragy we awtomatika</Link>
                            <span>5</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Kebşirleýiş we lehim enjamlary</Link>
                            <span>1</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Elektrik enjamlar we gurallar</Link>
                            <span>6</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Elektrik hereketlendirijileri we esbaplary</Link>
                            <span>1</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Kabel we sim önümleri</Link>
                            <span>4</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Generatorlar, transformatorlar</Link>
                            <span>5</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Aragatnaşyk we telekommunikasiýa</Link>
                            <span>2</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Ýagtylandyryş önümleri</Link>
                            <span>7</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Ýyldyrymdan goraýjy we topraklama</Link>
                            <span>2</span>
                        </li>

                    </ul>
                </li>

                <li className="leftbar__item">
                    <div className="leftbar__item-content">
                        <Link to="/">
                            <img className="category_image" src="assets/images/bar_img/Saglyk we gözellik.png"
                                alt="Saglyk we gözellik" />
                            Saglyk we gözellik
                        </Link>
                        <span>20</span>
                    </div>
                    <ul className="leftbar__dropdown-list">

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Beden ideg kosmetikalary</Link>
                            <span>4</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Derman serişdeleri</Link>
                            <span>4</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Epilýasiýa önümleri</Link>
                            <span>1</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Kosmetika toplumy</Link>
                            <span>2</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Parfýumlar</Link>
                            <span>3</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Gigiýeniki önümler</Link>
                            <span>12</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Saçlara ideg önümleri we kosmetika</Link>
                            <span>5</span>
                        </li>

                        <li className="leftbar__dropdown-item">
                            <Link to="/">Ýüz kosmetikalary</Link>
                            <span>3</span>
                        </li>

                    </ul>
                </li>
              

                <li className="leftbar__item">
                    <div id="more-categories" className="leftbar__item-content">
                      <Link to="/">Başga Kategoriýalar</Link>
                    </div>
                    
                    <ul id="more__dropdown-list" className="leftbar__dropdown-list ">
                      
                      <li id="more__dropdown-item" className="leftbar__dropdown-item">
                        <div id="more__item-content" className="">
                          <Link to="/" id="more__dropdown-link">
                            <img className="category_image" src="assets/images/bar_img/Enjamlar.png" alt="Enjamlar " />
                            Enjamlar
                          </Link>
                         <span>29</span>
                        </div>
                        <ul className="leftbar__dropdown-more-list">
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Söwda enjamlary</Link>
                            <span id="more__dropdown-sub">3</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Laboratoriýa enjamy</Link>
                            <span id="more__dropdown-sub">1</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Senagat süzgüçleri we süzgüç materiallary</Link>
                            <span id="more__dropdown-sub">1</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Ammar enjamlary</Link>
                            <span id="more__dropdown-sub">2</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Senagat ýyladyş we suw ýyladyş enjamlary</Link>
                            <span id="more__dropdown-sub">3</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Kompressorlar we esbaplary</Link>
                            <span id="more__dropdown-sub">1</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Ýangyn howpsuzlygy enjamlary</Link>
                            <span id="more__dropdown-sub">9</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Liftler enjamlary we göterijiler</Link>
                            <span id="more__dropdown-sub">5</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Nebit we gaz çykarmak üçin enjamlar</Link>
                            <span id="more__dropdown-sub">5</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Howalandyryş we sowadyş ulgamy</Link>
                            <span id="more__dropdown-sub">4</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Nasoslar we nasos enjamlary</Link>
                            <span id="more__dropdown-sub">4</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Senagat 3D printerleri we 3D skanerler</Link>
                            <span id="more__dropdown-sub">1</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Gaýtadan ulanylýan materiallary, galyndylary sortlamak we gaýtadan işlemek üçin enjamlar</Link>
                            <span id="more__dropdown-sub">1</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Enjamlar we beýlekiler.</Link>
                            <span id="more__dropdown-sub">4</span>
                          </li>
                          
                        </ul>
                      </li>
                      
                      <li id="more__dropdown-item" className="leftbar__dropdown-item">
                        <div id="more__item-content" className="">
                          <Link id="more__dropdown-link" to="/">
                            <img className="category_image" src="assets/images/bar_img/Egin-eşik, aýakgap.png" alt="Egin-eşik, aýakgap, aksessuwar " />
                            Egin-eşik, aýakgap, aksessuwar
                          </Link>
                         <span>17</span>
                        </div>
                        <ul className="leftbar__dropdown-more-list">
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Iş eşikleri we howpsuzlyk aýakgaplary</Link>
                            <span id="more__dropdown-sub">4</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Zenan egin-eşikleri</Link>
                            <span id="more__dropdown-sub">8</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Ýyladyjy içki eşikler</Link>
                            <span id="more__dropdown-sub">1</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Toý lybaslary we aksesuwarlary</Link>
                            <span id="more__dropdown-sub">3</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Sport egin-eşikleri</Link>
                            <span id="more__dropdown-sub">3</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Aýakgap</Link>
                            <span id="more__dropdown-sub">3</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Erkek egin-eşikleri</Link>
                            <span id="more__dropdown-sub">7</span>
                          </li>
                          
                          <li className="leftbar__dropdown-more-item">
                            <Link id="leftbar__dropdown-link more__dropdown-sub" to="/">Egin-eşik, aksesuwar we beýlekiler</Link>
                            <span id="more__dropdown-sub">2</span>
                          </li>
                          
                        </ul>
                      </li>
                      
                    </ul>
                  </li>
            </div>


            <div className="hero_slider">
             
                <div className="banner_block">
               
                    <div className="banner_slider">
                      <Slider {...settings}>
                        <div className="banner_item">
                            <div className="banner_images">
                                <Link to="/">
                                    <img src="assets/images/banner/slick_slide1.png" alt="" />
                                </Link>
                            </div>

                        </div>


                        <div className="banner_item">
                            <div className="banner_images">
                                <Link to="/">
                                    <img src="assets/images/banner/slick_slider.png" alt="" />
                                </Link>
                            </div>
                        </div>

                        <div className="banner_item">
                            <div className="banner_images">
                                <Link to="/">
                                    <img src="assets/images/banner/slick_slider2.png" alt="" />
                                </Link>
                            </div>
                        </div>

                        <div className="banner_item">
                            <div className="banner_images">
                                <Link to="/">
                                    <img src="assets/images/banner/slick_slider3.png" alt="" />
                                </Link>
                            </div>
                        </div>

                        <div className="banner_item">
                            <div className="banner_images">
                                <Link to="/">
                                    <img src="assets/images/banner/slick_slide4.png" alt="" />
                                </Link>
                            </div>
                        </div>

                        <div className="banner_item">
                            <div className="banner_images">
                                <Link to="/">
                                    <img src="assets/images/banner/slick_slider5.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        </Slider>
                    </div>
                   
                </div>
               
                <div className="banner_bottom">

                    <div className="banner_bottom-item">
                        <Link to="/">449 KOMPANIÝA</Link>
                    </div>

                    <div className="banner_bottom-item">
                        <h5>ÖNÜMLER: 1897</h5>
                    </div>

                    <div className="banner_bottom-item">
                        <Link to="/">TALAPLAR: 16</Link>
                    </div>

                </div>
              
            </div>

        </div>
    </div>
</section>
  )
}

export default hero
