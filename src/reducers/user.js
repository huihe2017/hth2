let initialState = {
    token: false,
    userName: ''
}

export default function sign(state = initialState, action = {}) {

    switch (action.type) {

        case 'LOGIN':
            const {phone} = action.data
            state.phone = phone
            state.token = true
            return Object.assign({}, state, {})

        case 'HIDE_SIGN':
            return Object.assign({}, state, {
                show: false
            })

        default:
            return state
    }

}

export function getSignStatus(state) {
    return state.sign.show
}
