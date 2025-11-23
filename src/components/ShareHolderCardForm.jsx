import React from "react";
import ShareHolderCardFormTables from "../components/SharHolderCardFormTables"
export default function ShareHolderCardForm() {
  return (
    <div>
      <form action="" className="cardForm">
        <h1 className="title mt-5">Officers Authorised Representative(s)</h1>
        <ShareHolderCardFormTables/>
        <ShareHolderCardFormTables/>
    
        <div className="buttonGroup">
          <a href="/" className="mainBtn odd">
            Add Officer
          </a>
          <a href="/" className="mainBtn ">
            Save
          </a>
        </div>
      </form>
    </div>
  );
}
