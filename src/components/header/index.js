import React from 'react';
import HeaderR from './headerView'
import style from "./index.css"
import {hashHistory} from 'react-router';
import axios from "axios"

class TitValueBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 'relative',
            otherStyle: true,
            isShowReg: false,
            isShowLogin: false,
            isShowSideBar: false,
            isShowFind: false,
            isLogin: localStorage.userName === 'null' ? false : localStorage.userName
        }
        this.hideLogin = this.hideLogin.bind(this)
        this.hideReg = this.hideReg.bind(this)
        this.toggle = this.toggle.bind(this)
        this.hideSideBar = this.hideSideBar.bind(this)
        this.showSideBar = this.showSideBar.bind(this)
        this.choceType = this.choceType.bind(this)

    }

    login() {
        this.state.isLogin = true
        this.state.isShowReg = false
        this.state.isShowLogin = false
        this.state.isShowFind = false

        this.setState({
            state: this.state
        })
    }

    signOut() {
        // let _this = this
        // axios.post('http://47.91.236.245:8000/user/customer/sign-out', {
        //     token: localStorage.token,
        //     agent: 'web'
        // }).then(function (response) {
        //     if (response.data.code === 0) {
        //         localStorage.userName = null
        //         _this.setState({
        //             isLogin: false
        //         }, () => {
        //
        //         })
        //     }
        // }).catch(function (error) {
        //     console.log(error);
        // });
        let _this = this
        localStorage.userName = null
        _this.setState({
            isLogin: false
        }, () => {

        })
    }

    hideLogin() {
        this.setState({isShowLogin: false}, () => {
        })
    }

    hideReg() {
        this.setState({isShowReg: false}, () => {
        })
    }

    hideFind() {
        this.setState({isShowFind: false}, () => {
        })
    }

    toggle(flag) {

        let state = this.state
        state.isShowLogin = flag
        state.isShowReg = !flag
        this.setState({state: state});
    }

    ftoggle(flag) {
        console.log(this.state)
        let state = this.state
        state.isShowLogin = flag
        state.isShowFind = !flag
        this.setState({state: state});
    }

    hideSideBar() {
        this.setState({isShowSideBar: false});
    }

    showSideBar() {
        this.setState({isShowSideBar: true});
    }

    componentWillReceiveProps() {
        this.setState({isShowSideBar: false})

        if (window.location.hash.substr(1).indexOf('/?') !== -1) {
            this.setState({position: 'relative'})
            this.setState({otherStyle: true})
            window.onscroll = null
            return true
        } else {
            if (!window.onscroll) {
                this.choceType()
                return true
            }
        }
        return true
    }

    componentWillMount() {
        this.choceType()

    }

    choceType() {
        if (window.location.hash.substr(1).indexOf('/?') !== -1) {
            this.setState({position: 'absolute'})
            this.setState({otherStyle: false})
            let dance = document.body.clientWidth * 0.46
            let danceCopy = dance
            window.onscroll = null
            window.onscroll = (e) => {
                //console.log(document.body.scrollTop)
                var oTop = document.body.scrollTop == 0 ? document.documentElement.scrollTop : document.body.scrollTop;

                if (oTop < danceCopy) {
                    this.setState({position: 'absolute'})
                    this.setState({otherStyle: false})
                    return false
                }

                if (oTop - dance < 0) {
                    this.setState({position: 'fixed'})
                    this.setState({otherStyle: true})
                } else {
                    this.setState({position: 'absolute'})
                    this.setState({otherStyle: false})
                }
                dance = oTop
            }
        }
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <HeaderR login={this.login.bind(this)} signOut={this.signOut.bind(this)} {...this.state}
                     hideLogin={this.hideLogin} hideReg={this.hideReg} hideFind={this.hideFind.bind(this)}
                     toggle={this.toggle} ftoggle={this.ftoggle.bind(this)}
                     hideSideBar={this.hideSideBar} showSideBar={this.showSideBar}

            />
        )
    }
}

export default TitValueBox;