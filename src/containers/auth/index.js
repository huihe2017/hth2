import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'
import {List, InputItem, Button, Picker, Toast} from 'antd-mobile';
import {login} from '../../actions/user'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import Header from '../../components/header'

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            areaCode: [86],
            picCode: '',
            picImg: this.getPicImg(),
            phone: '',
            pwd: ''
        }
    }

    getPicImg() {
        return <img onTouchEnd={(e) => {
            e.target.src = 'http://47.91.236.245:4030/user/image-captcha?tm=' + Math.random()
        }}
                    className={style.tuxing}
                    src={"http://47.91.236.245:4030/user/image-captcha?tm=" + Math.random()}/>
    }

    submitFn() {
        if(this.state.login){
            Toast.loading('登录中', 0)
            this.props.login({
                phone: this.state.areaCode + " " + this.state.phone,
                pwd: this.state.pwd,
                picCode: this.state.picCode
            }, (errorText) => {
                this.setState({picImg:this.getPicImg()})
                Toast.hide()
                if (errorText) {
                    Toast.fail(errorText, 3, null, false)
                } else {
                    hashHistory.push('/')
                }
            })
        }


    }

    render() {
        const quhao = [
            {
                value: 86,
                label: "中国大陆  +86"
            }, {
                value: 87,
                label: "中国台湾  +87"
            }, {
                value: 88,
                label: "中国香港  +88"
            },

        ]
        let show = {
            display: this.state.login ? 'none' : 'block'
        }
        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.logo}></div>
                <nav className={style.nav}>
                    <div>
                        <span id={this.state.login ? style.active : ""} onClick={this.toreg.bind(this)}>登录</span>
                    </div>
                    <div>
                        <span id={this.state.login ? "" : style.active} onClick={this.tolog.bind(this)}>注册</span>
                    </div>
                </nav>
                <section className={style.content}>
                    <div className={style.selphone}>
                        <div className={style.qh}>
                            <Picker onChange={(value) => {
                                this.setState({areaCode: value})

                            }} format={(values) => {
                                return values.join('').split(' ')[1]
                            }}  extra='+86' data={quhao} cols={1} value={'86'}>
                                <List.Item arrow="horizontal"></List.Item>
                            </Picker>
                        </div>
                        <div className={style.line}></div>
                        <div className={style.phone}>
                            <List>
                                <InputItem onChange={(value) => {
                                    this.setState({phone: value})
                                }} placeholder="请输入手机号" type="number"></InputItem>
                            </List>
                        </div>
                    </div>
                    <div className={style.selphone}>
                        <div className={style.tu}>
                            <List>
                                <InputItem onChange={(value) => {
                                    this.setState({picCode: value})
                                }} placeholder="请输入图形验证码" type="text"></InputItem>
                            </List>

                        </div>
                        {this.state.picImg}
                    </div>
                    <div className={style.selphone} style={show}>
                        <div className={style.tu}>
                            <List>
                                <InputItem placeholder="请输入验证码" type="text" extra="获取验证码"></InputItem>
                            </List>

                        </div>
                        <div className={style.lline}></div>

                    </div>
                    <div className={style.selphone}>
                        <div className={style.tu}>
                            <List>
                                <InputItem type="password"
                                           onChange={(value) => {
                                               this.setState({pwd: value})
                                           }}
                                           placeholder={this.state.login ? '请输入密码' : '请设置6-20位密码'}></InputItem>
                            </List>

                        </div>
                    </div>
                    <div className={style.button}>
                        <Button onClick={this.submitFn.bind(this)} type="primary">
                            {
                                this.state.login ? '立即登录' : '立即注册'
                            }
                        </Button>
                    </div>
                </section>
            </div>
        )

    }

    toreg() {
        this.setState({
            login: true
        })
    }

    tolog() {
        this.setState({
            login: false
        })
    }


}

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(login, dispatch)
    }
}

Auth = connect(mapStateToProps, mapDispatchToProps)(Auth)


export default Auth;