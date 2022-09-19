import { Checkbox, IconButton } from '@material-ui/core'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import React from 'react'
import './EmailRow.css'

function EmailRow({ id, from, subject, description, time }) {
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h4 className="emailRow__title">{from}</h4>
      <div className="emailRow__message">
        <h4>{subject}</h4>
        <span className="emailRow__description"> - {description}</span>
      </div>

      <p className="emailRow__time">{time}</p>
    </div>
  )
}

export default EmailRow
