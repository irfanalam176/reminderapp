import React from 'react'
import Inputs from './Inputs'
export default function CardForm() {
  return (
    <div>
           <form action="" class="cardForm">
        <h1 class="title mt-5">The Following Are The Brief Particulars of </h1>
        <div class="inputContainer">
          <label for="">UEN</label>
         <Inputs/>
        </div>
        <div class="inputContainer">
          <label for="">Company Name</label>
         <Inputs/>
        </div>
        <div class="inputContainer">
          <label for="">Former Name If Any</label>
         <Inputs/>
        </div>
        <div class="inputContainer">
          <label for="">Incorporation Date</label>
         <Inputs/>
        </div>
        <div class="inputContainer">
          <label for="">Company Type</label>
         <Inputs/>
        </div>
        <div class="inputContainer">
          <label for="">Status</label>
         <Inputs/>
        </div>
        <div class="inputContainer">
          <label for="">Status Date</label>
         <Inputs/>
        </div>
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
        
        <h6 class="smText">Number of Shares includes number of Treasury Shares</h6>
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
      </form>
    </div>
  )
}
