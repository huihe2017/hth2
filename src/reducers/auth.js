let initialState = {
    showLoginBox: false,
    showRegisterBox: false
}

export default function auth(state = initialState, action = {}) {

    switch (action.type) {

        case 'SHOW_LOGIN':
            state.showLoginBox = true
            state.showRegisterBox = false
            return Object.assign({}, state, {})

        case 'SHOW_REGISTER':
            state.showLoginBox = false
            state.showRegisterBox = true
            return Object.assign({}, state, {})

        case 'HIDE_AUTH':
            state.showLoginBox = false
            state.showRegisterBox = false
            return Object.assign({}, state, {})

        default:
            return state
    }

}

