import React from "react";
import style from "./index.css";

import { Input,  } from 'antd'

class TextImport extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // number: value.number
        }
    }
    handleNumberChange = (e) => {
        const number = parseInt(e.target.value || 0, 10);
        if (isNaN(number)) {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({ number });
        }
        this.triggerChange({ number });
    }
    render(){
        return(
            <div className={style.percontent}>
                <span className={style.tiptext}>{this.props.tip}</span>
                <Input placeholder={this.props.pla} size={'large'} style={{lineHeight:'40',height:'40',paddingLeft:'12'}} onChange={this.handleNumberChange}/>
            </div>
        )
    }

}

export default TextImport;