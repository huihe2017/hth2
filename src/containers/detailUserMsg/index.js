import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'
import { List,InputItem,TextareaItem} from 'antd-mobile';
import Header from '../../components/header'

class DetailUserMsg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.part}>
                    <header className={style.header}>
                        <span className={style.title}>
                            联络人信息
                        </span>
                        <span className={style.state}>
                            审核通过
                        </span>
                    </header>

                    <List >
                        <InputItem
                            value="大大飞机"
                            editable={false}
                            style={{textAlign:'right'}}
                        >姓名</InputItem>
                        <InputItem
                            value="40068686868686868"
                            editable={false}
                            style={{textAlign:'right'}}
                        >身份证号码</InputItem>
                        <InputItem
                            value="xxx@xxx.com"
                            editable={false}
                            style={{textAlign:'right'}}
                        >邮箱(选填)</InputItem>
                        <TextareaItem
                            title="住址(选填)"
                            rows={2}
                            autoHeight
                            editable={false}
                            labelNumber={5}
                            style={{textAlign:'right'}}
                            value='广东省深圳市罗湖区xx街道xx栋xx室xx'                        />
                    </List>
                </div>

                <div className={style.part}>
                    <header className={style.header}>
                        <span className={style.title}>
                            银行卡信息
                        </span>
                    </header>
                    <List >
                        <InputItem
                            value="6217********800"
                            editable={false}
                            style={{textAlign:'right'}}
                        >结算卡号</InputItem>
                        <InputItem
                            value="中国银行"
                            editable={false}
                            style={{textAlign:'right'}}
                        >银行名称</InputItem>
                        <InputItem
                            value="广东省"
                            editable={false}
                            style={{textAlign:'right'}}
                        >开户省份</InputItem>
                        <InputItem
                            value="深圳市"
                            editable={false}
                            style={{textAlign:'right'}}
                        >开户市区</InputItem>
                        <InputItem
                            value="香蜜支行"
                            editable={false}
                            style={{textAlign:'right'}}
                        >开户行</InputItem>
                    </List>
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

DetailUserMsg = connect(mapStateToProps, mapDispatchToProps)(DetailUserMsg)


export default DetailUserMsg;