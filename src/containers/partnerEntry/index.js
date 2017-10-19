import React from 'react';
import style from "./index.css"
import { Button } from 'antd'
import {hashHistory, Link} from 'react-router';
import {connect} from 'react-redux'

class PartnerEntry extends React.Component {
    constructor(props) {
        console.log(hashHistory)
        super(props);
        this.state = {

        }



    }

    render() {

        return (

            <div className={style.partnerEntry}>
                <div className={style.parenimg}>
                </div>
                <div className={style.parencon}>
                    <div className={style.lbut}>
                        <Link to="/partnerLogin">
                            <Button type="primary" ghost>已有账户，立即登录</Button>
                        </Link>
                    </div>
                    <div className={style.rbut}>
                        <Link to="/partnerReg">
                            <Button type="primary" ghost>注册成为合伙人</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

PartnerEntry = connect(mapStateToProps, mapDispatchToProps)(PartnerEntry)
export default PartnerEntry;