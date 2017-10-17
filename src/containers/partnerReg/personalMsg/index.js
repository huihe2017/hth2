import React from 'react';
import style from "./index.css";
import Title from "../title/index";
import Webfile from "../webFile/index";
import Input from "../input/index";
import Selphone from "../selPhone/index"


class Personal extends React.Component {
    change(vaildMsg, name) {
        this.props.change(vaildMsg, 'personalMsg', name)
    }


    render() {
        let data1 = [{
            value: ["中国大陆", "+86"],
            key: 1
        }, {
            value: ["中国香港", "+886"],
            key: 2,
            checked: true
        }, {
            value: ["中国台湾", "+853"],
            key: 3,

        }];
        let putword1 = ["点击上传人像面", "点击上传国徽面"];
        let tipword1 = [
            "1.文件为数码照片，请勿进行美化和修改，以免申请失败",
            "2.上传文件格式支持png，jpg和bmp",
            "3.文件大小不超过3MB，文件尺寸最小为200px*150px"
        ];


        console.log(this.props.data.email.state)
        return (
            <div className={style.personal}>
                <Title content={"/联络人信息"} color={"#5262ff"}/>
                <div className={style.perimport}>
                    <Input
                        change={this.change.bind(this)}
                        pattern={/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/}
                        lebal="email"
                        st={'100%'}
                        cla={this.props.data.email.state}
                        align={"top"}
                        pla={"邮箱"}
                        tip={"联络人姓名需与身份证姓名一致"}
                        firstEdit={this.props.data.email.firstEdit}
                    />
                    <Input
                        st={'100%'}
                        lebal="userName"
                        cla={this.props.data.userName.state}
                        align={"top"}
                        pattern={/\S/}
                        pla={"账号名"}
                        tip={"文案待定"}
                        change={this.change.bind(this)}
                        firstEdit={this.props.data.userName.firstEdit}
                    />
                    <Input
                        st={'100%'}
                        cla={this.props.data.contactPerson.state}
                        align={"top"}
                        pla={"联络人"}
                        tip={"联络人姓名需与身份证姓名一致"}
                        pattern={/\S/}
                        lebal="contactPerson"
                        change={this.change.bind(this)}
                        firstEdit={this.props.data.contactPerson.firstEdit}
                    />
                    <Selphone
                        ttip="联络人姓名需与身份证姓名一致"
                        lebal="phoneMsg"
                        change={this.change.bind(this)}
                        pattern={/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/}
                        cla={this.props.data.phoneMsg.state}
                        align={"top"}
                        twidth={100}
                        iwidth={400}
                        firstEdit={this.props.data.phoneMsg.firstEdit}
                    />
                    <Input
                        st={'100%'}
                        cla={this.props.data.sfz.state}
                        align={"top"}
                        pla={"身份证号"}
                        lebal="sfz"
                        pattern={/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/}
                        change={this.change.bind(this)}
                        tip={"请填写15位一代身份证号或18位二代身份证号，同一个身份证号只能绑定一个海豚汇账号"}
                        firstEdit={this.props.data.sfz.firstEdit}
                    />
                </div>
                <div className={style.upfile}>
                    <Webfile title={"上传身份证照片"} putword={putword1} tipword={tipword1}/>
                </div>


            </div>
        )

    }

}

export default Personal;