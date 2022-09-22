import React from 'react'
import { useForm } from 'react-hook-form'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import FormatColorTextIcon from '@material-ui/icons/FormatColorText'

function SendMail() {
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h4> New Message </h4>

        <IconButton>
          <CloseIcon className="sendMail__close" />
        </IconButton>
      </div>
      <form>
        <input placeholder="To" type="text" />
        <input type="text" placeholder="Subject" />
        <input
          placeholder="Message"
          type="text"
          className="sendMail__message"
        />
      </form>
      <div className="sendMail__options">
        <Button variant="contained" type="submit">
          Send <ArrowDropDownIcon />
        </Button>
        <FormatColorTextIcon />
      </div>
    </div>
  )
}

export default SendMail
