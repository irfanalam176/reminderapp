import React from 'react'
import AddFile_1 from "./AddFile_1"
import AddFile_2 from "./AddFile_2"
import AddFile_3 from "./AddFile_3"
import AddFile_4 from "./AddFile_4"
import { Route,Routes } from 'react-router-dom'
export default function AddFile() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AddFile_1/>}/>
        <Route path="/addfile_2" element={<AddFile_2/>}/>
        <Route path="/addfile_3" element={<AddFile_3/>}/>
        <Route path="/addfile_4" element={<AddFile_4/>}/>
      </Routes>
    </div>
  )
}
