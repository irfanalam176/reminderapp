import React from 'react'
import { Link } from 'react-router-dom'
import Inputs from '../components/Inputs'
import AuditCardForm from "../components/AuditCardForm"
import CustomHeader from '../components/CustomHeader'
import Upload from '../components/Upload'
import TextArea from '../components/TextArea'
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
        <h1 className="title mt-5">The Following Are The Brief Particulars of </h1>
        <label for="">Ragister Office Address:</label>
       <TextArea/>
        <label for="">Date Of Address:</label>
       <Inputs/>
        <label for="">Date Of Last AGM:</label>
       <Inputs/>
        <label for="">Date Of Last AR:</label>
       <Inputs/>
        <label for="">FYE As At Date Of Last AR:</label>
       <Inputs/>
   
        <h1 className="title mt-5">Audit Firms</h1>
        <table>
            <thead>
                <th>Name</th>
            </thead>
            <tbody>
                <tr><td><input type="text" /></td></tr>
            </tbody>
        </table>
        <h1 className="title mt-5">Charges</h1>
        <table>
          <thead>
            <tr>
              <th>Charge Number</th>
              <th>Date Registered</th>
              <th>Currency</th>
              <th>Amount Secured</th>
              <th>Chargee(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
            </tr>
          </tbody>
        </table>
        
        <h1 className="title mt-5">Officer/Authorised Representative(s)</h1>
        <table>
          <thead>
            <tr>
              <th><span>Name</span><span>Address</span></th>
              <th>ID</th>
              <th><span>Nationality</span><span>Position Held</span></th>
              <th>Source Of Address</th>
              <th>Date Of Appointment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
            </tr>
            <tr>
              <td><input type="text"/></td>
              <td></td>
              <td><input type="text"/></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
   

       <div className="buttonGroup">
        <Link to="/" className="mainBtn odd">Previous</Link>
        <Link to="/addFile/addfile_3" className="mainBtn">Next</Link>
       </div>
      </form>
    </div>
    <div className="col-lg-6">
    <AuditCardForm/>
    </div>
  </div>
</div>
  </div>
  )
}
