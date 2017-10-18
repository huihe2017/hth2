import React from "react";
import style from "./index.css";

class HeaderNav extends React.Component{
    render(){

        return(
            <button className={this.props.showBorder?(style.nav+" "+style.isborder):(style.nav+" "+style.noborder)} style={this.props.ischangecolor?{borderColor:"#656b6f",color:"#656b6f"}:{borderColor:"#fff",color:"#fff"}}  onClick={this.changeB.bind(this)}>
                {this.props.content}
            </button>
        )
    }
    changeB(){

    }
}

export default HeaderNav;