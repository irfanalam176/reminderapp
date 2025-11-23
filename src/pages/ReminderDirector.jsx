import React from 'react'
import { Link } from 'react-router-dom'
export default function ReminderDirector() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-lg-9 mx-auto py-5">
                    <h1 className="title text-center">Choose Director/Shareholders</h1>
                    <form action="" className='reminderForm'>
                        <div className="row">
                            <div className="col-lg-4">
                                <label htmlFor="">Name(Shareholder)</label>
                                <input type="text" />
                                <label htmlFor="">Name(Shareholder)</label>
                                <input type="text" />
                                <label htmlFor="">Name(Officers)</label>
                                <input type="text" />
                                <label htmlFor="">Name(Officers)</label>
                                <input type="text" />
                                <label htmlFor="">Name(Officers)</label>
                                <input type="text" />
                            </div>
                            <div className="col-lg-4">
                            <label htmlFor="">Email</label>
                            <input type="email" />
                            <label htmlFor="">Email</label>
                            <input type="email" />
                            <label htmlFor="">Email</label>
                            <input type="email" />
                            <label htmlFor="">Email</label>
                            <input type="email" />
                            <label htmlFor="">Email</label>
                            <input type="email" />
                            </div>
                            <div className="col-lg-4">
                            <label htmlFor="">Phone Number</label>
                            <input type="email" />
                            <label htmlFor="">Phone Number</label>
                            <input type="email" />
                            <label htmlFor="">Phone Number</label>
                            <input type="email" />
                            <label htmlFor="">Phone Number</label>
                            <input type="email" />
                            <label htmlFor="">Phone Number</label>
                            <input type="email" />
                            </div>
                            <div className="col-lg-4"><Link to="/" className="mainBtn w-100 d-block text-center">Add More People</Link></div>
                            <div className="col-lg-4 my-2 m-lg-0"><Link to="/" className="mainBtn w-100 d-block text-center odd">Back</Link></div>
                            <div className="col-lg-4"><Link to="/reminder_setting" className="mainBtn w-100 d-block text-center">Next</Link></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
