import { Checkbox, IconButton } from '@material-ui/core'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import React from 'react'
import './EmailRow.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SelectMail } from '../features/mailSlice'

function EmailRow({ id, from, subject, description, time }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const openMail = () => {
    dispatch(SelectMail({ id, from, subject, description, time }))

    navigate('/mail')
  }
  const name = from.substring(0, from.indexOf('@'))
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h4 className="emailRow__title">{name}</h4>
      <div className="emailRow__message">
        <h4>
          {subject}
          {''}
        </h4>
        <span className="emailRow__description"> - {description}</span>
      </div>

      <p className="emailRow__time">{time}</p>
    </div>
  )
}

export default EmailRow
