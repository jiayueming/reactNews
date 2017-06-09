/**
 * Created by Administrator on 2017/5/15 0015.
 */
import React from 'react';
var ReactDOM = require('react-dom');
import { Route, BrowserRouter,Switch} from 'react-router-dom';
import {Button} from 'antd';
import MonileIndex from './components/mobile_index';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import MobileNewsDetails from './components/mobile_news_details';
import PCUserCenter from './components/pc_usercenter';
import MobileUserCenter from './components/mobile_usercenter';

export default class Root extends React.Component{
    render(){
        return (
           //适配pc和手机端
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={PCIndex}></Route>
                            <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                            <Route path="/usercenter" component={PCUserCenter}></Route>
                        </Switch>

                    </BrowserRouter>
                </MediaQuery>
                <MediaQuery query='(max-device-width:1224px)'>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" component={MonileIndex}></Route>
                            <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
                            <Route path="/usercenter" component={MobileUserCenter}></Route>
                        </Switch>

                    </BrowserRouter>
                </MediaQuery>
            </div>
        )

 }
}
ReactDOM.render(
    <Root />,
    document.getElementById('mainContainer')
)