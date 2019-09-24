import React, { Component } from 'react';
import JParticles from 'jparticles';

class Header extends Component {
  componentDidMount() {
    setTimeout(() => {
      new JParticles.particle('#homeCover', {
        color: '#25bfff',
        lineShape: 'cube',
        range: 2000,
        proximity: 100,
        // 开启视差效果
        parallax: true
      });
    }, 0);
  }

  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

   return (
    <header id="home">
    <div id="homeCover" className="home-cover"></div>

    <nav id="nav-wrap">

      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

      <ul id="nav" className="nav">
        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
        <li><a className="smoothscroll" href="#about">About</a></li>
	      <li><a className="smoothscroll" href="#resume">Resume</a></li>
        <li><a className="smoothscroll" href="#portfolio">Works</a></li>
        {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
        {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
      </ul>

    </nav>

    <div className="row banner">
      <div className="banner-text">
        <div className="avatar-wrapper">
          <div className="avatar">
          </div>
        </div>
        <h2>梁勇, 百度高级前端开发工程师（上海研发中心）</h2>
        <h3>对所有新鲜的事物都保持好奇心，热衷于技术，并且坚信科技改变世界</h3>
        <hr />
        <ul className="social">
          {networks}
        </ul>
      </div>
    </div>

    <p className="scrolldown">
      <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
    </p>

  </header>
   );
  }
}

export default Header;
