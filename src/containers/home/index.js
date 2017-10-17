import React from 'react'
import style from './index.css'
import { Button } from 'antd';
import Header from '../../components/header'
import { hashHistory } from 'react-router'

class Home extends React.Component {
    speedAccound() {
        hashHistory.push('/auth')
    }

    render() {
        return (
            <div className={style.wrap}>
                <header className={style.header}>
                    <div className={style.button}>
                        <Button type="primary"  style={{width:'200',height:'60',position: 'absolute',bottom:'120', fontSize: '24px'}}>极速开户</Button>
                    </div>
                </header>
                <div className="section">
                    <div className={style.superiority}>

                        <div className={style.supcontent}>
                            <div className={style.superiority}>

                                <div className={style.supcontent}>
                                    <a href="javascript:void (0);" className={style.superiorityport}>
                                        <div className={style.suppicon}>
                                            <img src={require('./images/zizhi@3x.png')} alt=""/>
                                        </div>
                                        <div className={style.suppfont}>
                                            <div className={style.suppftitle}>
                                                资质合规
                                            </div>
                                            <div className={style.suppfcontent}>
                                                <span></span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:void (0);" className={style.superiorityport}>
                                        <div className={style.suppicon}>
                                            <img src={require('./images/shili@3x.png')} alt=""/>
                                        </div>
                                        <div className={style.suppfont}>
                                            <div className={style.suppftitle}>
                                                资质合规
                                            </div>
                                            <div className={style.suppfcontent}>
                                                <span></span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:void (0);" className={style.superiorityport}>
                                        <div className={style.suppicon}>
                                            <img src={require('./images/yongjin@3x.png')} alt=""/>
                                        </div>
                                        <div className={style.suppfont}>
                                            <div className={style.suppftitle}>
                                                资质合规
                                            </div>
                                            <div className={style.suppfcontent}>
                                                <span></span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.mt4}>
                        <div className={style.mt4title}>
                            MT4交易终端下载
                        </div>
                        <div className={style.mt4download}>
                            <a href="javascript:void (0);" className={style.mt4bg}>
                            </a>
                            <div className={style.downloadlist}>
                                <Button ghost icon="windows" style={{width:'220',height:'60', fontSize: '20',marginBottom:'30'}}>&nbsp;windows下载</Button>
                                <Button ghost icon="apple" style={{width:'220',height:'60', fontSize: '20',marginBottom:'30'}}> &nbsp;&nbsp;&nbsp;&nbsp;iOS下载&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                                <Button ghost icon="android" style={{width:'220',height:'60',fontSize: '20'}}>&nbsp;Android下载</Button>

                            </div>
                        </div>
                    </div>
                    <div className={style.partner}>
                        <div className={style.partnercon}>
                            <div className={style.pctitle}>
                                合作伙伴  /
                            </div>
                            <div className={style.pccontent}>
                                <div className={style.buddy}>
                                    <img src={require('./images/WEB-02.png')} alt=""/>

                                </div>
                                <div className={style.buddy}>
                                    <img src={require('./images/WEB-03.png')} alt=""/>

                                </div>
                                <div className={style.buddy}>
                                    <img src={require('./images/WEB-04.png')} alt=""/>

                                </div>
                                <div className={style.buddy}>
                                    <img src={require('./images/WEB-05.png')} alt=""/>

                                </div>
                                <div className={style.buddy}>
                                    <img src={require('./images/WEB-06.png')} alt=""/>

                                </div>
                                <div className={style.buddy}>
                                    <img src={require('./images/WEB-07.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home