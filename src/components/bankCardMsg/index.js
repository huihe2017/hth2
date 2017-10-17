import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import { List,InputItem,WingBlank,Button,ImagePicker,Picker} from "antd-mobile"
import { Uploader,UploadField } from '@navjobs/upload'

const data = [
];
const bank=[
    {
        value: 0,
        label: '中国银行'
    },
    {
        value: 1,
        label: '工商银行'
    },{
        value: 2,
        label: '建设银行'
    },{
        value: 3,
        label: '农业银行'
    }
]
const sheng=[
    {
        value: 0,
        label: '山西'
    },
    {
        value: 1,
        label: '陕西'
    },{
        value: 2,
        label: '广东'
    },{
        value: 3,
        label: '广西'
    }
]
const city=[
    {
        value: 0,
        label: '西安'
    },
    {
        value: 1,
        label: '咸阳'
    },{
        value: 2,
        label: '深圳'
    },{
        value: 3,
        label: '上海'
    }
]

class BankCardMsg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: data,
            upImg:true
        }
    }

    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,

        });
    }
    submitFn(){
        hashHistory.push('/resultsPage')
    }
    render() {
        const { files } = this.state;
        console.log('2222', this.props.foreignExchange)
        return (
            <div className={style.wrap}>
                <div >
                    <div className={style.selimggrp}>
                        {/*<ImagePicker*/}
                            {/*files={files}*/}
                            {/*onChange={this.onChange}*/}
                            {/*onImageClick={(index, fs) => console.log(index, fs)}*/}
                            {/*selectable={files.length < 1}*/}
                        {/*/>*/}
                        <div>
                            <Uploader
                                request={{
                                    fileName: 'file',
                                    url: 'https://upload.com',
                                    method: 'POST',
                                    fields: {
                                        //extra fields to pass with the request
                                        full_name: 'Testing extra fields',
                                    },
                                    headers: {
                                        //custom headers to send along
                                        Authorization: 'Bearer: Test',
                                    },
                                    // use credentials for cross-site requests
                                    withCredentials: false,
                                }}
                                onComplete={({ response, status }) => {}}
                                //upload on file selection, otherwise use `startUpload`
                                uploadOnSelection={true}
                            >
                                {({ onFiles, progress, complete }) => (
                                    <div>
                                        <UploadField onFiles={onFiles}>
                                            <div className={style.selimg}>
                                                {this.state.upImg? <img src={require('../../containers/home/images/mt4.png')} alt=""/> : <span className={style.filetext}>点击上传银行卡正面</span>}
                                            </div>
                                        </UploadField>
                                        {progress ? `Progress: ${progress}` : null}
                                        {complete ? 'Complete!' : null}
                                    </div>
                                )}
                            </Uploader>
                        </div>
                    </div>
                </div>
                <List >
                    <InputItem
                        placeholder="输入银行卡号"
                        type="number"
                        style={{textAlign:"right"}}
                    >结算卡号</InputItem>
                    <Picker data={bank} cols={1} className="forss" onOk={() => this.setState({ visible: false })}
                            onDismiss={() => this.setState({ visible: false })}>
                        <List.Item arrow="horizontal">银行名称</List.Item>
                    </Picker>
                    <Picker data={sheng} cols={1} className="forss" onOk={() => this.setState({ visible: false })}
                            onDismiss={() => this.setState({ visible: false })}>
                        <List.Item arrow="horizontal">开户省份</List.Item>
                    </Picker>
                    <Picker data={city} cols={1} className="forss" onOk={() => this.setState({ visible: false })}
                            onDismiss={() => this.setState({ visible: false })}>
                        <List.Item arrow="horizontal">开户市区</List.Item>
                    </Picker>
                    <InputItem
                        type="text"
                        placeholder="输入开户行"
                        style={{textAlign:"right"}}
                    >开户行</InputItem>

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
    return {}
}

BankCardMsg = connect(mapStateToProps, mapDispatchToProps)(BankCardMsg)


export default BankCardMsg;