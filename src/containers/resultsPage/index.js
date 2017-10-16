import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'
import { Button } from 'antd-mobile';
import { browserHistory } from 'react-router';
import { Link} from 'react-router';
import Header from '../../components/header'

const customIcon = src => <img src={src} className="icon" />

class ResultsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconState:'wait',
            titleState:'wait',
            descriptionState:'wait',
            buttonLink:'/'
        }
    }

    linkTo(){
        browserHistory.push('#/')
    }
    showTitle(){
        if(this.state.titleState=='wait'){
            return '审核中'
        }else if(this.state.titleState=='fail'){
            return '支付失败'
        }else if(this.state.titleState=='successPay'){
            return '支付成功'
        }else if(this.state.titleState=='successChange'){
            return '修改成功'
        }else if(this.state.titleState=='successApply'){
            return '申请成功'
        }
    }
    showDescription(){
        if(this.state.titleState=='wait'){
            return '将于1-3个工作日内审核账户信息，请耐心等待'
        }else if(this.state.titleState=='successChange'){
            return '系统奖自动退出，请重新登录'
        }else if(this.state.titleState=='successApply'){
            return '将于1-3个工作日内审核账户信息，请耐心等待'
        }
    }

    render() {
        console.log('2222', this.props.foreignExchange)

        return (
            <div className={style.wrap}>
                <Header/>
                <img src={require(`./images/${this.state.iconState}.png`)} alt="icon"/>
                <span className={style.rtitle}>
                    {this.showTitle()}
                </span>
                <p className={style.rcontent}>
                    {this.showDescription()}
                </p>
                <div className={style.but}>
                    <Link to={this.state.buttonLink}>
                        确认
                    </Link>
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

ResultsPage = connect(mapStateToProps, mapDispatchToProps)(ResultsPage)


export default ResultsPage;