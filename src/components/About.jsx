import * as React from 'react';
export default class About extends React.Component {
  render() {
    return (
        <div className="about view">
        <h1 className="resume">个人简历</h1>
        <div className="about-header">
            <div className="person-base">
                <h2 className="name">冷夜流星</h2>
                <h4 className="aim">求职目标：web前端工程师</h4>
            </div>
            <ul className="person-info">
                <li><i className="fa fa-user fa-fw"></i>23岁</li>
                <li><i className="fa fa-phone fa-fw"></i>185(*^_^*)7248</li>
                <li><i className="fa fa-flag fa-fw"></i>计算机科学与技术</li>
            </ul>
            <ul className="person-info">
                <li><i className="fa fa-map-marker fa-fw"></i>广东省广州市</li>
                <li><i className="fa fa-envelope fa-fw"></i>845177026@qq.com</li>
                <li><i className="fa fa-university fa-fw"></i>大学本科</li>
            </ul>
            <div className="person-img">
                <img src="/static/images/avatar.png" alt="头像" />
            </div>
        </div>
        <div className="about-main">
            <div className="about-main-item">
                <h4 className="about-main-title">专业技能<i className="fa fa-leaf"></i></h4>
                <div className="about-main-content">
                    ● 了解 photoshop 软件以及 axurepr 原型界面软件； <br />
                    ● 能开发符合w3c规范的前台网页、对 div+css 盒子模型布局有深刻的理解; 熟悉掌握 javascript 中 dom 编程<br />
                    基本原理、以及面向对象编程思想；<br />
                    ● 对于JS高级里面(闭包，作用域等有一定的认识)掌握并使用前端框架 bootstrap、vue 、react 、jQuery<br />
                    等；<br />
                    ● 熟悉 html5 语义化标签编程和 css3 结构选择器和动画并加以使用；<br />
                    ● 熟悉掌握 nodejs+mongoose+express 的服务器搭建；<br />
                    ● 熟悉 ajax异步刷新；<br />
                    ● 具有一定架构项目的能力；<br />
                    ● 具备较强的学习能力和主动性，有良好的时间和流程意识。<br />
                    ● 了解git操作，熟悉nodejs与npm生态化开发<br />
                </div>
            </div>
            <div className="about-main-item">
                <h4 className="about-main-title">项目经验<i className="fa fa-graduation-cap"></i></h4>
                <ul className="about-main-content">
                    <li>
                     <h4>项目：在线web播放器开发</h4>
                     <p>项目简介： 在w3cschool学习，独立完成基于html5，css3，js的在线音乐播放器，纯原生js编写</p>
                     <p>● 负责页面的界面ui设计，开发，以及逻辑开发</p>
                    </li>
                    <li>
                           <h4>项目：个人博客开发</h4>
                     <p>项目简介： 项目简介：一个类博客的应用，主要负责博客的界面ui设计，后台数据交换逻辑实现，项目文件架构，迭代开发</p>
                     <p>● 主要是使用html5、div+css3+javascript dom操作等前端web技术进行网站的开发。<br/>
    ● 后期版本跳跃，前端使用vue2.0框架，实现前后端同构，webpack构建前端。<br/>
    ● 后端采用nodejs express mongodb react。利用mongoose进行模型规划。<br/>
    ● 项目采用gulp进行自动化开发</p>
    站点： https://www.lizc.me
    项目开源代码: https://github.com/bs32g1038/node-blog
                    </li>
                </ul>
            </div>
                <div className="about-main-item">
                <h4 className="about-main-title">技能评价<i className="fa fa-edit"></i></h4>
                <div className="about-main-content">
                   ● 具有良好的团队精神，很强的责任感；<br/>
    ● 工作踏实，认真负责，能够灵活处理工作中的突发事件；<br/>
    ● 爱好篮球、旅游、热爱生活，勤奋好学，自学能力强。<br/>
    ● 我正在找一个平台，能够充分把自己的优势发挥出来，共同努力成就一番事业<br/>
                </div>
            </div>
        </div>
    </div>
    )
  }
}