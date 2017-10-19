import React from 'react'
import {Route, Router,IndexRoute, hashHistory} from 'react-router'
import Home from './containers/home/'


import PartnerReg from './containers/partnerReg/'
import UserCenter from './containers/userCenter/'

export default () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Home}/>
            <Route path="/partnerReg" component={PartnerReg}/>
            <Route path="/userCenter" component={UserCenter}/>
        </Router>
    )
}