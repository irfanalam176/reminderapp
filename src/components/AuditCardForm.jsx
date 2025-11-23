import React from "react";
import AuditTables from "../components/AuditTables"
export default function CardForm() {
  return (
    <div>
      <form action="" className="cardForm">
      <h1 className="title mt-5">Officers Authorised Representative(s)</h1>
       <AuditTables/>
       <AuditTables/>
       <AuditTables/>

       <div className="buttonGroup">
        <a href="" className="mainBtn odd">Add Officer</a>
        <a href="" className="mainBtn ">Save</a>
       </div>
      </form>
    </div>
  );
}
