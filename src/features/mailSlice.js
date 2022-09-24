import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedMail: null,
  sendMessageIsOpen: false
}

export const mailSlice = createSlice({
  name: 'mail',
  initialState,

  reducers: {
    SelectMail: (state, action) => {
      state.selectedMail = action.payload
    },
    OpenSendMessage: state => {
      state.sendMessageIsOpen = true
    },
    CloseSendMessage: state => {
      state.sendMessageIsOpen = false
    }
  }
})

export const { SelectMail, OpenSendMessage, CloseSendMessage } =
  mailSlice.actions

export const selectOpenMail = state => state.mail.selectedMail
export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen

export default mailSlice.reducer
