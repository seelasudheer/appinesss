import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk";

import {reducer} from './Reducers/index'

const store=createStore(reducer,applyMiddleware(thunk));


export default store;