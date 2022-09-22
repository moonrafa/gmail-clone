import React from 'react'
import { useForm } from 'react-hook-form'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import FormatColorTextIcon from '@material-ui/icons/FormatColorText'
import { CloseSendMessage } from '../features/mailSlice'
import { useDispatch } from 'react-redux'
import { db } from '../firebase'
import { timestamp } from '../firebase'

function SendMail() {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = formData => {
    db.collection('emails').add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: timestamp()
    })
    dispatch(CloseSendMessage())
  }

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h4> New Message </h4>

        <IconButton onClick={() => dispatch(CloseSendMessage())}>
          <CloseIcon className="sendMail__close" />
        </IconButton>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          autoComplete="on"
          name="to"
          placeholder="To"
          type="email"
          {...register('to', { required: true })}
        />
        {errors.to && (
          <p className="sendMail__error">
            <span>Error. </span>
            Please specify a recipient.
          </p>
        )}
        <input
          autoComplete="off"
          name="subject"
          type="text"
          placeholder="Subject"
          {...register('subject', { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">
            <span>Error. </span>
            Please type a subject.
          </p>
        )}
        <input
          autoComplete="off"
          name="message"
          placeholder="Message"
          type="text"
          className="sendMail__message"
          {...register('message', { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">
            <span>Error. </span>
            Please type a message.
          </p>
        )}
        <div className="sendMail__options">
          <Button variant="contained" type="submit">
            Send <ArrowDropDownIcon />
          </Button>
          <FormatColorTextIcon />
        </div>
      </form>
    </div>
  )
}

export default SendMail
