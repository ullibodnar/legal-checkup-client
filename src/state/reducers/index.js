import {
  INITIAL_STATE,
  NO_BUTTON_CLICKED,
  NOT_SURE_BUTTON_CLICKED,
  YES_BUTTON_CLICKED
} from '..'

function rootReducer (state = INITIAL_STATE, { payload = {}, type }) {
  switch (type) {
    case NO_BUTTON_CLICKED:
      console.log('The no button was clicked')
      return {
        ...state
        // TODO figure out payload
      }
    case NOT_SURE_BUTTON_CLICKED:
      console.log('The not sure button was clicked')
      return {
        ...state
        // TODO figure out payload
      }
    case YES_BUTTON_CLICKED:
      console.log('The yes button was clicked')
      return {
        ...state
        // TODO figure out payload
      }
    default:
      return state
  }
}

export { rootReducer }
