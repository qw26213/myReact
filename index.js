import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute,hashHistory } from 'react-router'
import App from './modules/App'
import Myapp from './modules/Myapp'
import Laws from './modules/Laws'
import Feedback from './modules/Feedback'
import QuickPay from './modules/QuickPay'
import pauseReport from './modules/pauseReport'
import Mount from './modules/Mount'
import Mend from './modules/Mend'
import MapSite from './modules/MapSite'
import Contactus from './modules/Contactus'
import WaterPrice from './modules/WaterPrice'
import WaterQuality from './modules/WaterQuality'
import LawContent from './modules/LawContent'
import MeterInfo from './modules/MeterInfo'
import MeterDetail from './modules/MeterDetail'
import AddMeter from './modules/AddMeter'
import CompileMeter from './modules/CompileMeter'
import PayInfo from './modules/PayInfo'
import AllFunction from './modules/Home/AllFunction'
import PayWays from './modules/PayWays'
import Coupon from './modules/Coupon'
import PayFee from './modules/PayFee'
import Chart from './modules/Chart'
import Select from './modules/Select'
import CityPicker from './modules/pages/picker/index'
import Iscroll from './modules/scroll'

import PullToRefresh from './modules/pages/pullToRefresh/index'
render((
      <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/Myapp" component={Myapp}/>
        <Route path="/Laws" component={Laws}/>
        <Route path="/Feedback" component={Feedback}/>
        <Route path="/QuickPay" component={QuickPay}/>
        <Route path="/pauseReport" component={pauseReport}/>
        <Route path="/Mount" component={Mount}/>
        <Route path="/Mend" component={Mend}/>
        <Route path="/MapSite" component={MapSite}/>
        <Route path="/Contactus" component={Contactus}/>
        <Route path="/WaterPrice" component={WaterPrice}/>
        <Route path="/WaterQuality" component={WaterQuality}/>
        <Route path="/LawContent" component={LawContent}/>
        <Route path="/MeterInfo" component={MeterInfo}/>
        <Route path="/MeterDetail" component={MeterDetail}/>
        <Route path="/AddMeter" component={AddMeter}/>
        <Route path="/CompileMeter" component={CompileMeter}/>
        <Route path="/PayInfo" component={PayInfo}/>
        <Route path="/AllFunction" component={AllFunction}/>
        <Route path="/PayWays" component={PayWays}/>
        <Route path="/Coupon" component={Coupon}/>
        <Route path="/PayFee" component={PayFee}/>
        <Route path="/Chart" component={Chart}/>
        <Route path="/Select" component={Select}/>
        <Route path="/CityPicker" component={CityPicker}/>
        <Route path="/Iscroll" component={Iscroll}/>

        <Route path="/PullToRefresh" component={PullToRefresh}/>
      </Router>
), document.getElementById('app'))



