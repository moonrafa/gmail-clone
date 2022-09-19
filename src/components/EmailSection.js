import React from 'react'
import './EmailSection.css'

function EmailSection({ Icon, title, selected }) {
  return (
    <div className={`emailSection ${selected && 'emailSection--selected'}`}>
      <Icon />
      <span> {title} </span>
      <div className="border-blue"></div>
    </div>
  )
}

export default EmailSection
