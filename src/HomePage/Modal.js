import React, { Component } from 'react'

import '../FUllCSS/full.css'

export default class Modal extends Component {
  render() {
    return (


        <div onClick={()=>{}} className="modal_window active">
        <div onClick={()=>{}} className="modal_box">

            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Kompaniýaňyzy goşuň</h5>
                <span onClick={()=>{this.props.closeModal();console.log("yap")}}  className="modal_close">
                    <svg onClick={()=>{this.props.closeModal();console.log("yap")}}  className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" role="img"
                        aria-hidden="true">
                        <path
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
                </span>

                <form className="" method="POST" action="/companies/request/">
                    <input type="hidden" name="csrfmiddlewaretoken"
                        value="6fkcAYoFHd4tobk6BHU3ezuN4dKhcua2WQaPqHi20bvIyScymXQXB1sS5gfWQj27" />
                    <div className="add-company-form">
                        <span className="add-company-input-group">
                            <input id="name" type="text" name="company_name" required=""
                                tp-type="username" />
                            <label for="name">Kompaniýanyň ady</label>
                            <div ></div>
                        </span>

                        <span className="add-company-input-group">
                            <input id="name" type="text" name="name" required="" tp-type="username" />
                            <label for="name">Adyňyz</label>
                        </span>
                        <span className="add-company-input-group">
                            <input id="tel" type="tel" name="phone" required="" />
                            <label for="tel">Telefon</label>
                        </span>
                        <span className="add-company-input-group">
                            <input id="email" type="email" name="email" required=""
                                tp-type="username" />
                            <label for="email">E-Poçta</label>
                        </span>
                        <button tp-type="button">IBER</button>
                        <p className="add-company-form-agree">
                            Talabyňyzy kabul edip, ýakyn wagtda siziň bilen habarlaşarys.
                        </p>
                    </div>
                </form>

                <div onClick={()=>{this.props.closeModal();console.log("yap")}} className="modal_footer">
                    <button onClick={()=>{this.props.closeModal();console.log("yap")}}  className="modal_btn cancel">
                        Ýap
                    </button>
    
                </div>

            </div>
        </div>
    </div>

      
    )
  }
}

