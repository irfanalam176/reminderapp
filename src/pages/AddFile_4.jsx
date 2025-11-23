import React from 'react'
import CustomHeader from '../components/CustomHeader'
import Upload from '../components/Upload'
import SignatureFormCard from '../components/SignatureFormCard'
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
       
        <p className="mainText">This is computer generated. Hence no signature required</p>
    </div>
    <div className="col-lg-6">
    <SignatureFormCard/>
    </div>
  </div>
</div>
  </div>
  )
}
