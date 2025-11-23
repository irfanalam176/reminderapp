import React from 'react'
import TextArea from "./TextArea";
export default function SharHolderCardFormTables() {
  return (
    <div>
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
              <th>A Changed</th>
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
        <table>
          <thead>
            <th>Address</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <TextArea />
              </td>
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
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}
