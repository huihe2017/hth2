import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'
import {List, InputItem, WingBlank, Button, ImagePicker, TextareaItem} from "antd-mobile"
import {getAccountStep} from '../../actions/foreignExchange'
import {bindActionCreators} from 'redux'
import Fileupload from 'react-fileupload'
import { Uploader,UploadField } from '@navjobs/upload'

const data1 = [];
const data2 = [];

class PersonalMsg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files1: data1,
            files2: data2,
            upImg:true
        }
    }

    onChange1 = (files, type, index) => {
        console.log(files, type, index);
        console.log(this.state)
        this.setState({
            files1: files
        });
    }
    onChange2 = (files, type, index) => {
        console.log(files, type, index);
        console.log(this.state, 111)
        this.setState({
            files2: files
        });
    }

    submitFn() {

        this.props.getAccountStep(2)

    }

    render() {

        return (
            <div className={style.wrap}>
                <div className={style.selimggrp}>
                    {/*<div className={style.img}>*/}
                        {/*<ImagePicker*/}
                            {/*files={this.state.files1}*/}
                            {/*onChange={this.onChange1}*/}
                            {/*onImageClick={(index, fs) => console.log(index, fs)}*/}
                            {/*selectable={this.state.files1.length < 1}*/}
                        {/*/>*/}
                    {/*</div>*/}
                    {/*<div className={style.img}>*/}
                        {/*<ImagePicker*/}
                            {/*files={this.state.files2}*/}
                            {/*onChange={this.onChange2}*/}
                            {/*onImageClick={(index, fs) => console.log(index, fs)}*/}
                            {/*selectable={this.state.files2.length < 1}*/}
                        {/*/>*/}
                    {/*</div>*/}

                    {/*<div>*/}
                        {/*<Fileupload options={{*/}
                            {/*baseUrl: '/node/api',*/}
                            {/*param: {*/}
                                {/*_c: 'file',*/}
                                {/*_a: 'UploadFile'*/}
                            {/*},*/}
                            {/*multiple: true,*/}
                            {/*numberLimit: ()=>{},*/}
                            {/*accept: 'image/*',*/}
                            {/*fileFieldName(file) {*/}
                                {/*return file.rawID*/}
                            {/*},*/}
                            {/*chooseAndUpload: true,*/}
                            {/*wrapperDisplay: 'block',*/}
                            {/*beforeUpload: ()=>{},*/}
                            {/*uploading: ()=>{},*/}
                            {/*uploadSuccess: ()=>{},*/}
                            {/*uploadFail: ()=>{},*/}
                            {/*uploadError: ()=>{}*/}
                        {/*}}>*/}
                            {/*<button >wtew</button>*/}
                        {/*</Fileupload>*/}
                    {/*</div>*/}

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
                                            {this.state.upImg? <img src={require('../../containers/home/images/mt4.png')} alt=""/> : <span className={style.filetext}>点击上传身份证人像面</span>}
                                            </div>
                                    </UploadField>
                                    {progress ? `Progress: ${progress}` : null}
                                    {complete ? 'Complete!' : null}
                                </div>
                            )}
                        </Uploader>
                    </div>
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
                                            {this.state.upImg? <img src={require('../../containers/home/images/mt4.png')} alt=""/> : <span className={style.filetext}>点击上传身份证国徽面</span>}
                                        </div>
                                    </UploadField>
                                    {progress ? `Progress: ${progress}` : null}
                                    {complete ? 'Complete!' : null}
                                </div>
                            )}
                        </Uploader>
                    </div>
                </div>
                <List>
                    <InputItem
                        placeholder="输入需与身份证一致"
                        type="text"
                        style={{textAlign: "right"}}
                    >姓名</InputItem>
                    <InputItem
                        placeholder="输入15位或18位身份证号"
                        type="number"
                        style={{textAlign: "right"}}
                    >身份证号码</InputItem>
                    <InputItem
                        type="text"
                        placeholder="输入邮箱"
                        style={{textAlign: "right"}}
                    >邮箱(选填)</InputItem>
                    <TextareaItem
                        placeholder="输入需与身份证住址一致"
                        title="住址(选填)"
                        autoHeight
                        labelNumber={5}
                        style={{textAlign: "right"}}
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

PersonalMsg = connect(mapStateToProps, mapDispatchToProps)(PersonalMsg)


export default PersonalMsg;