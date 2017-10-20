import React from 'react';
import style from "./index.css"
import Title from '../../components/title'
import ContentList from '../../components/contentList'
import {hashHistory, Link} from 'react-router';
import {connect} from 'react-redux'
import { Input,Select,Form,AutoComplete,Button,Row,Col } from 'antd';
import UploadImg from '../partnerReg/uploadImg'

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
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
const bank=[{
    value:'中国人民银行',
    key:1
}, {
    value:'中国建设银行',
    key:2
}, {
    value:'中国农业银行',
    key:3,

}];
const sheng=[{
    value:'陕西',
    key:1
}, {
    value:'广东',
    key:2
}, {
    value:'广西',
    key:3,

}];
const city=[{
    value:'西安',
    key:1
}, {
    value:'深圳',
    key:2
}, {
    value:'广州',
    key:3,

}];

function handleChange(value) {
    console.log(`selected ${value}`);
}

class DetailUserMsg extends React.Component {
    constructor(props) {
        console.log(hashHistory)
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            checkNick: false,
        }
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

    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }

    render() {
        const { getFieldDecorator,getFieldError } = this.props.form;
        console.log(getFieldDecorator)
        const { autoCompleteResult } = this.state;
        const errors = getFieldError('email');
        const errorsp = getFieldError('phone');
        const errorsi = getFieldError('idCard');
        const errorse = getFieldError('userName');
        const errorsl = getFieldError('nickname');
        const errorss = getFieldError('setAccount');
        const errorsn = getFieldError('setNumber');
        const errorssb = getFieldError('selectBank');
        const errorsss = getFieldError('selectsheng');
        const errorssc = getFieldError('selectCity');


        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 60 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );
        return(
            <Form onSubmit={this.handleSubmit}>
                <div className={style.partreg}>

                    <div className={style.personal}>
                        <Title content={"/联络人信息"} color={"#5262ff"}/>
                        <div className={style.perimport}>
                            <div className={style.percontent}>
                                <FormItem>
                                <Row>
                                    <Col span={17}>
                                        {getFieldDecorator('captcha', {
                                            rules: [{ required: true,  }],
                                        })(
                                            <div>
                                                {(errors) ? <div className={style.errors} >请填写您绑定的手机号码收到的验证码【必填】</div> :<div className={style.right}>请填写您绑定的手机号码收到的验证码【必填】</div>}<Input style={{height:40,lineHeight:40,}} /></div>
                                        )}
                                    </Col>
                                    <Col span={5}>
                                        <Button style={{height:40,marginTop:40,width:120,marginLeft:20}}>发送验证码</Button>
                                    </Col>
                                </Row>
                            </FormItem>
                            </div>
                            <div className={style.percontent}>
                                <FormItem>
                                    {getFieldDecorator('nickname', {
                                        rules: [{
                                            required: this.state.checkNick,
                                            message: 'Please input your nickname',
                                        }],
                                    })(
                                        <div>
                                            {(errorse) ? <div className={style.errors} >请输入正确格式邮箱【选填】</div> :<div className={style.right}>请输入正确格式邮箱【选填】</div>}<Input className={style.input} placeholder="邮箱"/></div>)}
                                </FormItem>
                            </div>
                            <div className={style.percontent}>
                                <FormItem

                                    hasFeedback
                                >
                                    {getFieldDecorator('idCard', {rules: [ {required: true, whitespace: true,pattern:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/ }],})(<div>
                                        {(errorsi) ? <div className={style.errors} >请填写15位一代身份证号或18位二代身份证号，同一个身份证号只能绑定一个海豚汇账号【必填】</div> :<div className={style.right}>请填写15位一代身份证号或18位二代身份证号，同一个身份证号只能绑定一个海豚汇账号【必填】</div>}<Input className={style.input} placeholder="身份证号"/></div>)}</FormItem>
                            </div>

                            <div className={style.percontent}>
                                <FormItem hasFeedback>
                                    {getFieldDecorator('email', {
                                        rules: [{
                                            type: 'email',
                                        }, {
                                            required: true,}],pattern:/^\S*$/
                                    })(
                                        <div>
                                            {(errors) ?
                                                <div className={style.errors} >姓名需与身份证姓名一致【必填】</div> :<div className={style.right}>姓名需与身份证姓名一致【必填】</div>}<Input className={style.input} placeholder="姓名"/></div>

                                    )}
                                </FormItem>
                            </div>
                            <div className={style.percontent}>
                                <FormItem>
                                    {getFieldDecorator('nickname', {
                                        rules: [{
                                            required: this.state.checkNick,
                                            message: 'Please input your nickname',
                                        }],
                                    })(
                                        <div>
                                            {(errorsl) ? <div className={style.errors} >住址需与身份证住址一致【选填】</div> :<div className={style.right}>住址需与身份证住址一致【选填】</div>}<Input className={style.input} placeholder="住址"/></div>
                                    )}
                                </FormItem>
                            </div>

                        </div>
                        <div className={style.upfile}>
                            <span className={style.pertip}>
                                上传身份证照片
                            </span>
                            <div className={style.imgfile}>
                                <div className={style.lupingbox}>
                                    <UploadImg tip="点击上传人像面"/>
                                </div>
                                <div className={style.rupingbox}>
                                    <UploadImg tip="点击上传国徽面"/>
                                </div>
                            </div>
                            <div className={style.uprequire}>
                                <p>
                                    1.文件为数码照片，请勿进行美化和修改，以免申请失败 <br/>
                                    2.上传文件格式支持png，jpg和bmp <br/>
                                    3.文件大小不超过3MB，文件尺寸最小为200px*150px
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.bankmsg}>
                        <Title content={"/银行信息【必填】"} color={"#5262ff"}/>
                        <div className={style.perimport}>
                            <div className={style.percontent}>
                                <FormItem
                                    //{...formItemLayout}
                                    hasFeedback
                                >
                                    {getFieldDecorator('setNumber', {rules: [ {required: true, whitespace: true }],
                                    })(
                                        <div>
                                            {(errorsn) ? <div className={style.errors} >结算卡号需与上传银行卡信息一致【必填】</div> :<div className={style.right}>结算卡号需与上传银行卡信息一致【必填】</div>}<Input className={style.input} placeholder="结算卡号"/></div>)}
                                </FormItem>
                            </div>
                            <div className={style.percontent}>
                                <FormItem

                                    hasFeedback
                                >
                                    {getFieldDecorator('selectBank', {
                                        rules: [
                                            { required: true, message: 'Please select your country!' },
                                        ],
                                    })(
                                        <div>
                                            {(errorssb) ? <div className={style.errors} >请选择银行，并与上传银行卡照片信息一致【必填】</div> :<div className={style.right}>请选择银行，并与上传银行卡照片信息一致【必填】</div>}<Select placeholder="请选择银行" size={'large'} style={{width:'100%',height:40,lineHeight:40 }} onChange={handleChange}>
                                            {
                                                bank.map((v,i)=>{
                                                    console.log(v.value);
                                                    return (<Option value={v.value}>{v.value}</Option>)
                                                })
                                            }
                                        </Select></div>
                                    )}
                                </FormItem>

                            </div>
                            <div className={style.percontent}>
                                <div className={style.selphone}>
                                    <FormItem hasFeedback>
                                        {getFieldDecorator('selectsheng', {
                                            rules: [
                                                { required: true, message: 'Please select your country!' },
                                            ],
                                        })(<div className={style.selbank}>{(errorssb) ? <div className={style.errors} >选择开户行，并与上传银行卡信息一致【必填】</div> :<div className={style.right}>选择开户行，并与上传银行卡信息一致【必填】</div>} <div className={style.kaihuhan}><Select placeholder="请选择省份" size={'large'} style={{width:'100%',height:40,lineHeight:40 }} onChange={handleChange}>
                                            {
                                                sheng.map((v,i)=>{
                                                    console.log(v.value);
                                                    return (<Option value={v.value}>{v.value}</Option>)

                                                })
                                            }
                                        </Select></div><div className={style.kaihuhang}><Select placeholder="请选择城市" size={'large'} style={{width:'100%',height:40,lineHeight:40 }} onChange={handleChange}>
                                            {
                                                city.map((v,i)=>{
                                                    console.log(v.value);
                                                    return (<Option value={v.value}>{v.value}</Option>)

                                                })
                                            }
                                        </Select></div><div className={style.kaihuhang}><Input className={style.input} size="large" placeholder="开户行"/></div></div>)}
                                    </FormItem>
                                </div>
                            </div>
                        </div>
                        <div className={style.upfile}>
                            <span className={style.pertip}>
                                上传银行卡照片
                            </span>
                            <div className={style.imgfile}>
                                <div className={style.lupingbox}>
                                    <UploadImg tip="点击上传银行卡正面"/>
                                </div>

                            </div>
                            <div className={style.uprequire}>
                                <p>
                                    1.文件为数码照片，请勿进行美化和修改，以免申请失败 <br/>
                                    2.上传文件格式支持png，jpg和bmp <br/>
                                    3.文件大小不超过3MB，文件尺寸最小为200px*150px
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.prfooter}>
                        <Button type="primary" ghost htmlType="submit" className={style.but} style={{ display:'block',width: 200, height: 60, margin: '0 auto', marginTop: 120,fontSize: 20}}>提交申请</Button>
                    </div>
                </div>
            </Form>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

DetailUserMsg = connect(mapStateToProps, mapDispatchToProps)(DetailUserMsg);
const WrappedDetailUserMsg = Form.create()(DetailUserMsg)
export default WrappedDetailUserMsg;