import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
export default function ReminderSetting() {
    const notify = () => toast("Reminder Set Successfully");
  return (
    <div>
      <ToastContainer />
        <div className="container">
            <div className="row">
                <div className="col-lg-7 mx-auto py-5">
                    <h1 className="title text-center">Choose Reminder Setting</h1>
                    <form action="" className='reminderForm'>
                      <label htmlFor="">First Reminder</label>
                      <input type="date" />
                      <label htmlFor="">Second Reminder</label>
                      <input type="date" />
                      <label htmlFor="">Final Reminder</label>
                      <input type="date" />

                      <div className="buttonGroup">
                        <Link to="/" className="mainBtn odd">Back</Link>
                        <button className="mainBtn" onClick={notify} type='button'>Submit</button>
                      </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
