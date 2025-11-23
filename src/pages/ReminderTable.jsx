import React,{useState} from "react";
import {Modal} from "react-bootstrap"
import { Link } from "react-router-dom";
export default function ReminderTable() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
  return (
    <div>
      <Modal show={show} onHide={handleClose} className="reminderModal" centered>
        <Modal.Body>
            <h1>You Need Reminder's Now</h1>
            <Link to="/reminder_form_1" className="mainBtn me-2">Yes</Link>
            <Link to="/" className="mainBtn odd">No</Link>
        </Modal.Body>
      </Modal>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <table className="homeTable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nextgen Bizfile</th>
                  <th>Reminders</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Assistant</td>
                  <td className="text-center">
                    <a href="/" cl>
                      <span class="material-icons">visibility</span>
                    </a>
                    <a href="/" className="ms-3">
                      <span class="material-icons">add_circle_outline</span>
                    </a>
                  </td>
                  <td className="text-center">
                    <a href="/">
                      <span class="material-icons">edit</span>
                    </a>
                    <a href="/" className="ms-3">
                      <span class="material-icons">delete</span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
