import {combineReducers} from 'redux'

import {login} from './login'
import {employeeList} from './Employee'
export const reducer=combineReducers({login,employeeList})

