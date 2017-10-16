import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'
import { List,InputItem,WingBlank,Button,Toast} from "antd-mobile"
import { getAccountStep } from '../../actions/foreignExchange'
import { bindActionCreators } from 'redux'

class PhoneConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code:''
        }
    }
    submitFn(){
        if(!this.state.code){
            Toast.fail("请输入验证码", 3, null, false)
            return false
        }
        this.props.getAccountStep(1)

    }
    render() {
        console.log('2222', this.props.foreignExchange)
        return (
            <div className={style.wrap}>
                <List >
                    <InputItem
                        placeholder="186****1866"
                        editable={false}
                        style={{textAlign:"right"}}
                    >绑定手机号</InputItem>
                    <InputItem
                        extra="获取验证码"
                        placeholder="输入验证码"
                        value={this.state.code}
                        onChange={(value)=>{this.setState({code:value})}}
                    />
                </List>
                <div className={style.button}>
                    <WingBlank size="lg">
                        <Button onClick={this.submitFn.bind(this)} type="primary">下一步</Button>
                    </WingBlank>
                </div>
            </div>
        )

    }
}

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        getAccountStep: bindActionCreators(getAccountStep, dispatch)

    }
}

PhoneConfirm = connect(mapStateToProps, mapDispatchToProps)(PhoneConfirm)


export default PhoneConfirm;