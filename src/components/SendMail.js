import React from 'react'
import './SendMail.css'
import MinimizeIcon from '@material-ui/icons/Minimize'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import FormatColorTextIcon from '@material-ui/icons/FormatColorText'

function SendMail() {
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h4> New Message </h4>
        <MinimizeIcon className="sendMail__minimize" />
        <CloseIcon className="sendMail__close" />
      </div>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
      <div className="sendMail__options">
        <Button>
          Send <ArrowDropDownIcon />
        </Button>
        <FormatColorTextIcon />
      </div>
    </div>
  )
}

export default SendMail
