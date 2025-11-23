import React from 'react'
import { Link } from 'react-router-dom'
import CustomHeader from '../components/CustomHeader'
import Upload from '../components/Upload'
import TextArea from '../components/TextArea'
import ShareHolderCardForm from '../components/ShareHolderCardForm'
export default function AddFile() {
  return (
    <div>

<div className="container">
 <div className="row">
  <div className="col-lg-6 mx-auto">
  <Upload/>
  </div>
 </div>
  <div className="row">
    <div className="col-lg-6">

        <CustomHeader/>
      <form action="" className="simpleForm">
        <h1 className="title mt-5">Sharholders</h1>
        <h1 className="title mt-5">Charges</h1>
        
        <h1 className="title mt-5">Officer/Authorised Representative(s)</h1>
        <table>
          <thead>
            <tr>
              <th><span>Name</span><span>Address</span></th>
              <th>ID</th>
              <th><span>Nationality</span>Registration<span> <span>Origin</span> </span><span>Place Of Incorporation</span></th>
              <th>Source Of Address</th>
              <th>Address Changed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text"style={{width:"2em",display:"inline-block"}} className='me-1'/><input type="text" style={{width:"78%",display:"inline-block"}}/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
            </tr>
            <tr>
              <td><TextArea/></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table>
            <thead>
                <tr>
                    <th>Ordinary (Number)</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                </tr>
            </tbody>
        </table>

        <h1 className="title">Abbrevation</h1>
        <h6 className="smText">UL- local entity not register with ACRA</h6>
        <h6 className="smText">UF- Foreign entity not register with ACRA</h6>
        <h6 className="smText">AR- Annual Return</h6>
        <h6 className="smText">AGM- Annual general meeting</h6>
        <h6 className="smText">FS- financial statement</h6>
        <h6 className="smText">FYE- financial year end</h6>
        <h6 className="smText">OSCARS- once stop change of address reporting service by immigratioon and checkpoin authority</h6>
        <h6 className="title">Note:</h6>
        <p className="smText">
        -The information contained in this product is collated from lodgements filed with ACRA, and/or information collected by other government sources.
        </p>
        <p className='smText my-3'>
        -The list of officers for this entity is available for online authentication within 30 days from the date of purchase of this Business Profile. Please scan the QR code available on the last page of this profile to access the authentication page. For more information, please visit ⦁	<a href="#" style={{color:"#356865",textTransform:"lowercase"}}>www.acra.gov.sg</a>.
        </p>
       <div className="buttonGroup">
        <Link to="/" className="mainBtn odd">Previous</Link>
        <Link to="/addFile/addfile_4" className="mainBtn">Next</Link>
       </div>
      </form>
    </div>
    <div className="col-lg-6">
    <ShareHolderCardForm/>
    </div>
  </div>
</div>
  </div>
  )
}
