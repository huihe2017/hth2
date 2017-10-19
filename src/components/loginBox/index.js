import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'


class LoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className={style.wrap}>

            </div>
        )

    }
}

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

LoginBox = connect(mapStateToProps, mapDispatchToProps)(LoginBox)


export default LoginBox;