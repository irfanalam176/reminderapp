import React,{useState} from 'react'
import { Link } from 'react-router-dom';
export default function ReminderForm_1() {
  const[eci,setEci]=useState(false)
  console.log(eci);
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mx-auto">
              <div className="py-5">
              <form action="" className='reminderForm'>
                <h1 className="title">Choose Service To Remind</h1>
                <div className='chkBox'>
                  <label htmlFor="eci">ECI and CIT Filling</label>
                  <input type="checkbox" id='eci' onChange={()=>setEci(!eci)}/>
                </div>
                <div className='chkBox'>
                  <label htmlFor="anuallFilling">Anual Filling</label>
                  <input type="checkbox" id='anuallFilling'/>
                </div>

                <div className={`dateContainer mt-5 ${!eci&&"d-none"}`}>
                  <label htmlFor="eciDate">What is Your ECI and CIT Filling Date</label>
                  <input type="date" id='eciDate'/>
                </div>
                <div className="text-center mt-5"><Link to="/reminder_director" className="mainBtn">Next</Link></div>
              </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
