import React from 'react'
import TextArea from './TextArea'
export default function AuditTables() {
  return (
    <div className="autidTables">
    <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>ID</th>
      <th>Citizenship</th>
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
      <td>
        <input type="text" />
      </td>
    </tr>
  </tbody>
</table>
<table>
  <thead>
    <tr>
      <th>Source Address</th>
      <th>Appointment</th>
      <th>Position Held</th>
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
      <td>
        <input type="text" />
      </td>
    </tr>
  </tbody>
</table>
<table>
    <thead><th>Address</th></thead>
    <tbody><tr><td><TextArea/></td></tr></tbody>
</table>
    </div>
  )
}
