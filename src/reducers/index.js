import {combineReducers} from 'redux'

import merge from 'lodash/merge'

import sign from './sign'
import foreignExchange from './foreignExchange'
import user from './user'

let states = {
    sign,
    foreignExchange,
    user
}

let _states = {}

for (let i in states) {
    _states[i] = states[i]()
}


export default combineReducers(states)

export const getInitialState = () => {
    return merge({}, _states, {})
}
