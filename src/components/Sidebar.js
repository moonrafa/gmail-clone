import React from 'react'
import './Sidebar.css'
import CreateIcon from '@material-ui/icons/Create'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import { Button, IconButton } from '@material-ui/core'
import SidebarOptions from './SidebarOptions'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import ScheduleIcon from '@material-ui/icons/Schedule'
import SendIcon from '@material-ui/icons/Send'
import DescriptionIcon from '@material-ui/icons/Description'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<CreateIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarOptions
        Icon={InboxIcon}
        title="Inbox"
        number={133}
        selected={true}
      />
      <SidebarOptions Icon={StarOutlineIcon} title="Starred" number={20} />
      <SidebarOptions Icon={ScheduleIcon} title="Snoozed" number={2} />
      <SidebarOptions Icon={SendIcon} title="Sent" number={100} />
      <SidebarOptions Icon={DescriptionIcon} title="Drafts" number={19} />
      <SidebarOptions Icon={KeyboardArrowDownIcon} title="More" />

      <div className="sidebar__footer">
        <div className="label">
          <span>Labels</span>
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>

        <SidebarOptions Icon={BookmarkIcon} title="Unroll.me" />
      </div>
    </div>
  )
}

export default Sidebar
