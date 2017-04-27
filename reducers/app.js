import {OPEN_HOME_SCREEN} from './../actions/app'

export default function appReducer(state = {}, action) {
  switch (action.type) {
    case OPEN_HOME_SCREEN:
      return {
        ...state
      }
  }
  return state
}