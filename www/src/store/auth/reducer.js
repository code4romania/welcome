// auth store
import { registerAction, Reducers, Actions, dispatch, Handlers } from '../../rxdux'
import { transformUser } from './helpers'
// actions
registerAction('AUTH_USER')
registerAction('AUTH_MESSAGE')
registerAction('SIGNIN_EMAIL_REQUESTED')
registerAction('SIGNUP_EMAIL_REQUESTED')
registerAction('SIGNOUT_REQUESTED')
registerAction('FORGOT_REQUESTED')

// handlers
// user requested signup with email and password
Handlers.requestSignup = fields => dispatch(Actions.SIGNUP_EMAIL_REQUESTED, fields)
// user requested login with email and password
Handlers.requestLogin = fields => dispatch(Actions.SIGNIN_EMAIL_REQUESTED, fields)

Handlers.requestForgot = fields => dispatch(Actions.FORGOT_REQUESTED, fields)

// user requests to signout
Handlers.requestSignout = () => dispatch(Actions.SIGNOUT_REQUESTED)

Handlers.authUser = user => dispatch(Actions.AUTH_USER, user)
// send error message to inform user
Handlers.errorUser = (error, forms) => dispatch(Actions.AUTH_MESSAGE, {...error, isError: true, forms})
// send other type of message other then error to inform user
Handlers.okUser = (okMessage, forms, type = { isOk: true }) => dispatch(Actions.AUTH_MESSAGE, { okMessage, ...type, forms })

// reducer
const initialState = {
  // loading stands for initial fetching of auth state status from Firebase
  loading: true
}

Reducers.auth = (state = initialState, action) => {
  switch (action.type) {
    case Actions.AUTH_USER:
      return {
        ...state,
        authenticated: !!action.payload,
        pending: false,
        loading: false,
        user: transformUser(action.payload),
        message: null
      }
    case Actions.AUTH_MESSAGE:
      return {
        ...state,
        pending: false,
        message: action.payload
      }
    case Actions.SIGNIN_EMAIL_REQUESTED:
    case Actions.SIGNUP_EMAIL_REQUESTED:
    case Actions.SIGNOUT_REQUESTED:
    case Actions.FORGOT_REQUESTED:
      return {
        ...state,
        pending: true,
        message: null
      }
    default:
      return state
  }
}
