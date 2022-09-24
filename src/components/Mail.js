import React from 'react'
import './Mail.css'
import { Button, IconButton } from '@material-ui/core'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import KeyboardIcon from '@material-ui/icons/Keyboard'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArchiveIcon from '@material-ui/icons/Archive'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useNavigate } from 'react-router-dom'
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined'
import DeleteIcon from '@material-ui/icons/DeleteOutline'
import EmailIcon from '@material-ui/icons/MailOutline'
import WatchLaterIcon from '@material-ui/icons/Schedule'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import BookmarkIcon from '@material-ui/icons/LabelOutlined'
import PrintIcon from '@material-ui/icons/Print'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import TurnLeftIcon from '@material-ui/icons/Redo'
import { useSelector } from 'react-redux'
import { selectOpenMail } from '../features/mailSlice'

function Mail() {
  const navigate = useNavigate()
  const selectedMail = useSelector(selectOpenMail)
  const name = selectedMail.from.substring(0, selectedMail.from.indexOf('@'))
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton className="mr-1" onClick={() => navigate('/')}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <ArchiveIcon />
          </IconButton>

          <IconButton>
            <ReportOutlinedIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon className="mr-2 br-1" />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <img
              src="https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/add_task/default/20px.svg"
              alt="add task"
              className="mr-2 br-1"
            />
          </IconButton>

          <IconButton>
            <img
              src="https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/drive_file_move/default/20px.svg"
              alt="move to folder"
            />
          </IconButton>
          <IconButton>
            <BookmarkIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <span>1 of 851</span>
          <IconButton>
            <ArrowLeftIcon />
          </IconButton>
          <IconButton>
            <ArrowRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>

          <IconButton>
            <ArrowDropDownIcon className="ml-n" />
          </IconButton>
        </div>
      </div>
      <div className="mail__content">
        <div className="mail__title">
          <div className="flex">
            <p>{selectedMail?.subject}</p>
            <IconButton>
              <LabelImportantIcon className="mail__important" />
            </IconButton>
            <span>
              Inbox <span>{''} x</span>
            </span>
          </div>
          <div>
            <IconButton>
              <PrintIcon className="print" />
            </IconButton>
            <IconButton>
              <OpenInNewIcon className="newWindow" />
            </IconButton>
          </div>
        </div>
        <div className="mail__body">
          <div className="mail__body__header">
            <div className="mail__body__headerLeft">
              <h4> {name} </h4>
              <span> &lt;{selectedMail?.from}&gt; </span>
            </div>
            <div className="mail__body__headerRight">
              <p>{selectedMail?.time}</p>
              <IconButton>
                <StarOutlineIcon />
              </IconButton>
              <IconButton>
                <TurnLeftIcon className="reply" />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
          <div className="mail__message">{selectedMail?.description}</div>
          <div className="mail__buttons">
            <Button
              startIcon={<TurnLeftIcon className="reply" fontSize="large" />}
            >
              Reply
            </Button>
            <Button startIcon={<TurnLeftIcon fontSize="large" />}>
              Forward
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mail
