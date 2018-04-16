import React, { Component } from 'react';
import './stylesheets/App.css';
import { NavBar,Icon } from 'antd-mobile';
import code from './images/20170912100703.png';
import footer from './images/footer.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Nav">
            <NavBar
                mode="light"
                onleftClick={() => console.log('onLeftClick')}
                leftContent={
                    <Icon key="0" type="ellipsis" />
                }
            >派纳盛世</NavBar>
        </div>
          <div children="e">
              {this.props.children}
          </div>
        <div className="footer">
            <img src={footer}/>
            <div className="content">
                <div className="weixin">
                    <p>微信公众号</p>
                    <img src={code}/>
                </div>
                <div className="contact">
                    <p>官方QQ：2150833560</p>
                    <p>服务电话：(023)81625553</p>
                    <p>联系邮箱：connect@pheyday.com‍</p>
                    <p>工作时间：法定工作日 9:00AM to 5:30PM</p>
                    <p>官网授权：©2017 Copyright P.HeyDay All rights reserved | 渝ICP备17011937号</p>
                </div>
            </div>

        </div>
      </div>
    );
  }
}

export default App;
