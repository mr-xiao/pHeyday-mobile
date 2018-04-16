import React, { Component } from 'react';
import '../stylesheets/Home.css';
import 'animate.css/animate.min.css';
import { WingBlank, Tabs } from 'antd-mobile';
import bg from '../images/bg.png';
import location from '../images/location.png';
import hammer from '../images/hammer.png';
import csae from  '../images/case.png';
import information from '../images/information.png';
import hand from '../images/hammer.png';
import bg4 from '../images/bg4.png';
import bg5 from '../images/bg5.png';
class Home extends Component{

    render(){
        return(
            <div className="Home">
                <div className="bg">
                    <img src={bg}/>
                    <div className="content">
                            <p>
                                <span className="span1 animated fadeInLeft">异派同源</span>
                                <span className="animated fadeInRight">海纳百川</span>
                            </p>
                            <p className="animated fadeInUp">为人们日益提升的移动品质文化生活需求而革新，永为先驱！</p>
                    </div>
                </div>
                <div className="basisItem">
                    <div className="title">
                        <div>公司定位</div>
                        <div className="location"><img src={location}/></div>
                    </div>
                    <div className="item style1">
                        <WingBlank size="md">
                            派纳盛世(派纳盛世实业（上海）有限公司、重庆派纳盛世科技有限公司、霍尔果斯派纳盛世文化传媒有限公司)
                            是一家以互联网科技为传播载体、以文化娱乐产业为主要内容、以整合大数据资源为核心价值、以满足公众需求为创新方向的融合性企业，
                            目标成为一家立足资本市场的社会公众性企业。
                            公司以“专注、品质、创新、进取”为理念，按照品牌化、市场化、多元化、产业化的发展战略，
                            力于文化演出、剧目生产、公共文化、影视制作、艺术网络发展五大业务领域，
                            积极拓展文化交流、大型活动等衍生业务形态。
                        </WingBlank>
                    </div>
                </div>
                <div className="basisItem">
                    <div className="title">
                        <div>创新发展战略优势</div>
                        <div className="location"><img src={hammer}/></div>
                    </div>
                    <div className="item style2">

                    </div>
                </div>
                <div className="basisItem">
                    <div className="title">
                        <div>演出案例</div>
                        <div className="location"><img src={csae}/></div>
                    </div>
                    <div className="item style3">

                    </div>
                </div>
                <div className="basisItem">
                    <div className="title">
                        <div>新闻资讯</div>
                        <div className="location"><img src={information}/></div>
                    </div>
                    <div className="item style4">
                        <Tabs tabs={[
                            {title: '公司新闻', sub: '1'},
                            {title: '演出资讯', sub: '2'},
                            {title: '活动文化', sub: '3'},
                        ]}
                              initialPage={2}
                              tabBarPosition="top"
                              renderTab={tab => <span>{tab.title}</span>}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px'}}>
                                Content of first tab
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px'}}>
                                Content of second tab
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px'}}>
                                Content of third tab
                            </div>
                        </Tabs>
                    </div>
                </div>
                <div className="basisItem">
                    <div className="title">
                        <div>合作企业</div>
                        <div className="location"><img src={hand}/></div>
                    </div>
                    <div className="item style5">

                    </div>
                </div>
            </div>
        );
    }

}
export default Home;