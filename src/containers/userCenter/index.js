import React from 'react';
import style from  "./index.css"
import { Input,Form,Tabs  } from 'antd'

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const userData={
    portrait: 'http://img1.tgbusdata.cn/v2/thumb/jpg/NkRCMiw2NDAsMTAwLDQsMywxLC0xLDAscms1MA==/u/wow.tgbus.com/UploadFiles_2396/201605/20160530094443812.jpg',
    userName: '水色丹青',
    phone: ['86', '13725565878'],
    MT4user: 6666666,
    floating: 44,
    status:0,
    worth: 33,
    balance: 444,
    dynamics:[
        {
            state:'complete',
            content:'完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成'
        },
        {
            state:'unComplete',
            content:'未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成'
        },
        {
            state:'waiting',
            content:'等待完成等待完成等待完成等待完等待完成等待完成等待完成等待完成等待完成等待完成等待完成等待完成成'
        },
        {
            state:'news',
            content:'新闻动态新闻动态新闻动态新闻动态'
        }
    ],
}

class userCenterHeadView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShow:false,

        }
    }
    // getTime(e){
    //     let now=new Date(e);
    //     return   [now.getFullYear(),now.getMonth()+1,now.getDate()].join("-")+" "+[now.getHours(),now.getMinutes()].join(":");
    // }
    showdata(e){
        if(e.length==0){
            return (
                <img src={require('./images/none.png')} alt="" className={style.none}/>
            )
        }else {
        }

    }
    change(vaildMsg, name) {
        // console.log(vaildMsg)
        // userData.change(vaildMsg,name)
    }
    submitFn() {
        // userData.submitFn()
    }
    redact(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render(){
        let imgurl= "";

        return(
            <div className={style.user}>
                <div className={style.userCenterHead}>
                    <div className={style.userCHl}>
                        <span className={style.userCHlt}>
                            基本资料
                        </span>
                        <div className={style.userchvheader}>
                            <a href="javascript:void (0);" onClick={this.redact.bind(this)} className={style.redact}>
                                <span hidden={!this.state.isShow}>编辑信息</span>
                                <span hidden={this.state.isShow} onClick={this.submitFn.bind(this)}>保存信息</span>
                            </a>
                            <div className={style.avatar}>
                                <img src={userData.portrait?userData.portrait:require('./images/none.png')} alt=""/>
                                <div className={style.shade} hidden={this.state.isShow}>
                                    <input type="file" className={style.file}/>
                                    点击上传
                                </div>
                            </div>

                            <div className={style.userhc}>
                                <div className={style.userhch} hidden={!this.state.isShow}>
                                    <div className={style.username}>
                                        {userData.userName}
                                    </div>
                                    <div className={style.userphone}>
                                        {
                                            userData.phone.map((v)=>{
                                                return (
                                                    <span>{v}&nbsp;</span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className={style.userhcc} hidden={!this.state.isShow}>
                                    <div>
                                        出金绑定银行卡：
                                        <a href="javascript:void (0);">去绑定</a>
                                    </div>
                                    <div>
                                        MT4平台账号：{userData.MT4user}
                                    </div>
                                </div>
                                <div className={style.userr} hidden={this.state.isShow}>
                                    <span className={style.nicktext}>
                                        ID昵称，限制8个中文字符，其他字符限制12个
                                    </span>
                                    <Form layout="inline">
                                        <FormItem>
                                    <Input style={{width:300,lineHeight:40,height:40,paddingLeft:12,fontSize:16}} value={userData.userName}/>
                                        </FormItem>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className={style.userchvfooter}>
                            <div className={style.floating}>
                                <div className={style.money}>
                                    ${userData.floating}
                                </div>
                                <div className={style.top}>
                                    浮动盈亏
                                </div>
                            </div>
                            <div className={style.worth}>
                                <div className={style.money}>
                                    ${userData.worth}
                                </div>
                                <div className={style.top}>
                                    净值
                                </div>
                            </div>
                            <div className={style.balance}>
                                <div className={style.mone}>
                                    ${userData.balance}
                                </div>
                                <div className={style.to}>
                                    余额
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.userCHr}>
                       <span className={style.userCHlt}>
                            一月内资讯记录
                        </span>
                        <div className={style.userCHrc}>
                            {
                                userData.dynamics.length==0?(
                                    <img src={require('./images/none.png')} alt="" className={style.none}/>
                                ):(userData.dynamics.map((v)=>{
                                    return (
                                        <div className={style.item+" "+style.clearfloat}>
                                            <div className={style.state}>
                                                <img src={require(`./images/${v.state}.png`)} alt=""/>
                                            </div>
                                            <span>
                            {v.content}
                        </span>
                                        </div>
                                    )
                                }))
                            }
                        </div>
                    </div>
                </div>
                <div className={style.cardcontainer}>
                    <Tabs type="card">
                        <TabPane tab="Tab Title 1" key="1">
                            <p>Content of Tab Pane 1</p>
                            <p>Content of Tab Pane 1</p>
                            <p>Content of Tab Pane 1</p>
                        </TabPane>
                        <TabPane tab="Tab Title 2" key="2">
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                        </TabPane>
                        <TabPane tab="Tab Title 3" key="3">
                            <p>Content of Tab Pane 3</p>
                            <p>Content of Tab Pane 3</p>
                            <p>Content of Tab Pane 3</p>
                        </TabPane>
                    </Tabs>
                </div>
            </div>

        )
    }
}
export default userCenterHeadView;