import { combineReducers } from 'redux'


import i18n from './i18n'
import sendContact from './send-contact'
import socialList from './social-list'


const rootReducer = combineReducers({
  i18n,
  sendContact,
  socialList,
})


export default rootReducer
