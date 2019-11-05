import React from "react"
import Layout from "../layout"
import arrow from "../assets/img/scroll-down.png"

export default class extends React.Component {

  componentDidMount () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then( registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }

  render(){
    return(
      <Layout>
        <header>
          <div>
            <div className="menu-wrap">
              <nav className="menu">
                <div className="icon-list">
                  <a href="index.html#home"><i className="fa fa-fw fa-home"></i><span>Home</span></a>
                  <a href="index.html#about"><i className="fa fa-fw fa-quote-left"></i><span>About</span></a>
                  <a href="index.html#service"><i className="fa fa-fw fa-globe"></i><span>Service</span></a>
                  <a href="index.html#portfolio"><i className="fa fa-fw fa-picture-o"></i><span>Portfolio</span></a>
                  <a href="index.html#blog"><i className="fa fa-fw fa-rss"></i><span>Blog</span></a>
                  <a href="index.html#contact"><i className="fa fa-fw fa-envelope-o"></i><span>Contact</span></a>
                </div>
              </nav>
            </div>
            <button className="menu-button" id="open-button"></button>
          </div>
          <section className="hero" id="hero">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-right navicon">
                  <a id="nav-toggle" className="nav_slide_button" href="index.html#"><span></span></a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 col-md-offset-1 inner">
                  <h1 className="animated fadeInDown">
                    J<span style={{color:'#E04343'}}>o</span>hn<br/>
                    <span>D<span style={{color:'#FFE800'}}>o</span>e</span>
                  </h1>
                  <h3 className="animated fadeInUp delay-05s"><span className="rotate">Web Designer,Photographer,3d Artist</span></h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-md-offset-3 text-center">
                  <p>SEE MORE</p>
                  <p className="scrollto--arrow"><img src={arrow} alt="scroll down arrow"/></p>
                </div>
              </div>
            </div>
          </section>
        </header>
        <section className="intro text-center section-padding color-bg" id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 wp1">
                <h1 className="arrow">A little <span>about</span> me</h1>
                <p>I am enough of an artist to draw freely upon my imagination. The point is that when I see a sunset or a <a href="#">waterfall</a> or something, for a split second it's so great, because for a little bit I'm out of my brain, and it's got nothing to do with me. I'm not trying to figure it out, you know what I mean? And I wonder if I can somehow find a way to maintain that mind stillness.</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}