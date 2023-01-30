import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../FUllCSS/full.css'


export default class Content extends Component {
  render() {
    return (
        <section className="Cnt">
        <div className="Auto_container">
            <div className="Cnt_wrap">
                <div className="Cnt_aside">
                    <div className="Cnt_aside-box">
                        <div className="Cnt_title">
                            <h6>
                                Ýerleşýän Ýeri
                            </h6>
                        </div>

                        <Link to="/" className="Cnt_aside-link">
                            <p>
                                AHAL
                            </p>

                            <span>
                                343
                            </span>
                        </Link>

                        <Link to="/" className="Cnt_aside-link">
                            <p>
                                BALKAN
                            </p>

                            <span>
                                34
                            </span>
                        </Link>

                        <Link to="/" className="Cnt_aside-link">
                            <p>
                                DAŞARY ÝURT
                            </p>

                            <span>
                                33
                            </span>
                        </Link>

                        <Link to="/" className="Cnt_aside-link">
                            <p>
                                LEBAP
                            </p>

                            <span>
                                343
                            </span>
                        </Link>

                        <Link to="/" className="Cnt_aside-link">
                            <p>
                                MARY
                            </p>

                            <span>
                                343
                            </span>
                        </Link>
                    </div>

                    <div className="Cnt_aside-box">
                        <div className="Cnt_title">
                            <h6>
                                Iş Ugry
                            </h6>
                        </div>

                        <Link to="/" className="Cnt_aside-link">
                            <p>
                                Eksport ediji
                            </p>

                            <span>
                                343
                            </span>
                        </Link>

                        <Link to="/" className="Cnt_aside-link">
                            <p>
                                Öndüriji
                            </p>

                            <span>
                                34
                            </span>
                        </Link>

                        <Link to="/" className="Cnt_aside-link">
                            <p>
                                Lomay satyjy
                            </p>

                            <span>
                                33
                            </span>
                        </Link>

                        <Link to="/" className="Cnt_aside-link">
                            <p>
                                Import ediji
                            </p>

                            <span>
                                343
                            </span>
                        </Link>

                        <Link to="/" className="Cnt_aside-link">
                            <p>
                                Hyzmat
                            </p>

                            <span>
                                343
                            </span>
                        </Link>

                        <Link to="/" className="Cnt_aside-link">
                            <p>
                                Bölekleýin satyjy
                            </p>

                            <span>
                                343
                            </span>
                        </Link>
                    </div>

                    <Link to="/" className="Cnt_aside-advert">
                        <img src="assets/images/advert.gif" alt="advert" />
                    </Link>
                </div>

                <div className="Cnt_info">
                    <div className="Company">
                        <h4 className="Cnt_title">
                            Meşhur Kompaniýalar
                        </h4>
                        <div className="Company_box">
                            <Link to="/" className="Company_item">
                                <p>
                                    Plastik poddon önümçiligi
                                </p>

                                <span>
                                    <img src="assets/images/company-2.png" alt="company-logo" />
                                </span>
                            </Link>

                            <Link to="/" className="Company_item">
                                <p>
                                    Ulag we logistika hyzmatlary
                                </p>

                                <span>
                                    <img src="assets/images/company-1.png" alt="company-logo" />
                                </span>
                            </Link>

                            <Link to="/" className="Company_item">
                                <p>
                                    Ýangyn söndüriji serişdelerini abatlamak, gaýtadan doldurmak we kuwwatlandyrmak
                                    hyzmaty.
                                </p>

                                <span>
                                    <img src="assets/images/company-3.png" alt="company-logo" />
                                </span>
                            </Link>

                            <Link to="/" className="Company_item">
                                <p>
                                    Korpusnoý we ýumşak mebel önümçiligi
                                </p>

                                <span>
                                    <img src="assets/images/company-4.png" alt="company-logo" />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="Latest">
                        <h4 className="Cnt_title">
                            Soňky Goşulan Talaplar
                        </h4>

                        <div className="Latest_box">
                            <Link to="/" className="Latest_item">
                                <div className="Latest_item-row">
                                    <span className="Latest_item-icon">
                                        <img src="assets/images/tm.png" alt="tm" />
                                    </span>

                                    <h6 className="Latest_item-title">
                                        Kraft paketlar
                                    </h6>
                                </div>

                                <p className="Latest_item-txt">
                                    Bizde satlyk paketlar bar
                                </p>
                            </Link>

                            <Link to="/" className="Latest_item">
                                <div className="Latest_item-row">
                                    <span className="Latest_item-icon">
                                        <img src="assets/images/tm.png" alt="tm" />
                                    </span>

                                    <h6 className="Latest_item-title">
                                        Şarikli ruçka
                                    </h6>
                                </div>

                                <p className="Latest_item-txt">
                                    Umumy aýratynlyklar:
                                </p>
                                <p className="Latest_item-txt">
                                    Her blokda 50 sany.
                                </p>
                                <p className="Latest_item-txt">
                                    Korpusynyň materialy: Plastiki
                                </p>
                                <p className="Latest_item-txt">
                                    Öndüriji ýurdy: Türkmenistan
                                </p>
                                <p className="Latest_item-txt">
                                    Paket görnüşi: Karton
                                </p>
                                <p className="Latest_item-txt">
                                    Markasy: "Erkin"
                                </p>
                                <p className="Latest_item-txt">
                                    Korpusyň şekli: Tegelek
                                </p>
                                <p className="Latest_item-txt">
                                    Korpusyň reňki: Gara, Gök, Gyzyl, Ýaşyl
                                </p>
                                <p className="Latest_item-txt">
                                    Syýa reňki: Gara, Gök, Gyzyl, Ýaşyl
                                </p>
                                <p className="Latest_item-txt">
                                    Автоматическая шариковая ручка "erkin"
                                </p>

                                <p className="Latest_item-txt">
                                    Model: EPBP993BLK
                                </p>
                            </Link>

                            <Link to="/" className="Latest_item">
                                <div className="Latest_item-row">
                                    <span className="Latest_item-icon">
                                        <img src="assets/images/tm.png" alt="tm" />
                                    </span>

                                    <h6 className="Latest_item-title">
                                        Kraft paketlar
                                    </h6>
                                </div>

                                <p className="Latest_item-txt">
                                    Bizde satlyk paketlar bar
                                </p>
                            </Link>

                            <Link to="/" className="Latest_item">
                                <div className="Latest_item-row">
                                    <span className="Latest_item-icon">
                                        <img src="assets/images/tm.png" alt="tm" />
                                    </span>

                                    <h6 className="Latest_item-title">
                                        Kraft paketlar
                                    </h6>
                                </div>

                                <p className="Latest_item-txt">
                                    Bizde satlyk paketlar bar
                                </p>
                            </Link>

                            <Link to="/" className="Latest_item">
                                <div className="Latest_item-row">
                                    <span className="Latest_item-icon">
                                        <img src="assets/images/tm.png" alt="tm" />
                                    </span>

                                    <h6 className="Latest_item-title">
                                        Kraft paketlar
                                    </h6>
                                </div>

                                <p className="Latest_item-txt">
                                    Bizde satlyk paketlar bar
                                </p>
                            </Link>

                            <Link to="/" className="Latest_item">
                                <div className="Latest_item-row">
                                    <span className="Latest_item-icon">
                                        <img src="assets/images/tm.png" alt="tm" />
                                    </span>

                                    <h6 className="Latest_item-title">
                                        Kraft paketlar
                                    </h6>
                                </div>

                                <p className="Latest_item-txt">
                                    Bizde satlyk paketlar bar
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className="Company">
                        <h4 className="Cnt_title">
                            Soňky Goşulan Kompaniýalar
                        </h4>
                        <div className="Company_box">
                            <Link to="/" className="Company_item">
                                <p>
                                    Plastik poddon önümçiligi
                                </p>

                                <span>
                                    <img src="assets/images/company-2.png" alt="company-logo" />
                                </span>
                            </Link>

                            <Link to="/" className="Company_item">
                                <p>
                                    Ulag we logistika hyzmatlary
                                </p>

                                <span>
                                    <img src="assets/images/company-1.png" alt="company-logo" />
                                </span>
                            </Link>

                            <Link to="/" className="Company_item">
                                <p>
                                    Ýangyn söndüriji serişdelerini abatlamak, gaýtadan doldurmak we kuwwatlandyrmak
                                    hyzmaty.
                                </p>

                                <span>
                                    <img src="assets/images/company-3.png" alt="company-logo" />
                                </span>
                            </Link>

                            <Link to="/" className="Company_item">
                                <p>
                                    Korpusnoý we ýumşak mebel önümçiligi
                                </p>

                                <span>
                                    <img src="assets/images/company-4.png" alt="company-logo" />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="Add">
                        <h2 className="Add_title">
                            TM TRADE-e goşulmak üçin sebäpler
                        </h2>

                        <div className="Add_box">
                            <div className="Add_item">
                                <span>
                                    <img src="assets/images/icon-1.png" alt="icon" />
                                </span>

                                <p className="Add_item-txt">
                                    Müşderiler bilen göniden-göni aragatnaşyk
                                </p>
                            </div>

                            <div className="Add_item">
                                <span>
                                    <img src="assets/images/icon-2.png" alt="icon" />
                                </span>

                                <p className="Add_item-txt">
                                    İşleriňizi daşary ýurtlarda ösdüriň
                                </p>
                            </div>

                            <div className="Add_item">
                                <span>
                                    <img src="assets/images/icon-3.png" alt="icon" />
                                </span>

                                <p className="Add_item-txt">
                                    Websaýt gözleg motorlarynda birinji sahypada ýer alýar
                                </p>
                            </div>

                            <div className="Add_item">
                                <span>
                                    <img src="assets/images/icon-4.png" alt="icon" />
                                </span>

                                <p className="Add_item-txt">
                                    Birnäçe önüm we hyzmat teklipleri
                                </p>
                            </div>

                            <div className="Add_item">
                                <span>
                                    <img src="assets/images/icon-5.png" alt="icon" />
                                </span>

                                <p className="Add_item-txt">
                                    Maglumatlar 4 dürli dilde ýerleşdirilýär
                                </p>
                            </div>

                            <div className="Add_item">
                                <span>
                                    <img src="assets/images/icon-6.png" alt="icon" />
                                </span>

                                <p className="Add_item-txt">
                                    TM TRADE-de öz web saýdyňy döretmek mümkinçiligi
                                </p>
                            </div>
                        </div>

                        <button className="Add_btn">
                            Kompaniýaňyzy goşuň
                        </button>

                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
