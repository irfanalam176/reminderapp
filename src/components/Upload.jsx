import React from 'react'

export default function Upload() {
  return (
    <div>
    <label className="uploadFile" for="upload">
      <h1 className="mainHeading">ADD A SINGAPRE BIZEFILE</h1>
      <input type="file" id="upload"/>
      <label for="upload"><span className="material-icons">add_circle</span></label>
    </label>
    </div>
  )
}
