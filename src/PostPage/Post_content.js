import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../FUllCSS/full.css'

export default class Postcontent extends Component {
  render() {
    return (
        <section className="Cnt">
        <div className="Auto_container">
            <div className="Cnt_wrap">
                <div className="Cnt_info">
                    <div className="Post_block">
                        <h5 className="Post_block-title">
                            Biz barada
                        </h5>
                        <p className="Post_block-txt mb-20">
                            Iňňe Hojalyk jemgyýeti 2015-nji ýyldan bäri bazarda öz ýerini eýeleýär. Kompaniýa islendik
                            görnüşli mebelleri ýagny korpusnoý we ýumşak mebelleri öndürmäge ukyplydyr (DSP, MDF we
                            agaç). Bu kompaniýa özboluşly izolýasiýa tehnologiýasy - poliuretan köpügi bilen hem
                            meşgullanýar.
                        </p>

                        <h5 className="Post_block-title">
                            Önümler we hyzmatlar
                        </h5>
                        <div className="Post_block-row mb-20">
                            <ul className="Post_block-list">
                                <li>
                                    <p>
                                        Şkaf mebelleri
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Ýumşak mebel
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Bezelen mebelleri dikeltmek
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Giriş we içki gapylar
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Çeper ýasama (panjaralar, derwezeler, diwarlar, relsler, oturgyçlar, stollar,
                                        mangallar)
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Agaçdan ýasalan basgançaklar we paneller (sosna, dub, hoz, agaç agajy,
                                        ailanthus)
                                    </p>
                                </li>
                            </ul>

                            <ul className="Post_block-list">
                                <li>
                                    <p>
                                        Penjirelere, gapy bloklary, plastmassa reňkli aýna penjireler
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Mermer we granit önümleri (stoleşnitsalar, kaminler, aýna çarçuwalary, oýulan
                                        sütünler, çüwdürimler, konsollar)
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Poliuretan köpük, fasadlary izolýasiýa etmek, üçek potoloklary, diwarlar,
                                        binýatlar, angarlar we sowadyjy ammarlar, mansard we üçekler
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Poliuretan köpüginden, sütünlerden, kaminlerden, çarçuwalardan, fasadlardan
                                        ýasalan bezeg nagyşlary.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <h5 className="Post_block-title">
                            Kategoriýalar
                        </h5>
                        <p className="Post_block-txt">
                            Hyzmatlar / Mebel öndürmek we abatlamak hyzmatlary
                        </p>
                        <p className="Post_block-txt">
                            Mebel / Söwda mebelleri
                        </p>
                        <p className="Post_block-txt">
                            Mebel / Öý mebelleri
                        </p>
                        <p className="Post_block-txt">
                            Mebel / Ofis mebelleri
                        </p>
                        <p className="Post_block-txt">
                            Mebel / Çaga mebelleri
                        </p>
                        <p className="Post_block-txt mb-20">
                            Gurluşyk / Gapy we penjire
                        </p>

                        <h5 className="Post_block-title">
                            Suratlar
                        </h5>
                        <div className="Post_block-gal mb-20">
                            <div className="Post_block-gal-item">
                                <img src="assets/images/company-2.png" alt="" />
                            </div>
                            <div className="Post_block-gal-item">
                                <img src="assets/images/company-3.png" alt="" />
                            </div>
                            <div className="Post_block-gal-item">
                                <img src="assets/images/company-4.png" alt="" />
                            </div>
                            <div className="Post_block-gal-item">
                                <img src="assets/images/company-1.png" alt="" />
                            </div>
                            <div className="Post_block-gal-item">
                                <img src="assets/images/company-2.png" alt="" />
                            </div>
                            <div className="Post_block-gal-item">
                                <img src="assets/images/company-3.png" alt="" />
                            </div>
                            <div className="Post_block-gal-item">
                                <img src="assets/images/company-4.png" alt="" />
                            </div>
                        </div>

                        <h5 className="Post_block-title">
                            Karta
                        </h5>
                        <div className="Post_block-map">
                            {/* <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d209114.0590642074!2d58.32368407760524!3d38.00099522345846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1674895464107!5m2!1sru!2s"
                                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        </div>
                    </div>
                </div>

                <div className="Cnt_aside">
                    <Link to="/" className="Cnt_aside-advert">
                        <img src={"public/assets/images/advert.gif"} alt="advert" />
                    </Link>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
