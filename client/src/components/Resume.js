import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import resume from './resume.pdf'

function Resume() {

  return(
    <div className="resume">
      <h1>RESUME</h1>
      <br />
      <a href={resume} download>Click to Download</a>
      <Document file={resume}>
          <Page pageNumber={1} />
      </Document>
    </div>
  )
}

export default Resume