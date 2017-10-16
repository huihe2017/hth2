import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'
import { List,InputItem,Button,WingBlank} from 'antd-mobile';
import Header from '../../components/header'

class BaseUserMsg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.part}>
                    <List>
                        <InputItem
                            placeholder="大大飞机"

                            style={{textAlign:'right'}}
                        >设置昵称</InputItem>
                    </List>
                </div>
                <div className={style.part}>
                    <List>
                        <InputItem
                            value="6217**********800"
                            editable={false}
                            style={{textAlign:'right'}}
                        >出金账户</InputItem>
                        <InputItem
                            value="86 1888888888"
                            editable={false}
                            style={{textAlign:'right'}}
                        >绑定手机号</InputItem>
                        <InputItem
                            value="6666668888"
                            editable={false}
                            style={{textAlign:'right'}}
                        >MT4账号</InputItem>
                    </List>
                </div>

                <div className={style.part}>
                    <List >
                        <InputItem
                            value="$888"
                            editable={false}
                            style={{textAlign:'right'}}
                        >浮动盈亏</InputItem>
                        <InputItem
                            value="$888"
                            editable={false}
                            style={{textAlign:'right'}}
                        >净值</InputItem>
                        <InputItem
                            value="$100"
                            editable={false}
                            style={{textAlign:'right'}}
                        >余额</InputItem>
                    </List>
                </div>
                <div >
                    <a className={style.ensure} href="javascript:void(0)">
                        退出登录
                    </a>
                </div>

            </div>
        )

    }


}

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

BaseUserMsg = connect(mapStateToProps, mapDispatchToProps)(BaseUserMsg)


export default BaseUserMsg;