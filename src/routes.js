import React from 'react'
import {Route, Router,IndexRoute, hashHistory} from 'react-router'
import Home from './containers/home/'


import PartnerReg from './containers/partnerReg/'
import UserCenter from './containers/userCenter/'
import Log from './components/loginBox/'
import Reg from './components/registerBox/'
import DolphinSchool from './containers/dolphinSchool/'
import AboutUs from './containers/aboutUs/'
import DealTerrace from './containers/dealTerrace/'
import ProductDeal from './containers/productDeal/'
import PartnerEntry from './containers/partnerEntry/'

export default () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Home}/>
            <Route path="/partnerReg" component={PartnerReg}/>
            <Route path="/userCenter" component={UserCenter}/>
            <Route path="/log" component={Log}/>
            <Route path="/reg" component={Reg}/>
            <Route path="/aboutUs" component={AboutUs}/>
            <Route path="/DolphinSchool" component={DolphinSchool}/>
            <Route path="/DealTerrace" component={DealTerrace}/>
            <Route path="/ProductDeal" component={ProductDeal}/>
            <Route path="/partnerEntry" component={PartnerEntry}/>
        </Router>
    )
}