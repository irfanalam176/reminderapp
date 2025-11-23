import React from 'react'
import Inputs from './Inputs'
import AuditTables from './AuditTables'
export default function SignatureFormCard() {
  return (
    <div>
        <form action="" className="cardForm">
        <h1 class="title mt-5">Principal Activities</h1>
        <div class="inputContainer">
          <label for="">Activities (I)</label>
         <Inputs/>
        </div>
        <div class="inputContainer">
          <label for="">Description</label>
         <Inputs/>
        </div>
        <div class="inputContainer">
          <label for="">Activities (II)</label>
         <Inputs/>
        </div>
        <div class="inputContainer">
          <label for="">Description</label>
         <Inputs/>
        </div>

        <h1 class="title mt-5">Capital</h1>
        <table>
          <thead>
            <tr>
              <th>Issued Share Capital (AMMOUNT)</th>
              <th>Number of Shares *</th>
              <th>Currency</th>
              <th>Share Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Paid-Up Capital</th>
              <th>Number of Shares *</th>
              <th>Currency</th>
              <th>Share Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
            </tr>
          </tbody>
        </table>

        <div class="inputContainer">
          <label for="">Registered Office Address</label>
         <Inputs/>
        </div>
        <div class="inputContainer">
          <label for="">Date Of Address</label>
         <Inputs/>
        </div>
        <div class="inputContainer">
          <label for="">Date Of Last AGM</label>
         <Inputs/>
        </div>
        <div class="inputContainer">
          <label for="">Date Of Last AR</label>
         <Inputs/>
        </div>
        <div class="inputContainer">
          <label for="">FYE As At Date Of Last AR</label>
         <Inputs/>
        </div>

        <AuditTables/>

        <table>
          <thead>
            <tr>
              <th>Ordinary (Number)</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="row">
            <div className="col-6 ms-auto"><a href="/" className="mainBtn text-center" style={{display:"inline-block",width:"100%"}}>Submite</a></div>
        </div>
        </form>
    </div>
  )
}
