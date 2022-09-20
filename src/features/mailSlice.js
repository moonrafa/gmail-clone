import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sendMessageIsOpen: false
}

export const mailSlice = createSlice({
  name: 'mail',
  initialState,

  reducers: {
    OpenSendMessage: state => {
      state.sendMessageIsOpen = true
    },
    CloseSendMessage: state => {
      state.sendMessageIsOpen = false
    }
  }
})

export const { OpenSendMessage, CloseSendMessage } = mailSlice.actions

export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen

export default mailSlice.reducer
