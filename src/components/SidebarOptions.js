import React from 'react'
import './SidebarOptions.css'

function SidebarOptions({ Icon, title, number, selected }) {
  return (
    <div className={`sidebarOptions ${selected && 'sidebar--active'}`}>
      <Icon className="icon" />
      <p className="title"> {title} </p>
      <p className="number">{number} </p>
    </div>
  )
}

export default SidebarOptions
