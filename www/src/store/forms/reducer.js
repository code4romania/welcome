// forms store
import { registerAction, Reducers, Actions, Handlers, dispatch } from '../../rxdux'

// actions
registerAction('FIELDS_CHANGED')

// handlers
Handlers.changeFields = (fields) => dispatch(Actions.FIELDS_CHANGED, fields)
Handlers.changeField = ({key, value}) => dispatch(Actions.FIELDS_CHANGED, {[key]: value})
// reducer
const initialState = {}
Reducers.forms = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FIELDS_CHANGED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
