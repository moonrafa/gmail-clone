import { Checkbox, IconButton } from '@material-ui/core'
import RefreshIcon from '@material-ui/icons/Refresh'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import React, { useEffect, useState } from 'react'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import KeyboardIcon from '@material-ui/icons/Keyboard'
import './EmailList.css'
import EmailSection from './EmailSection'
import InboxIcon from '@material-ui/icons/Inbox'
import SellIcon from '@material-ui/icons/LocalOffer'
import PeopleIcon from '@material-ui/icons/People'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import ForumIcon from '@material-ui/icons/Forum'
import EmailRow from './EmailRow'
import { db } from '../firebase'

function EmailList() {
  const [emails, setEmails] = useState([])

  useEffect(() => {
    db.collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot =>
        setEmails(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
      )
  }, [])
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <span>1-50 of 851</span>
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
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <EmailSection Icon={InboxIcon} title="Primary" selected={true} />
        <EmailSection Icon={SellIcon} title="Promotions" />
        <EmailSection Icon={PeopleIcon} title="Social" />
        <EmailSection Icon={ErrorOutlineIcon} title="Updates" />
        <EmailSection Icon={ForumIcon} title="Forums" />
      </div>
      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            from={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toLocaleTimeString(
              'en-US',
              { hour: 'numeric', minute: 'numeric', hour12: true }
            )}
          />
        ))}
        {/* <EmailRow
          from="Nubank"
          subject="Pagamento de fatura realizado com sucesso"
          description="Fatura paga com sucesso Fatura paga com sucesso... "
          time="12:39 PM"
        />
        <EmailRow
          from="Nubank"
          subject="Pagamento de fatura realizado com sucesso"
          description="Fatura paga com sucesso Fatura paga com sucesso... "
          time="12:39 PM"
        /> */}
      </div>
    </div>
  )
}

export default EmailList
