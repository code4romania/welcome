import './router'
import './auth'
import './toastr'
import './forms'
import './logger'
import { store$ as store, Handlers } from '../rxdux'

export const store$ = store
export const handlers = Handlers
