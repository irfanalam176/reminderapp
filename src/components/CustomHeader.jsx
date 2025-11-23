import React from 'react'
import logo from "../assets/img/logo.png"

export default function CustomHeader() {
  return (
    <div>
        <div className="customHeader">
        <span>information resources</span>
        <div className="d-flex">
          <p>accounting and coorporate<br/>regularity authority <span>ACRA</span></p>
          <img src={logo} alt=""/>
        </div>
      </div>
      <p className="mainText">
        WHILST EVERY ENDEAVOR IS MADE TO ENSURE THAT INFORMATION PROVIDED IS UPDATED AND CORRECT. THE AUTHORITY DISCLAIMS ANY LIABILITY FOR ANY DAMAGE OR LOSS THAT MAY BE CAUSED AS A RESULT OF ANY ERROR OR OMISSION.
      </p>

      <div className="d-flex align-items-center justify-content-between">
        <p className="mainText">Business Profile (Company) of LATEH DATA<br/>CORPORATION PTE. LTD. (202023954M)</p>
        <span className="date">Date: 06/01/2023</span>
      </div>
    </div>
  )
}
