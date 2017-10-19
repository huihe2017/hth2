import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'
import { Modal,Input,Select,Form,AutoComplete,Button } from 'antd';

const confirm = Modal.info;
const FormItem = Form.Item;
const Option = Select.Option;
const qh=[{
    value:["中国大陆","+86"],
    key:1
}, {
    value:["中国香港","+886"],
    key:2
}, {
    value:["中国台湾","+853"],
    key:3,

}];

function handleChange(value) {
    console.log(`selected ${value}`);
}

class LoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
    }


    hideModal = () => {
        this.setState({
            visible: false,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }



    render() {
        const { getFieldDecorator} = this.props.form;

        return (
            <div className={style.wrap}>
                <Modal
                    visible={this.state.visible}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"
                    width="520"
                >
                    <Form onSubmit={this.handleSubmit}>
                        <div className={style.content}>
                        <span className={style.llctitle}>
                            欢迎来到海豚汇，请登录
                        </span>
                        <div className={style.perselphone}>
                            <div className={style.selphone}>
                                <div className={style.qh}>
                                    <Select defaultValue="+86" size={'large'} style={{ width: 80,height:40,lineHeight:40,}} onChange={handleChange} dropdownStyle={{width:'520'}}>
                                        {
                                            qh.map((v,i)=>{
                                                console.log(v.value[1]);
                                                return (<Option value={v.value[1]}>{v.value[1]}</Option>)
                                            })
                                        }
                                    </Select>
                                </div>
                                <div className={style.phone}>
                                    <FormItem>{getFieldDecorator('phone', {
                                    rules: [{
                                        required: true, message: '请输入正确格式的手机号码!',pattern:/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/}],
                                })(<div>
                                    <Input className={style.inputp} placeholder="手机号"/></div>
                                )}
                                </FormItem>
                                </div>
                            </div>
                            <div className={style.tuxing}>
                                <img className={style.authCode} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508392689327&di=de9f7dd0fb15a19b677b80a6e88956f2&imgtype=0&src=http%3A%2F%2Fimages2015.cnblogs.com%2Fblog%2F875028%2F201605%2F875028-20160513234811280-1452474757.png" alt=""/>
                                <FormItem>{getFieldDecorator('authCode', {
                                    rules: [{ required: true, message: '请输入正确格式的验证码!' }],
                                })(<div>
                                    <Input className={style.inputp} placeholder="请输入图形验证码"/></div>
                                )}
                                </FormItem>
                            </div>
                            <div className={style.tuxing}>
                                <FormItem>{getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入正确格式的密码!',pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/ }],
                                })(<div>
                                    <Input className={style.inputp} placeholder="密码6-24位字母、数字、字符"/></div>
                                )}
                                </FormItem>

                            </div>

                            <FormItem>
                                <Button type="primary" htmlType="submit" style={{width:'100%',height:40,marginTop:40}}>完成注册并登录</Button>
                            </FormItem>
                            <div className={style.toggletab}>
                                <a className={style.reg} href="javascript:void (0)">
                                    直接登录
                                </a>
                                <span className={style.noacc}>
                                    已有账户、
                                </span>
                            </div>
                        </div>
                    </div>
                    </Form>

                </Modal>
            </div>
        )

    }
}

function showConfirm() {
    confirm({
        title: 'Do you want to delete these items?',
        content: 'When clicked the OK button, this dialog will be closed after 1 second',
        onOk() {
            return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
        },
        onCancel() {},
    });
}

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

LoginBox = connect(mapStateToProps, mapDispatchToProps)(LoginBox)
const WrappedLoginBox = Form.create()(LoginBox)

export default WrappedLoginBox;