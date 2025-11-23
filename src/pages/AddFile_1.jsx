import React from 'react'
import { Link } from 'react-router-dom'
import Inputs from '../components/Inputs'
import CardForm from '../components/CardForm'
import CustomHeader from '../components/CustomHeader'
import Upload from '../components/Upload'
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
        <label for="">UEN:</label>
       <Inputs/>
        <label for="">Company Name:</label>
       <Inputs/>
        <label for="">Former Name If Any:</label>
       <Inputs/>
        <label for="">Incorporation Date:</label>
       <Inputs/>
        <label for="">Company Type:</label>
       <Inputs/>
        <label for="">Status</label>
       <Inputs/>
        <label for="">Status Date</label>
       <Inputs/>


        <h1 className="title mt-5">Principal Activities</h1>
        <label for="">Activities (I):</label>
       <Inputs/>
        <label for="">Description:</label>
       <Inputs/>
        <label for="">Activities (II)</label>
       <Inputs/>
        <label for="">Description</label>
       <Inputs/>
        
        
        <h1 className="title mt-5">Capital</h1>
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
        
        <h6 className="smText">Number of Shares includes number of Treasury Shares</h6>
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
   
        <h6 className="smText">COMPANY HAS THE FOLLOWING ORDINARY SHARES HELD AS TREASURY SHARES</h6>
        <table>
          <thead>
            <tr>
              <th>Number of Shares</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
            </tr>
          </tbody>
        </table>

       <div className="buttonGroup">
        <Link to="/" className="mainBtn odd">Previous</Link>
        <Link to="/addFile/addfile_2" className="mainBtn">Next</Link>
       </div>
      </form>
    </div>
    <div className="col-lg-6">
    <CardForm/>
    </div>
  </div>
</div>
  </div>
  )
}
